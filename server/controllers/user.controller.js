const User = require("../models/user.model").model
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
// const {secret, authenticate} = require("../config/jwt.config")
require('dotenv').config()

module.exports = {
    //Create used for  registration or testing
    create: function(req, res) {
        User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({message: "Something Went wrong", error: err}))
    },
    getAll: function(req, res) {
        User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
    },
    getById: function(req, res) {
        User.findOne({_id: req.params.id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
    },
    update: function(req, res) {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(user => res.json({updatedUser: user}))
        .catch(err => res.status(400).json(err))
    },
    destroy: function(req, res) {
        User.findOneAndDelete({_id: req.params.id})
        .then(user => res.json({deletedUser: user}))
        .catch(err => res.status(400).json(err))
    },
    register: async function(req, res) {
        const user = await User.findOne({email: req.body.email})

        if (user){
            return res.status(400).json({message: "ERROR: Email is already taken"})
        }
        try{
            const newUser = await User.create(req.body)
            return res.status(201).json(newUser)
        }
        catch(error){
            return res.status(401).json(error)
        }
    },
    login: async (req, res) =>{
        const user = await User.findOne({email: req.body.email})

        if (user === null){
            return res.status(401).json({message: "Incorrect Credentials"})
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password)

        if (!correctPassword){
            return res.status(401).json({message: "Incorrect Credentials"})
        }

        // const userToken = jwt.sign({
        //     id: user._id
        // }, process.env.SECRET_KEY)

        // This was after res and before .json
        // .cookie('usertoken', userToken, secret, {
        //     httpOnly: true
        // })
        res.json({msg: "Success", id: user._id, firstName: user.firstName})
    },
    logout: (req, res) =>{
        res.clearCookie("usertoken")
        res.sendStatus(200)
    },
    addTrip: (req, res) =>{
        User.findOneAndUpdate({_id: req.params.id}, {$push: {trips: req.body.trips}}, {new:true})
        .then(user => res.json({updatedUser: user}))
        .catch(err => res.status(400).json(err))
    },
    getUserTrips: (req, res) =>{
        User.findOne({_id: req.params.id}).populate("trips")
        .then(user => res.json(user))
        .catch(err => res.status(403).json({message: "Something went wrong with populate", err}))
    }


}