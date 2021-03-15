// routes to serving, rendering our view - html pages in public
// require path module to manipulate paths when serving our html urls
const path = require("path");


// need to export to use in server.js
module.exports = function(app){
        // todo: add path calls to html content 
        // ORDER Matters !!!

        // connect the exercise page
        app.get("/exercise", function (req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
        });
     
        // route to the stats page 
        app.get("/stats", function (req, res){
        res.sendFile(path.join(__dirname,  "../public/stats.html"))
        });        

        // wildcard to access anything following the base URL
        app.get("/*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
        });

}



