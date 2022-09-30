const resortController = require("../controllers/resort.controller")
const ResortsController = require("../controllers/resort.controller")

module.exports = (app) =>{
    app.get("/api/resorts", ResortsController.getAll)
    app.get("/api/resorts/:id", ResortsController.getById)
    app.post("/api/resorts", ResortsController.create)
    app.post("/api/resorts/trails/:name", resortController.addTrail)
    app.put("/api/resorts/:id", ResortsController.update)
    app.delete("/api/resorts/:id", ResortsController.destroy)
}