const express = require('express');
const app = express();

// JSON object
const config = {
    port: process.env.PORT || 3000,
};

//listening to port 3000
app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});


// Init routes
require("./routes/")(app);

//set view engine to ejs
app.set('view engine', 'ejs');

//tijdelijke link naar css en images
app.use(express.static("public"));