const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const fs = require('fs'); 
const app = express();

app.use(express.static('public'));


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
