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
app.get('/', (req,res) => {
    indexHtml = readFile("index.html");
    res.send(indexHtml);
});
