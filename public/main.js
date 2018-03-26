
window.onload = () => { $('.nav').children().click(changeActive) };

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
