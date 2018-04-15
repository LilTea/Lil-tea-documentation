
window.onload = () => { $('.nav').children().click(changeActive); $('input').click(showExpl) };

function changeActive(){
    console.log("asd");
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
    let exlp = $(this).parent().parent().next()
    if($(this).parent().parent().next().is(':visible')){
        exlp.fadeOut()
    }else{
        exlp.fadeIn()
    }
}