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
});
