// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

let enterLink = document.getElementById('link')
enterLink.addEventListener('click', ()=>{
    document.getElementById('reg').classList.add('hide')
    document.getElementById('signin').classList.remove('hide')
})

let regLink = document.getElementById('reg_link')
regLink.addEventListener('click', ()=>{
    document.getElementById('reg').classList.remove('hide')
    document.getElementById('signin').classList.add('hide')
})