$(window).scroll(function(){
    var navbar = document.getElementsById("navbar");
    if ($(window).scrollTop() >= 30) {
        navbar.addClass('shadow-5-strong');
       $('header').addClass('shadow-header');
    }
    else {
        navbar.removeClassClass('shadow-5-strong');
       $('header').removeClass('shadow-header');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() <= 30) {
        document.getElementById("navbar").addClass('shadow-5-strong');
    } else {
        document.getElementById("navbar").removeClass('shadow-5-strong');    
    }
});