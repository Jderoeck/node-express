const glob = require("glob");
const path = require("path");

// exporteer naar app
module.exports = (app) => {
    
    app.get('/', (req, res) => {
    res.render('antwoord');
});
    //zoekt routes
    glob.sync("./routes/!(index).js", {
        absolute: true,
    }).forEach(route =>{
        require(route)(app);
    });
};