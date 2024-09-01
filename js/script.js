
// document.addEventListener("DOMContentLoaded", () => {
    
// });

$(document).ready(() => {
    loadNavbar();
    loadFooter();
})

function loadNavbar() {
    $('#navbar-section').load('navbar.html');   
}

function loadFooter(){
    $('#footer').load('footer.html');
}