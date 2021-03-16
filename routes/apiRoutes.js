// routes to our backend model db serving to req,res
const db = require("../models");



// need to export to use in server.js
module.exports = app => {
        // todo: add REST api methods .get, post, put, delete 

        // from public api - get the workout data find all the data {}
        app.get("/api/workouts", (req, res) => {
            db.Workout.find({}).then(dbWorkouts => {res.json(dbWorkouts) })
                               .catch(err => {res.json(err) }) 
        });



        // from public api - get the data for the range stats page
        app.get("/api/workouts/range", (req, res) => {
            db.Workout.find({}).then((dbWorkouts) =>{res.json(dbWorkouts) })
                               .catch(err => {res.json(err) });
        });


        // from public api - input data, creating the data for our completed workouts
        app.post("/api/workouts", (req, res) => {
            db.Workout.create({}).then((dbWorkouts) => {res.json(dbWorkouts) })
                                 .catch(err => {res.json(err) });
        });


        // from puclic api - update the workout data
        app.put("/api/workouts/:id", (req, res) => {
            db.Workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: req.body })
                                .then((dbWorkouts) => {res.json(dbWorkouts) })
                                .catch(err => {res.json(err) });
        });     
        
}