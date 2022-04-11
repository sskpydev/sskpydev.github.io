/* ------------------------------
fadeUp
------------------------------ */
function fadeUp() {
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
    fadeUp();
});

$(window).scroll(function() {
    fadeUp();
});

/* ------------------------------
openButton
------------------------------ */
$(function() {
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
});

/* ------------------------------
smoothScroll
------------------------------ */
$(function() {
    $('a[href*="#"]').click(function() {
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 500, "swing");
        return false;
    });
});
