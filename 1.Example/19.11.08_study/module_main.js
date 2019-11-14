var calc = {};
var calc2 = {};
calc.add = function(a,b)
{
    return a + b;
}

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d',calc.add(10,10));

//exports 방식
calc = require('./module_calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d',calc.add(20,20));
// 이 방식은 함수를 exports 객체에 할당하여 require()함수로 모듈을 불러와 calc 변수에 할당하는 방식.

//module.exports 방식
calc2 = require('./module_calc2');
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d',calc2.add(10,10));
// 이 방식은 다른 모듈에서 선언한 객체에 함수를 추가하고 해당 객체를 module.exports에 객체를 할당하고 require()함수로 모듈을 불러와 calc2 변수에 할당하는 방식.

