var btnOpen = document.querySelector('.mở-modal')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal_đầu i')
var iconClose = document.querySelector('.modal_đuôi button')

function toggleModal(e) {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget) {
        toggleModal();
    }
})



