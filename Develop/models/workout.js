// development pattern below using mongoose ODM to manage our data:

// create a schema in mongoose to be used for our WorkourSchema db
// include mongoose in the project
const mongoose = require("mongoose");
// call the Schema constructor
// create and instance of the Schema constructor to build the Schema 
const Schema = mongoose.Schema;




//  - todo next, build out the instance of the schema now
// review front end to see how data is populating the view
const WorkourSchema = new Schema({

   

})







// export our created mongoose model from WorkourSchema to be used elsewhere
// workout = the name of our collection
// WorkoutSchema = our schema defined above - to be built out
const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout;