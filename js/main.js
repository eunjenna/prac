$(function(){
    //pc-nav
    $('#pc_nav').mouseenter(function(){
        $('#f_menu').stop().slideDown(500);
    });
    $('#pc_nav').mouseleave(function(){
        $('#f_menu').stop().slideUp(500);
    });

    //m-banner slide
    $('.ban').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1, //한 화면에 보여줄 아이템수
        slidesToScroll: 1, //한번에 슬라이드 시킬 아이템수
    });


//     let bnnNum=0;

//    //.prev 버튼 프로그램
//    $('.prev').click(function(){
//     if(bnnNum<=0) return false;
//     bnnNum--;
//     book_w=$('#m_banner').width();
//     $('#m_banner ul').animate({left:-book_w*bnnNum},500,function(){
//         $('#book_roll img').attr('src','img/roll_off.png'); //일단 모두 비활성화 해놓고
//         $('#book_roll img').eq(bnnNum).attr('src','img/roll_on.png'); //해당사항만 활성화로 바꿔라
//     }); //$('대상').eq(n) : 대상의 n번째
//   });


//     //.next 버튼 프로그램
//     $('.next').click(function(){
//         if(bnnNum>=3) return false;
//         bnnNum++;
//         book_w=$('#m_banner').width(); //#main_image의 width를 기억시켜라
//         $('#m_banner ul').animate({left:-book_w*bnnNum},500,function(){
//             $('#book_roll img').attr('src','img/roll_off.png');
//             $('#book_roll img').eq(bnnNum).attr('src','img/roll_on.png');
//         });
//     });

//     $('#book_roll li a').click(function(){
//         const strName=$(this).parent().attr('id');
//         slideTarget(strName.substr(3,1));
//         return false;
//     });

//     function slideTarget(n){
//         const pos = Number(n) * -100+'%'; //100% 쓰는 법 ,그냥 100%로 라고 쓰면 못읽음
//         $('#m_banner ul').animate({left:pos},500,function(){
//             $('#book_roll img').attr('src','img/roll_off.png');
//             $('#book_roll img').eq(n).attr('src','img/roll_on.png');
//         });
//     };  // slideTarget(n) 종료

//     //자동슬라이드 영역
//     let btnNum=0;
//     setInterval(function(){
//         btnNum++;
//         if(btnNum>3) btnNum=0; //배열번호가 3보다 크면 처음으로 돌아가라
//         $('#book_roll li a').eq(btnNum).trigger('click')
//     },3000); //trigger : click이벤트를 강제로 실행시켜라, 강제로 이벤트를 실행하는 명령어




    //m-menu slide
    $('.mlist').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 4, //한 화면에 보여줄 아이템수
        slidesToScroll: 1, //한번에 슬라이드 시킬 아이템수
        responsive: [
            {
                breakpoint: 770,  //770 미만은 3개
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 641,  //641 미만
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
});

