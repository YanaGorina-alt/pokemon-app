const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon")

const reactViewsEngine = require('jsx-view-engine').createEngine();

app.engine('jsx', reactViewsEngine );

app.set("view engine", "jsx");

app.set("views", "./views");

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


app.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
})
// Index
app.get("/pokemon", (req,res) => {
    res.render("Index",{pokemon})
})




app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})