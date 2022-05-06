// 로그인 버튼을 누르는경우 로그인 모델창을 보여주는 이벤트기능
// 닫기 버튼을 누르는경우 해당 모델창을 닫아주는 이벤트기능
$('#login').on('click', ()=>{
    $('.black-bg').addClass('show-modal');
});

$('#close').on('click', ()=>{
    $('.black-bg').removeClass('show-modal')
})

// 아이디와 비밀번호가 맞는지? 검증하는 조건문
document.querySelector('.navbar-toggler').addEventListener('click',
() => {
    document.querySelector('.list-group').classList.toggle('show');
});

let id = document.querySelector("#id1");
let pwd = document.querySelector("#pwd1");

document.querySelector('#submit1').addEventListener('click', (e)=>{
    if(id.value === ""){
        alert('이메일을 입력해주세요.');
        e.preventDefault();
    } else if(pwd.value === ""){
        alert('비밀번호를 입력해주세요');
        e.preventDefault();
    };
});


// Dark nav를 클릭하는 경우 색깔이 바뀌게 조건문을 실행.
let count = 0;
document.querySelector(".badge").addEventListener('click', () => {
    count++;
    console.log(count);

    if(count%2 == 1){
        let text = document.getElementById("change-text");
        text.innerHTML = "Light 🔄";
        text.style.color = "white";
    }else{
        let text = document.getElementById("change-text");
        text.innerHTML = "Dark 🔄";
        text.style.color = 'gray';
    }
});

// // 5초 카운트 setInterval을 함수를 통해 카운트되면 지워지는 형식
// let count2 = 5;
// setInterval(function() {
//     count2 -= 1;
//     if(count2 >= 0){
//         document.querySelector('#num').innerHTML = count2;
//     }else if(count2 <= 0){
//         $('.alert').hide();
//     }
// }, 1000);


// 버튼을 누를때 애니메이션 구현
let count3 = 0;

$('#slide-1').on('click', function(){
    $('.slide-container').css("transform", "translate(0vw)");
    count3 = 0;
});

$('#slide-2').on('click', function(){
    $('.slide-container').css("transform", "translate(-100vw)");
    count3 = 1;
});

$('#slide-3').on('click', function(){
    $('.slide-container').css("transform", "translate(-200vw)");
    count3 = 2;
});


$('#next').on('click', function(){
    count3 += 1;
    if(count3 == 1){
        $('.slide-container').css("transform", "translate(-100vw)");
    }else if(count3 == 2){
        $('.slide-container').css("transform", "translate(-200vw)");
    }else if(count3 == 3){
        count3 = 2;
        console.log(count3)
    }

});

$('#before').on('click', ()=>{
    count3 -= 1;
    if(count3 == 1){
        $('.slide-container').css("transform", "translate(-100vw)");
    } else if(count3 == 0){
        $('.slide-container').css("transform", "translate(0vw)")
    } else if(count3 < 0){
        count3 = 0;
        console.log(count3)
    }
});

// div 박스안에 스크롤 높이 찾기
// 스크롤양 + 100 == div의 실제높이 alert창을 띄우자.
$('.lorem').on('scroll', function(){
    let 스크롤양 = document.querySelector('.lorem').scrollTop;
    let 스크롤높이 = document.querySelector('.lorem').scrollHeight;

    console.log(스크롤양,스크롤높이);

    if((스크롤양 + 100) == (스크롤높이)){
        alert("스크롤을 다 내렸습니다.");
        document.querySelector('.lorem').scrollTo(0,0);
    }
});

// 스크롤바를 조작하여 폰트사이즈가 커지는 애니메이션
window.addEventListener('scroll', ()=>{

    console.log(scrollY);

    if(scrollY >= 100){
        $('.navbar-brand').css("font-size", "20px")
        .css("color", "red");
    } else if(scrollY <= 100){
        $('.navbar-brand').css("font-size", "30px")
        .css("color", "black");
    }
});


// 모든 브라우저는 이벤트 버블링이 일어남 (이벤트가 상위 html로 퍼지는 현상)
// 따라서 아래와같이 이벤트형식을 주고도 다른 영역을 클릭했을때 이벤트버블링에 의해 아래 이벤트가 적용됨.
// 유용한 이벤트 함수(콜백함수) 명령어

/*
    e.target; // 유저가 실제로 누른거(어디 영역을 눌럿는지)
    e.currentTarget; // 이벤트리스너 달린 곳 보통 this문임.
    e.preventDefault(); // 이벤트 기본동작을 막아줌. submit이나 전송객체에서 동작을 막아준다. 클릭안해준 형식과같음.
    e.stopPropagation(); // 내 상위요소로 이벤트를 막아줌.
*/

document.querySelector(".black-bg").addEventListener('click', (e)=>{
    let black_bg = document.querySelector(".black-bg");

    if(e.target === black_bg){
        black_bg.classList.remove('show-modal');
    }
    
    
});


// 스와이퍼 기능 구현하기

let start = 0;
let click = false;

// 첫번째 이미지 마우스를 눌럿을 때
$('.slide-box').eq(0).on('mousedown', function(e){

    start = e.clientX;
    click = true;
}); 

// 두번째 이미지 마우스를 눌럿을 때

$('.slide-box').eq(1).on('mousedown', function(e){

    start = e.clientX;
    console.log(start);
    click = true;

});

// 세번째 이미지 마우스를 눌럿을 때

$('.slide-box').eq(2).on('mousedown', (e)=>{

    start = e.clientX;
    console.log(start);
    click = true;

});



// 첫번째 이미지 마우스를 땟을 때
$('.slide-box').eq(0).on('mouseup', function(e){

    click = false;
    move = e.clientX - start;
    console.log(move);

    if(move < -250){
        $('.slide-container')
        .css('transition', 'all 0.5s')
        .css('transform', 'translateX(-100vw)');
    }else if(move > 100){

        $('.slide-container')
        .css('transition', 'none')
        .css('transform', 'translateX(0)');
    
    }else{
        $('.slide-container')
        .css('transition', 'all 0.5s')
        .css('transform', 'translateX(0)')
    }

    // 0.5초후에 슬라이드컨테이너 애니메이션이 종료되는 로직
    setTimeout(()=>{
        $('.slide-container')
        .css('transition', 'none');
    }, 500)

}); 

// 두번째 이미지 마우스를 땟을 때

$('.slide-box').eq(1).on('mouseup', (e)=>{

    click = false;
    move = e.clientX - start;
    console.log(move);

    if(move > 150){
        $('.slide-container')
        .css('transition', 'all 0.5s')
        .css('transform', 'translateX(0vw)');
    }else if(move < -200){
        $('.slide-container')
        .css('transition', 'all 0.5s')
        .css('transform', 'translateX(-200vw)');
    }

    setTimeout(()=>{
        $('.slide-container')
        .css('transition', 'none');
    }, 500)


});

// 세번째 이미지를 땟을 때

$('.slide-box').eq(2).on('mouseup', (e)=>{

    click = false;
    move = e.clientX - start;
    console.log(move);

    if(move > 150){
        $('.slide-container')
        .css('transition', 'all 0.5s')
        .css('transform', 'translateX(-100vw)')
    }else if(move < -250){
        $('.slide-container')
        .css('transition', 'all 0.5s')
        .css('transform', 'trnaslateX(-200vw)')
    }

    setTimeout(()=>{

        $('.slide-container').css('transition', 'none');

    }, 500)

});


// 첫번째 마우스를 이동 햇을 때
$('.slide-box').eq(0).on('mousemove', function(e){
    
    if(click == true){
        $('.slide-container').css('transform', `translateX(${e.clientX - start}px)`)
    }

}); 


// 두번째 마우스를 이동 햇을 때
$('.slide-box').eq(1).on('mousemove', (e)=>{

    if(click == true){
        $('.slide-container').css('trasform', `translateX(${e.clientX - start}px)`)
    }

});
