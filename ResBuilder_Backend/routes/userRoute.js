const express = require('express')
const User = require('../models/userModel')
const app = express.Router()


// app.get('/register', async(req,res) => {
//     res.send("hello world");
// })


app.post('/login', async (req, res) => {
    try {
        const result = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });
        console.log(result)
        if (result) {
            res.send(result)
        }
        else {
            res.status(400).json(error)
        }
    }
    catch (error) {
        res.status(400).json(error)
    }

})

app.post('/register', async (req, res) => {

    try {
        console.log(req.body);
        const newuser = new User({
            username: req.body.username,
            password: req.body.password
        })
        await newuser.save((error, result) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(result);
                res.json({ message: "Registration succesfull" });
            }
        })
    }
    catch (error) {
        console.error(error);
        res.status(400).json(error)
    }

});

app.post('/update', async (req, res) => {

    try {
        await User.findOneAndUpdate({_id: req.body._id},req.body);
        const user = await User.findOne({_id:req.body._id});
        res.send(user);
    
    }
    catch (error) {
        res.status(400).json(error)
    }

});

module.exports = app