const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");



// Express settings
const app = express();  
app.use(express.urlencoded( {extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// open connection to our workout database
// https://mongoosejs.com/docs/index.html
// mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true, useUnifiedTopology: true});


// replaced only one option connection abbove with boiler plate code from 
// "MongoAtlas-Deploy.md" included setup instructions.
// Then, I replaced it with the the Heroku environment variable hodling 
// the Atlas db connection string stored in Herokus environment variable.
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);




// PORT setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`the app is running on the following port ${PORT}`);
});