$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(document).ready(function() {
    $("#nav-toggle").click(function() {
        $(".nav-item-wrapper").toggleClass("open-nav");
    });
});
$(document).ready(function() {
    $(".nav-link").click(function() {
        $(".nav-item-wrapper").toggleClass("open-nav");
    });
});
var amountScrolled = 700;
$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('500');
    } else {
        $('a.back-to-top').fadeOut('500');
    }
});