$(document).ready(function(){
    var gnbli = $('.gnb').find('li');
    var $friend = $('.footer_top').find('li:last-child');
    gnbli.on(
        'mouseenter',function(){
            gnbli.each(function(index){
                $(this).attr('data-index',index)
            });
            var index1 = $(this).attr('data-index')
            $('.gnb_over_wrap').stop(true).fadeOut(0);
            gnbli.find('.gbox').fadeOut(0);
            $('.g'+parseInt(index1)).stop(true).fadeIn(0);
            $(this).find('.gbox').fadeIn(0);
        });
    $('#header').on(
        'mouseleave',function(){
            $('.gnb_over_wrap').stop(true).fadeOut(0);
            gnbli.find('.gbox').fadeOut(0);
        });
    $('.header').on(
        'mouseenter',function(){
            $('.gnb_over_wrap').stop(true).fadeOut(0);
            gnbli.find('.gbox').fadeOut(0);
        });
        document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);;
    $('.date_button').on(
        'click',function(){
            $(this).toggleClass('open1');
            if($(this).hasClass('open1')){
                $('.date').slideDown(300);
            }else{
                $('.date').slideUp(300);
            }
        });
    $('.nav').find('li').on(
        'click',function(){
            $('.open').removeClass('open');
            $(this).addClass('open');
            $('.nav').find('li').find('span').text('+');
            $(this).find('span').text('-');
            $('.sub').slideUp(0);
            $(this).find('.sub').slideDown(0);
        });
    $('.popup_close').on(
        'click',function(){
            $(this).toggleClass('popup_open');
            if($(this).hasClass('popup_open')){
                $('#popup').stop(true).animate({'height':'47px'},500);
                $('.popup_close').animate({'top':'24.8%'},500,function(){
                    $(this).text('열기');
                });
            }else{
                $('#popup').stop(true).animate({'height':'525px'},500);
                $('.popup_close').animate({'top':'74.1%'},500,function(){
                    $(this).text('닫기');
                });
            };
        });
    $friend.on(
        'click',function(){
            $(this).toggleClass('open1')
            if($(this).hasClass('open1')){
                $('.friendsite').fadeIn(0);
            }else{
                $('.friendsite').fadeOut(0);
            }
        });
    $('#modal').on(
        'click',function(){
            $(this).fadeOut(300);
        });
});