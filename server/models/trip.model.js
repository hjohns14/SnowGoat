const { mongo } = require("mongoose")
const mongoose = require("mongoose")
const UserModel = require("./user.model").model
const UserSchema = require("./user.model").schema


const TripSchema= new mongoose.Schema({
    location: {
        type: String,
        required: [true, "Resort or nearest mountain required"],
        minLength: [2, "Please enter a valid name"],
        trim: true
    },
    trails:{
        type: [String],
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
        type: String,
        enum:[
            "sunny",
            "overcast",
            "snowing"
        ],
        required: [true, "Conditions are required"]
    },
    notes:{
        type: String,
        default: "None",
        required: [true, "Notes required"]
    },
    date: {
        type: Date,
        default: ''
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: "User"
    }
}, {timestamps:true})

// TripSchema.pre('remove', {document:true, query:false}, function(next){
//     console.log("Hello")
//     UserModel.updateOne({ _id: this.userId.toString() },
//         { $pull: { trips: this._id.toString() } },
//         { multi:true })
//     .exec()
//     next()
// })

UserSchema.pre('remove', function(next){
    TripSchema.remove({userId: this._id}).exec()
    next()
})

module.exports = {
    model: mongoose.model("Trip", TripSchema),
    schema: TripSchema
}

