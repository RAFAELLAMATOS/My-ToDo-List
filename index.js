const express = require("express"); 
const path = require("path") 
const routes = require("./routes/routes")

const app = express(); 
const port = 3000;  

app.set("view engine", "ejs"); //set ejs view engine
app.use(express.static(path.join(__dirname, "public"))) //use the css, js and all static files from public folder
app.use(routes) //use the routes from the routes.js

app.listen(port, () => console.log(`Server running on port ${port}`));
