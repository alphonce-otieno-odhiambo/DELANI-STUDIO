$(document).ready(function() {
    $('#mouse-click').click(function() {
        $('#msck').slideDown("slow");

    });
});
$(document).ready(function() {
    $('.designe-image').click(function() {
        $('.designe-image').slideDown('1000').hide('100');
        $('.heading1').show('1000');
    });
    $('heading1').click(function() {
        $('heading1').slideUp('1000');
        $('designe-image').slideDown('1000');
    });

});
$(document).ready(function() {
    $("h2").on("click", function() {
        $(this).hide();
    });
});