const Trip = require("../models/trip.model").model
const User = require("../models/user.model").model

module.exports ={
    create: async function(req, res) {
        Trip.create(req.body)
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(err))
    },
    getAll: function(req, res) {
        // Change sort by user input date not created at
        Trip.find({}, null, {sort: {createdAt: "desc"}})
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(err))
    },
    getById: function(req, res) {
        Trip.findOne({_id: req.params.id})
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json({message: "Could not find Trip", err}))
    },
    update: function(req, res) {
        Trip.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(err))
    },
    destroy: async function(req, res) {
        Trip.findOneAndDelete({_id: req.params.id})
        .then(trip => {
            User.updateOne({_id: trip.userId.toString()}, {$pull: {trips: trip._id}})
            .then(user => {})
            .catch(err => res.status(400).json(err))
            res.json({deletedTrip: trip})
        })
        .catch(err => res.status(400).json(err))
    },
}