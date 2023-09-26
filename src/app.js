
const express = require('express');
const path = require('path');
const Subscribers = require('./models/subscribers');
const app = express();


// Your code goes here
// API to render HTML file -- GET METHOD
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

// API to get all data -- GET METHOD
app.get("/subscribers", async (req, res) => {
    try {
        let subscribers = await Subscribers.find();
        res.status(200).send(subscribers);
    } catch (error) {
        res.status(500)
    }
})
// API to get all subscribers by name and subscribed channel -- GET METHOD
app.get("/subscribers/names", async (req, res) => {
    try {
        let subscribers = await Subscribers.find({}).select("name subscribedChannel");
        res.status(200).send(subscribers);
    } catch (error) {
        res.status(500)
    }
})
// API to get subscribers by id -- GET METHOD
app.get("/subscribers/:id", async (req, res) => {
    try {
        let subscribers = await Subscribers.findById(req.params.id);
        res.status(200).send(subscribers);
    } catch (error) {
        res.status(400).send({
           Error_message: "No subscriber found related to this id."
        })
    }
})

module.exports = app;
