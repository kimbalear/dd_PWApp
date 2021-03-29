jQuery(document).ready(function () {

    $('#menu_icon').click(function () {
        $('.ham_bar').animate({ 'left': '0' }, 500);
        $('.scrim').show();
    });
    $('.scrim').click(function () {
        $('.ham_bar').animate({ 'left': '-228px' }, 500);
        $('.scrim').hide();
    });

});