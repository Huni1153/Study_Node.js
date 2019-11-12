var test = [{name:'박세훈', age:29},ch1 = '박초이', n1 = 1, add = function(a,b){return a + b }]; // 배열에 객체랑 문자열이랑 상수랑 함수가 다들어가네?

//var ch1 = '박초이';
//test.push(ch1);


console.log('몇개니?? %d',test.length);
console.log('뭐가 나올까?');
console.dir(test); // dir로 출력할때 객체랑 문자열 상수는 다나오는데 함수는 함수의 이름이나 함수라는 것 조차도 안나온다..
console.log('타입이 뭐니?', typeof(test)); // 넌 왜 객체냐.. 난 분명 배열로 선언했는데?
console.log('배열 안에 함수가 호출 되나??  %d',test[3](10,10)); 


function test2(a,b,cb){
    var res = a + b;
    console.log('여기 언제오니?');
    cb(res);
}
test2(10,10,function(res){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기에 전달된 10,10의 결과 : %d',res);
})