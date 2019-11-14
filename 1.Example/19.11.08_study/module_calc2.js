var calc = {};

calc.add = function(a,b)
{
    console.log('여긴 module_calc2.js파일');
    return a + b;
};

module.exports = calc;
/* 먼저 객체를 선언하고 해당 객체안에 add속성을 함수로 추가한다.
그 다음 moudle.exports에 calc 객체를 할당한다. 그리고 메인 모듈에서 이 파일을 모듈로 불러오기 위해 require()함수를 호출한다.
이렇게 되면 메인 모듈의 cacl2변수에 module_calc2.js모듈의 calc객체가 할당된다.*/