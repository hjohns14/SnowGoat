const TrailController = require("../controllers/trails.controller")

module.exports = (app) =>{
    app.get("/api/trails", TrailController.getAll)
    app.get("/api/trails/:id", TrailController.getById)
    app.post("/api/trails", TrailController.create)
    app.put("/api/trails/:id", TrailController.update)
    app.delete("/api/trails/:id", TrailController.destroy)
}