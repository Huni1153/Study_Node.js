console.log(typeof undefVar);
console.dir(typeof(undefined));
console.log((typeof undefVar) == "undefined");
console.log(typeof undefVar == 'undefined');
console.log(typeof undefVar == typeof undefined);
console.log('-------------------------------------');

console.log( 185.3 == '185.3' ); // 자동형변환이 일어나기 때문에 결과 값은 true로 나온다.
console.log( 185.3 === '185.3' ); // 형변환을 떠나서 데이터 비교 같다..
https://programmers.co.kr/learn/questions/25

console.log(Object.name);
console.log(Object.length);
console.log(Object.prototype);
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
var a = [];

a[4] = 1;

console.log( a);