const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}




function onClickModalCloseBtn(e) {
    e.parentNode.parentNode.style.display = 'none';
    }


$('body').on('click', '.modal-open', function(e) {

    $('.modal-background, .modal').show();
    e.preventDefault();
})
.on('click', '.modal-close', function(e) {
    
    $('.modal-background, .modal').hide();
    e.preventDefault();
});
    
if ( !$('.modal-background.modal-close').length ) {
    $('<div/>').addClass('modal-background modal-close').appendTo('body');
}


