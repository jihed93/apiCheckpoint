const userController = require("../controllers/userController")

const Router=require("express").Router()
Router.get("/users",userController.getUsers)
Router.post('/addUser',userController.addUser)
Router.post('/updateUser',userController.updateUser)
Router.post('/deleteUser',userController.deleteUser)
module.exports = Router