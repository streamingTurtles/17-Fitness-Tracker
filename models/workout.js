// development pattern below using mongoose ODM to manage our data:

// create a schema in mongoose to be used for our WorkourSchema db
// include mongoose in the project
const mongoose = require("mongoose");

// call, create and instance of the Schema constructor to build the Schema 
const Schema = mongoose.Schema;

//  - todo next, build out the instance of the schema now
// review front end to see how data is populating the view
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            weight: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            },
            type:{
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true,
                default: "workout exercise"

            },
            duration: {
                type: Number,
                required: true,
                default: 0

            }            
        }] 
    
    }, 

    {
        // https://mongoosejs.com/docs/2.7.x/docs/virtuals.html
        // add to the model definition, setting a virtual field to true to see on the frontEnd 
        toJSON: {
            virtuals: true
        }
    }    
    );


    // https://mongoosejs.com/docs/tutorials/virtuals.html
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // Now use the virtual attribute to compute the "totalDuration", duration of the local exercise.duation 
    WorkoutSchema.virtual("totalDuration").get(function () {
        return this.exercises.reduce(function(total, exercise) {
            return total + exercise.duration;
        }, 0);
    });


const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout;



