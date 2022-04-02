/*
    버튼 0 누르면
    -모든 버튼에 붙은 orange 클래스명 제거
    -버튼 0에 orange 클래스명 추가
    -모든 div에 붙은 show 클래스명 제거
    -div0 show 클래스명 추가
*/

// jquery의 경우 .클래스를 가져오는 경우 모든 클래스를 가져오는데.
// index의 원하는 자리를 가져와야하는 경우 eq() 메서드를 통해서 가져오면 된다.

let button1 = $('.tab-button');
let button2 = '.tab-button';
let content1 = $('.tab-content');
let content2 = '.tab-content';


button1.eq(0).on('click', function(){
    button1.removeClass('orange');
    button1.eq(0).addClass('orange');
    content1.removeClass('show');
    content1.eq(0).addClass('show');
});

if(count == 1){
    document.querySelectorAll(button2)[1].addEventListener('click', function(){
        document.querySelector(button2).classList.remove('orange');
        document.querySelectorAll(button2)[1].classList.add('orange');
        document.querySelector(content2).classList.remove('show');
        document.querySelectorAll(content2)[1].classList.add('show');
    });

    count = 2;
}

if(count == 2){
    document.querySelectorAll(button2)[2].addEventListener('click', function(){
        document.querySelector(button2).classList.remove('orange'); 
        document.querySelectorAll(button2)[2].classList.add('orange');
        document.querySelector(content2).classList.remove('show');
        document.querySelectorAll(content2)[2].classList.add('show');
    });

    count = 1;
}