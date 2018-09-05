$(document).ready(function () {
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabs li:first').addClass('active');

    $('.tabs li').click(function () {
        $('.tabs  li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        var selectTab = $(this).find('a').attr("href");
        $(selectTab).fadeIn();
        return false;
    });
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            dots: false,
            nav: true,
        });
    });
    $('.menuTrigger').click(function () {
        $('.navMenuWrapper').slideToggle(500);
    })



});

