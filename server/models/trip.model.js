const mongoose = require("mongoose")


const TripSchema= new mongoose.Schema({
    location: {
        type: String,
        required: [true, "Resort or nearest mountain required"],
        minLength: [2, "Please enter a valid name"],
        trim: true
    },
    trails:{
        type: Array,
        required: [true, "You must have at least one trail on a trip"],
    },
    weather:{
        high: {
            type: Number
        },
        low: {
            type: Number
        },
        snowfall: {
            type: Number
        }
    },
    conditions: {
        visibility: {
            type: String,
            enum:[
                "High",
                "Average",
                "Low"
            ]
        }
    },
    notes:{
        type: String,
        default: "None"
    }
}, {timestamps:true})

module.exports = mongoose.model("Trip", TripSchema)

