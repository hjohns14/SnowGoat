const Trail = require("../models/trail.model").model

module.exports ={
    create: async function(req, res) {
        const trail = await Trail.findOne({name: req.body.name})

        if (trail){
            return res.status(400).json({message: "ERROR: Trail name is already taken"})
        }
        try{
            const newTrail = await Trail.create(req.body)
            return res.status(201).json(newTrail)
        }
        catch(error){
            return res.status(401).json(error)
        }
    },
    getAll: function(req, res) {
        Trail.find()
        .then(trail => res.json(trail))
        .catch(err => res.json(err))
    },
    getById: function(req, res) {
        Trail.findOne({_id: req.params.id})
        .then(trail => res.json(trail))
        .catch(err => res.status(400).json(err))
    },
    update: function(req, res) {
        Trail.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(trail => res.json(trail))
        .catch(err => res.status(400).json(err))
    },
    destroy: function(req, res) {
        Trail.findOneAndDelete({_id: req.params.id})
        .then(trail => res.json({deletedTrail: trail}))
        .catch(err => res.json(err))
    },
}