
window.onload = () => { $('.nav').children().click(changeActive); $('input').click(showExpl);$('textarea').val("lil@tea: ") ;$("textarea").on("keydown", keyPress);  $("textarea").on("click", setCursorToTheEnd) };

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
function keyPress(e){
    let ta = $(this)
    var requiredText = "lil@tea: "
    if(e.keyCode == 13){
        e.preventDefault()
        ta.val(ta.val() + "\n==> " + ta.val().substring(ta.val().lastIndexOf(requiredText) + requiredText.length) )
        ta.val(ta.val()+ "\n" + "lil@tea: ")
        
    }else if(e.keyCode == 8 && ta.val().substring(ta.val().lastIndexOf("\n")).indexOf(requiredText) == -1){
        e.preventDefault();
    }else if(e.keyCode == 8 && ta[0].selectionEnd != ta.val().length){
        e.preventDefault();
    }
}
function setCursorToTheEnd() {
    let elemLen =  $(this).val().length
    $(this).prop('disabled', true);
    $(this)[0].selectionStart = elemLen;
    $(this)[0].selectionEnd = elemLen;
    $(this)[0].focus();
    $(this).prop('disabled', false);
};