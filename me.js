$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('#scroller').addClass('stuck');
    } else {
        $('#scroller').removeClass('stuck');
    }

});