$(function(){
    $('.hambtn').click(function(){
        $('#ham_contain').animate({left:'0px'}, 300);
    });

    //sub
    $('#ham_menu>ul>li>a').click(function(){
        if($(this).next().is(':visible')){
            $(this).next().stop().slideUp(500);
            $(this).children('img').attr('src','img/arrow-down2.png');
        }else{
            $('.sub').stop().slideUp(500);
            $('#ham_menu> ul> li> a').children('img').attr('src','img/arrow-down2.png');
            $(this).next().stop().slideDown(500);
            $(this).children('img').attr('src','img/arrow-up2.png');
        }
    });

    //menu close
    $('.close').click(function(){
        $('#ham_contain').animate({left:'-410px'}, 300);
    });
});

