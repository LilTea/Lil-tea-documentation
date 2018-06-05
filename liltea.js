import {getInputFromFile, getInput } from "./lib/helpers.js";
import {loadConfigSync} from "./lib/config.js";
import {engine} from "./lib/engine.js";
import {parseInput} from "./lib/inputParser.js"
import {runLilTea} from "./lib/lilTeaRunner.js"
import {completeLiterals} from "./lib/preLexer.js"
import {lil2jsToken} from "./lib/converters.js  "
window.onload = ()=>{
    $('#exec').on('click', mainFunc)
    $('.nav').children().click(changeActive); 
    $('input[type=image]').click(showExpl);
    $($('#grid').children()[0]).children().filter((i,tr) => tr.className== "" ).each(
        function(i, tr){  
            if(i %  2 == 1){
                $(tr).attr("bgcolor", "#F46524")
            }
        }
    )
    $(".button").on("click", function(e){
        $(`#` + $(this).attr("value")).fadeIn().delay(3000).fadeOut()  
    })
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

function showResult(e){
    e.preventDefault();
}
function changeActive(){
    let toScrollto =  $(this).html().replace(/\s/g, '');
    let toScrollElement = $(`.${toScrollto}`);
    
    let offset = $(toScrollElement).offset().top
    window.scroll({
        top: offset - 10, 
        behavior: 'smooth' 
    });
    
    
    $('.active').removeAttr('class');
    $(this).addClass('active');
}
function showExpl(){
    console.log('asd')
    let exlp = $(this).parent().parent().next()
    if($(this).parent().parent().next().is(':visible')){
        exlp.fadeOut()
        $(this).attr("src","index.png")
    }else{
        exlp.fadeIn()
        $(this).attr("src","minus.png")
    }
}