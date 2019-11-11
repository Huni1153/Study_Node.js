exports.add = function(a,b)
{
    console.log("여긴 module_calc.js파일");
    return a + b;
}
/* 따로 객체를 선언하지 않고 exports객체에 add속성을 추가한다.
그리고 메인 모듈에서 이 파일을 모듈로 불러오기 위해 require()함수를 호출한다.
이렇게 되면 메인 모듈의 calc변수에 더하기 함수가 할당된다. */
