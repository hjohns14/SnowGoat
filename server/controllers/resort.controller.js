const Resort = require("../models/resort.model").model

module.exports ={
    create: async function(req, res) {
        const resort = await Resort.findOne({name: req.body.name})

        if (resort){
            return res.status(400).json({message: "ERROR: Resort name is already taken"})
        }
        try{
            const newResort = await Resort.create(req.body)
            return res.status(201).json(newResort)
        }
        catch(error){
            return res.status(401).json(error)
        }
    },
    addTrail: async function(req, res){
        const resort = await Resort.findOne({name: req.params.name})
        
        if (resort){
            try{
                const updatedResort = await Resort.findOneAndUpdate({name: req.params.name}, {$push: req.body}, {new:true, runValidators:true})
                return res.status(201).json(updatedResort)
            }
            catch(err){
                return res.status(400).json(err)
            }
        }
        else{
            return res.status(404).json({message: "ERROR: resort not found"})
        }
    },
    removeTrail: async function(req, res){
        const resort = await Resort.findOne({name: req.params.name})
        
        if (resort){
            try{
                const updatedResort = await Resort.findOneAndUpdate({name: req.params.name}, {$pop: req.body}, {new:true, runValidators:true})
                return res.status(201).json(updatedResort)
            }
            catch(err){
                return res.status(400).json(err)
            }
        }
        else{
            return res.status(404).json({message: "ERROR: resort not found"})
        }

    },
    getAll: function(req, res) {
        Resort.find()
        .then(resort => res.json(resort))
        .catch(err => res.json(err))
    },
    getById: function(req, res) {
        Resort.findOne({_id: req.params.id})
        .then(resort => res.json(resort))
        .catch(err => res.status(400).json(err))
    },
    update: function(req, res) {
        Resort.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(resort => res.json(resort))
        .catch(err => res.status(400).json(err))
    },
    destroy: function(req, res) {
        Resort.findOneAndDelete({_id: req.params.id})
        .then(resort => res.json({deletedResort: resort}))
        .catch(err => res.json(err))
    },
}