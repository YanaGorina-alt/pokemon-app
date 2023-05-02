require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Poke = require("./models/pokemon");
const {connect, connection} = require("mongoose");

// Database connection
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connection.once('open', ()=>{
    console.log('Connected to Mongo')
});

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
app.get("/pokemon", async (req,res) => {
    console.log("index Controller Function running")
    try{
        const foundPoke = await Poke.find({})
        res.status(200).render("Index",{pokemon: foundPoke})
    }catch (err){
        res.status(400).send(err)
    }
});

// New 
app.get("/pokemon/new", (req,res) =>{
    res.render("New")
})

// Create
app.post("/pokemon", async (req, res) =>{
    try{
        
        const newPoke = await Poke.create(req.body);
        console.log(newPoke);
        res.redirect("/pokemon")
    }catch (err){
        res.status(400).send(err);
    }

})

// Show
app.get("/pokemon/:id", async (req, res) =>{
    try{
        const foundPoke = await Poke.findById(req.params.id)
        res.render("Show", {poke: foundPoke})
    }catch (err){
        res.status(400).send(err)
    }
});




app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})