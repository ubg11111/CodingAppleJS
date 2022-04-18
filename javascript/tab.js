/*
    버튼 0 누르면
    -모든 버튼에 붙은 orange 클래스명 제거
    -버튼 0에 orange 클래스명 추가
    -모든 div에 붙은 show 클래스명 제거
    -div0 show 클래스명 추가
*/

// jquery의 경우 .클래스를 가져오는 경우 모든 클래스를 가져오는데.
// index의 원하는 자리를 가져와야하는 경우 eq() 메서드를 통해서 가져오면 된다.


// for(let i=0; i<3; i++){
//     $('.tab-button').eq(i).on('click', ()=>{
//         tabOpen(i);
//     })
// }


$('.list').click( (e)=>{

    tabOpen(parseInt(e.target.dataset.id));
    console.log(parseInt(e.target.dataset.id));
});



function tabOpen(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

// 상품의 가격을 추가하는 탭

// array 배열형태의 car1
// 출력방법 : 변수[index] 변수안에 해당하는 인덱스를 숫자로 넣어주면된다.
// 장점은 정렬 및 자르기 및 넣기 등등이 가능하다. 순서가 0부터 ~ 까지 순서대로 출력되기에
let car = ['소나타',50000,'white'];

console.log(car.slice(1,3));

// object방식의 car2 
// key,value 형태로 저장된다.
// 출력방법 : 변수.키 
// 많은 데이터량의 이름을 부여할때 용이하게 사용한다 재사용의 장점이 확실함.
let car2 = {name:"아반떼", price:[50000,3000,4000]}

let title = document.querySelector('.car-title');
let price = document.querySelector('.car-price');

title.innerHTML = car2.name;

price.innerHTML = car2.price[0];


// 상품선택의 제품을 클릭했을 때 사이즈 셀렉트가 나오게끔 구현

    document.querySelectorAll('.form-select')[0].addEventListener('input', function(e){
        // let value = document.querySelectorAll('.form-select')[0].value;
        
        // 현재 메서드안에서 선언된 this는 해당 객체의 메서드를 가리킨다.
        // let value = this.value;

        let pants = [28, 30, 32, 34];
        let shirts = [90, 95, 100, 105];

        // e(이벤트함수) currentTarget은 현재 이벤트리스너가 달린요소
        let value = e.currentTarget.value;

        if(value == '셔츠'){
            
            document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
            $('.form-select').eq(1).html('');

            for(let i=0; i<pants.length; i++){

                $('.form-select').eq(1).append(`<option>${shirts[i]}</option>`)

            }

        }else if(value == '모자'){
            document.querySelectorAll('.form-select')[1].classList.add('form-hide');
        }else if(value == '바지'){
            $('.form-select').eq(1).removeClass('form-hide');
            $('.form-select').eq(1).html('');
            
            // '' or "" 는 엔터형식으로 연결해서 작성이 불가능하기에 ``(백틱) 형식으로 작성하는것이 옳다.
            // 셀렉트 추가하기

            // 배열에만 붙일 수 있는 반복문 forEach() 메서드
            pants.forEach((item) => { // 화살표함수의 사용주의는 this문을 사용하게되면 지역변수가아닌 전역변수를 참고하게된다.
               
                // 콜백함수(e)는 pants 반복문의 변수값을 말한다 
                // e를 출력하는경우 pants안에 있는 배열의값을 또는 변수값을 모두 출력할 수 있다.
                $('.form-select').eq(1).append(`<option>${item}</option>`);
            });
        }
    });
    
    // Object 자료 갯수만큼 반복문으로 출력해보기
    let obj = {name : "you", age : 30};

    for(let key in obj){

        console.log(obj[key]);

    }


// 자바스크립트로 html을 생성하는 방법

    // createElement('p') 라는 메서드를 통해서 html태그요소인 p태그를 생성
    //let a = document.createElement('p');
    // p값에 문자열을 삽입하고
    //a.innerHTML = "안녕";
    // 빈박스(div)에 선택자id를 DOM객체를 사용해서 연결하고 appendChild(자식요소를 하위태그에 추가)하는 메서드를 사용하여 a매개변수를 넣는다.
    //document.querySelector("#test").appendChild(a);

// 자바스크립트로 html 생성법 2번째
    // let tmp = '<p>안녕</p>';
    //  document.querySelector('#test').insertAdjacentHTML('beforeend', tmp);
    //  제이쿼리 문법은 아래와 같다.
    // $('#test').append(tmp);

       
    