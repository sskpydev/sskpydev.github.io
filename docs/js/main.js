$(function(){
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

    $('#nav a').on('click', function() {
        $('#header').removeClass('open');
    })

    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    })

    /* ------------------------------
    smooth scroll
    ------------------------------ */
    $('a[href^="#"]').on('click', function() {
        let href = $(this).attr('href');
        let target = $(href == '#' || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, 1000, "swing")
        return false;
    });
});
