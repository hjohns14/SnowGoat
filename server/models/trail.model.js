const mongoose = require("mongoose")

const TrailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Trail must have name"],
        trim: true
    },
    difficulty:{
        type: String,
        enum:[
            "Bunny Slope",
            "Green",
            "Blue",
            "Black Diamond",
            "Double Black Diamond",
            "Back Country",
            "Other"
        ],
        required: [true, "Input trail difficulty"]
    },
    resort:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resort"
    }
})

module.exports ={
    schema: TrailSchema,
    model: mongoose.model("Trail", TrailSchema)
}