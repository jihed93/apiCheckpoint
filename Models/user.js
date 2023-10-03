const mongoose=require('mongoose')

const person=mongoose.Schema({
    name:String,
    age:Number,
},{
    timestamps: true
  })


const user=mongoose.model('User',person)

module.exports=user

