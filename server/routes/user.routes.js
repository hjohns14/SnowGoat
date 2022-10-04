const UserController = require("../controllers/user.controller")
// const {authenticate} = require("../config/jwt.config")

module.exports = (app) =>{
    app.get("/api/users", UserController.getAll)
    app.get("/api/users/:id", UserController.getById)
    app.get("/api/users/trips/:id", UserController.getUserTrips)
    app.post("/api/users", UserController.register)
    app.post("/api/users/login", UserController.login)
    app.put("/api/users/trips/:id", UserController.addTrip)
    app.put("/api/users/:id", UserController.update)
    app.delete("/api/users/:id", UserController.destroy)
}