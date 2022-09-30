const mongoose = require("mongoose")
const trail = require("./trail.model")

const ResortSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A resort must have a name"],
        minLength: [3, "Enter a valid name, must be 3 Chars"],
        trim: true
    },
    trails:{
        type: [mongoose.Schema.Types.ObjectId]
    }
})

module.exports ={
    schema: ResortSchema,
    model: mongoose.model("Resort", ResortSchema)
}