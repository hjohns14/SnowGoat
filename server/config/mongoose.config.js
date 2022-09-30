const mongoose = require("mongoose")
const dbName = "snowgoat"

mongoose.connect("mongodb://localhost/"+dbName,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to the database"))
.catch(err => console.log("Something went wrong with database connection", err))