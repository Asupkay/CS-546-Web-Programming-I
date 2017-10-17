const express = require("express");
//Create an express server
let app = express();
let routesConfig = require("./routes");

//Configure the routes for app
routesConfig(app);

//Set the server to listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
