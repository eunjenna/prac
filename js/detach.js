$(function(){
    const ticker = function(){
        //지연시간 뒤에 실행될 코드를 설정
        //setTimeout() 함수는 지정한 일정시간이 지난 후에 1회만 실행
        setTimeout(function(){
            $('#ticker li:first').animate({marginTop:'-20px'}, 400, function(){
                $(this).detach().appendTo('ul#ticker').removeAttr('style');
                //.removeAttr('style')
                //모든 동적 스타일을 제거하고 스타일 시트 스타일로 돌아가기
                //이 메소드는 선택된 요소들의 하나 또는 그 이상의 속성을 제거하는데 사용 ->marginTop:'-20px' 이걸 써놔서 .removeAttr('style')이걸 안해주면 계속 -20 -40처럼 -20씩 늘어남 초기화 하라는거임
            });
            ticker();
        }, 3000);  //setTimeout() 종료 3000: 3초 뒤에 실행해라?
    }; //ticker() 종료
    ticker();
});
//detach : 잘라서 붙이다
