import {getInputFromFile, getInput } from "./lib/helpers.js";
import {loadConfigSync} from "./lib/config.js";
import {engine} from "./lib/engine.js";
import {parseInput} from "./lib/inputParser.js"
import {runLilTea} from "./lib/lilTeaRunner.js"
import {completeLiterals} from "./lib/preLexer.js"
import {lil2jsToken} from "./lib/converters.js  "
window.onload = ()=>{
    $('#exec').on('click', mainFunc)
}
function appendToRes(output){
    
    $('#res').val($('#res').val() + output)
}
function mainFunc() {
    $('#res').val("")
    const tokens = loadConfigSync().specialTokens;
    const Engine = engine;
    const eng = new Engine(s => appendToRes(s));
    const source = $('#source').val()
    const input = $('#input').val()
    let stack = parseInput(input);
    eng.setStack(stack);
    runLilTea(
        completeLiterals(source, tokens), eng,
        lil2jsToken,
        tokens);
}