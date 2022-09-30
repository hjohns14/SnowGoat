const Trip = require("../models/trip.model")

module.exports ={
    create: async function(req, res) {
        Trip.create(req.body)
        .then(trip => res.json(trip))
        .catch(err => res.json(err))
    },
    getAll: function(req, res) {
        // Change sort by user input date not created at
        Trip.find({}, null, {sort: {createdAt: "desc"}})
        .then(trip => res.json(trip))
        .catch(err => res.json(err))
    },
    getById: function(req, res) {
        Trip.findOne({_id: req.params.id})
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(err))
    },
    update: function(req, res) {
        Trip.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(trip => res.json(trip))
        .catch(err => res.status(400).json(err))
    },
    destroy: function(req, res) {
        Trip.findOneAndDelete({_id: req.params.id})
        .then(trip => res.json({deletedTrip: trip}))
        .catch(err => res.json(err))
    },
}