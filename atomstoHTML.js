yaml = require('js-yaml');
fs   = require('fs');
 
// Get document, or throw exception on error
var doc = yaml.safeLoad(fs.readFileSync('./config/atoms.yaml', 'utf8'));
var string = ""
doc.forEach(element => {
   string += "<tr>\n"
   string += "      <td>" + element.lil + "</td>\n"
   string += "      <td>" + element.js + "</td>\n",
   string += '      <td><input type="image", src="index.png"></td>\n'
   string += "</tr>\n"
   string += '<tr class="hidden">\n'
   string += `      <td colspan = "3">${element.description}</td>\n`
   string += '</tr>\n'
   fs.appendFileSync('table.html', string);
   string = ""
});