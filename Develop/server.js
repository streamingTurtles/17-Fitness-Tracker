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
mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true, useUnifiedTopology: true});




// PORT setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`the app is running on the following port ${PORT}`);
});