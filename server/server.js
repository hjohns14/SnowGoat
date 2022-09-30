const express = require("express")
const cors = require("cors")
const app = express()
const port = 9000

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended:true})
)

require("./config/mongoose.config")
require("./routes/trails.routes")(app)
require("./routes/resorts.routes")(app)
require("./routes/trips.routes")(app)

app.listen(port, ()=> console.log(`Locked and loaded on port ${port}`))