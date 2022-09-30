const TripController = require("../controllers/trips.controller")

module.exports = (app) =>{
    app.get("/api/trip", TripController.getAll)
    app.get("/api/trip/:id", TripController.getById)
    app.post("/api/trip", TripController.create)
    app.put("/api/trip/:id", TripController.update)
    app.delete("/api/trip/:id", TripController.destroy)
}