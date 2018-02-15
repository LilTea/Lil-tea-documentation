const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs'); 
const app = express();
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/27017');

app.listen(3000, function() {
    console.log('Ready!');
})

function readFile(filename){
    return fs.readFileSync(filename).toString();
}

 indexHtml = readFile("index.html");
let container = "<div class= \"content\">"
let navigation = "<div class=\"navigation\">"


app.get('/', (req,res) => {
    indexHtml = readFile("index.html");
    indexHtml = indexHtml.replace(container, readFile("indexContent.html")).replace(navigation, "<p> Introduction </p> <hr>");
    res.send(indexHtml);
});

app.get('/tutorial', (req,res) => {
    indexHtml = readFile("index.html");
    
    indexHtml = indexHtml.replace(container, readFile("tutorial.html")).replace(navigation, "<p> Tutorial </p> <hr>");
    res.send(indexHtml);
})

app.get('/forum', (req,res) => {
    indexHtml = readFile("index.html");
    indexHtml = indexHtml.replace(container, readFile("forum.html")).replace(navigation, "<p> Forum </p> <hr>");
    res.send(indexHtml);
})

app.get('/about', (req,res) => {
    indexHtml = readFile("index.html");
    indexHtml = indexHtml.replace(container, readFile("about.html")).replace(navigation, "<p> About </p> <hr>");
    res.send(indexHtml);
})