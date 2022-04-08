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


