
// return 오른쪽에 있는 데이터를 반환하는 형식
// return 오른쪽에는 어떠한 값도 넣을 수 있다.
// function 함수(){
//     return 333;
// }

// let 변수 = 함수(); // 함수를 사용하는경우 123의 값을 반환

// console.log(변수);


// function vat(a){
//    return a * 0.1; // a(parameter 매개변수)라는 값에 어규먼트값을 넣게되면 
//                     //아래 함수 실행문이 적용 된다.
// };

// let 부가계산기 = vat(30000); // 30000은 전달인자(argument 전달인자)


// console.log(부가계산기);


// 소수점 반올림하는 toFixed(); 
// 단점은 문자로 변환이 되버림.
// console.log(vat(55555))


// function vat(a){
//     let num = (a * 1.1).toFixed(3);
//     // toFixed를 사용하는경우 문자열을 숫자로 형변환 해주는것이 좋다.(버그방지)
//     return parseFloat(num);
// }


// 오늘의 숙제

function 함수(a , b){
    return (a * 60 + b) * 1000;
}

function 함수2(a,b){
    return ((a * 15) + (b * 10)) * 1000;
}

console.log(함수(1,30))
console.log(함수2(2,10))
