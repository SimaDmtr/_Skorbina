$(document).ready(function () {
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabItem:first').addClass('active');
    $('.tabs a').click(function () {
        let tabs = $('.active');
        $(tabs).removeClass('active');
        $(this).parent().addClass('active');
        $('.tab-content').hide();
        var selectTab = $(this).attr("href");
        $(selectTab).fadeIn();
        return false;
    });
    $('.change').click(function(){
        let tabs = $('.active');
        let visibleTab  = $('.tabs-container :visible').first();
        let canChangeUp = $(visibleTab).next('.tab-content').length;
        let canChangeDown = $(visibleTab).prev('.tab-content').length;
        if ($(this).hasClass('next') && canChangeUp){
            tabs.removeClass('active');
            tabs.next('.tabItem').addClass('active');
            visibleTab.hide();
            $(visibleTab).next('.tab-content').fadeIn()
        }
        if ($(this).hasClass('prev') && canChangeDown){
            tabs.removeClass('active');
            tabs.prev('.tabItem').addClass('active');
            visibleTab.hide();
            $(visibleTab).prev('.tab-content').fadeIn()
        }
    })
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

