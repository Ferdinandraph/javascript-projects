'use strict';
const show_modal = document.querySelectorAll('.show-modal');
const modal_hidden = document.querySelector('.modal');
const close_modal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const closing_modal = ()=>{
    modal_hidden.classList.add('hidden');
    overlay.classList.add('hidden');
}
const opening_modal = ()=>{
    modal_hidden.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < show_modal.length; i++){
    show_modal[i].addEventListener('click', opening_modal)

close_modal.addEventListener('click', closing_modal)

overlay.addEventListener('click', closing_modal)
}
document.addEventListener('keydown', (e)=>{
if(!modal_hidden.classList.contains('hidden') && e.key == 'Escape'){
    closing_modal();
}
})