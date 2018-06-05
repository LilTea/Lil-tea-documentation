export function getInput(callback) {
    let string = '';
    var readline = require('readline');
   
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '',
        terminal: !!process.stdin.isTTY
    });
    rl.on('line', buf => string += buf + '\n');
    rl.on('close', _ => {
        callback(string.substr(0, string.length - 1));
    });
    /*process.stdin.resume();
    process.stdin.on('data', buf => string += buf.toString() );
    process.stdin.on('end', _=>callback(string));*/
}

export function getInputFromFile(path) {
    $.ajax({
        url: path,
        method: "GET",
        async: false
    }).then((data) => {return data})
}