$(function(){
    var nav = $('.nav-top');
    var menu = $('.menu-list');
    $('#hamburger').click(function(){
        menu.slideToggle('medium', function(){
            if ($(this).is(':visible'))
                $(this).css('display','block');
        });
    });
    $(window).resize(function(){
        var width = $(window).width();
        if (width > 768){
            menu.css('display', 'flex');
            console.log(menu.attr('style'));
        } else if (menu.attr('style')!=='display: block;'){
            menu.css('display', 'none');
        }
    });
    $(window).scroll(function(){
       if ($(window).scrollTop()>50) {
           nav.addClass('min-height');
       } else {
           nav.removeClass('min-height');
       }
    });
});