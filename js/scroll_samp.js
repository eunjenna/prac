$(function(){
    $('html,body').stop().animate({'scrollTop':0},1500,'swing');
    /* swing : 시작/ 끝에서는 느리게 움직이지만 중간에서는 빨라진다. */
    //scrollTop 할 때 html의 body니까'html,body' 이렇게 써주기
    $('a[href*=#]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:$($(this).attr('href')).offset().top},500,'linear');
    });
});