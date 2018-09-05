$(document).ready(function () {
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabs li:first').addClass('active');
    $('.tabs a').click(function () {
        $('.tab-content').hide();
        var selectTab = $(this).attr("href");
        $(selectTab).fadeIn();
        return false;
    });

    $('.change').click(function(){
        let visibleTab  = $('.tabs-container :visible').first();
        let canChangeUp = $(visibleTab).next('.tab-content').length;
        let canChangeDown = $(visibleTab).prev('.tab-content').length;
        if ($(this).hasClass('next') && canChangeUp){
            visibleTab.hide();
            $(visibleTab).next('.tab-content').fadeIn().show()
        }
        if ($(this).hasClass('prev') && canChangeDown){
            visibleTab.hide();
            $(visibleTab).prev('.tab-content').fadeIn().show()
        }
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

