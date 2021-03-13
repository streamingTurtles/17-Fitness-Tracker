const express = require("express");
const mongoose = require("mongoose");



// Express settings
const app = express();  

app.use(express.urlencoded( {extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// PORT setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`the app is running on the following port ${PORT}`);
});