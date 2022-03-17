/* ------------------------------
hamburger button
------------------------------ */
$('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
        $('#header').removeClass('open');
    } else {
        $('#header').addClass('open');
    }
});

$('.nav-menu li a').on('click', function() {
    $('#header').removeClass('open');
});

$('#mask').on('click', function() {
    $('#header').removeClass('open');
});

/* ------------------------------
fadeup
------------------------------ */
function fadeAnime() {
    $('.fadeUpTrigger').each(function() {
        var scroll = $(window).scrollTop();
        var target = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll >= target - windowHeight + 50) {
            $(this).addClass('fadeUp');
        } else {
            $(this).removeClass('fadeUp');
        }
    });
};

$(window).on('load', function() {
    fadeAnime();
});

$(window).scroll(function() {
    fadeAnime();
});
