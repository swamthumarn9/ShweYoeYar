// $(window).scroll(function(){
//     var navbar = document.getElementsById("navbar");
//     if ($(window).scrollTop() >= 30) {
//         navbar.addClass('shadow-5-strong');
//        $('header').addClass('shadow-header');
//     }
//     else {
//         navbar.removeClassClass('shadow-5-strong');
//        $('header').removeClass('shadow-header');
//     }
// });

// const navEl = document.querySelector('.navbar');
// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 56) {
//         navEl.classList.add('navbar-scrolled');
//     }
//     else if (window.scrollY < 56) {
//         navEl.classList.remove('navbar-scrolled');
//     }
// })

// active navbar
// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop  > 20){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }

// nav hide 
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })

// $(window).scroll(function() {
//     if ($(window).scrollTop() <= 30) {
//         document.getElementById("navbar").addClass('shadow-5-strong');
//     } else {
//         document.getElementById("navbar").removeClass('shadow-5-strong');    
//     }
// });


// // active navbar
// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop  > 20){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }

// // nav hide 
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })
document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
    loadFooter();
});

function loadNavbar() {
    $('#navbar-section').load('navbar.html');
}

function loadFooter(){
    $('#footer').load('footer.html');
}
