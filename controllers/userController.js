const User = require("../Models/user")

const userController = {
    getUsers: async (req, res) => {
        const users = await User.find()
        if (users)
            res.status(201).json({ message: "success users found", Users: users })
    },
   
    addUser: async (req, res) => {
        const { name, age } = req.body

        if (!name || !age)
            res.status(400).json({ message: "missing fields" })

        const User = await User.create({ name: name, age: age })
        if (User)
            res.status(201).json({ message: "success user create", User: User })
    },

    updateUser: async (req, res) => {
        const userId = req.body.id;
        const name = req.body.name;
        const age = req.body.age;

        if (!userId || (!name && !age)) {
            res.status(400).json({ message: 'missing id or fields' });
        }
        const updateData = {};
        if (name) updateData.name = name;
        if (age) updateData.age = age;

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateData });

        if (!updatedUser) {
            res.status(404).json({ message: 'user not found !' });
        }
        res.status(200).json({ message: 'User updated successfully', User: updatedUser });

    },

    deleteUser: async (req, res) => {
        const userId = req.body.id;

        if (!userId) {
            res.status(400).json({ message: 'missing id' });
        }

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            res.status(404).json({ message: 'user not found !' });
        }

        res.status(200).json({ message: 'User deleted successfully', deletedUser: deletedUser });
    },
    
}
module.exports = userController