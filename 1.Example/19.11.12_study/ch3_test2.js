var test = [{name:'박세훈', age:29},ch1 = '박초이', n1 = 1, testFunction = function(a,b){return a + b }]; // 배열에 객체랑 문자열이랑 상수랑 함수가 다들어가네?

//var ch1 = '박초이';
//test.push(ch1);


console.log('몇개니?? %d',test.length);
console.log('뭐가 나올까?');
console.dir(test); // dir로 출력할때 객체랑 문자열 상수는 다나오는데 함수는 함수의 이름이나 함수라는 것 조차도 안나온다..
console.log('타입이 뭐니?', typeof test); // 넌 왜 객체냐.. 난 분명 배열로 선언했는데?
console.log('배열 안에 함수가 호출 되나??  %d',test[3](10,10)); 

// 콜백함수 이해
console.log('--------------------------------------------------------');
// 함수 안에서 값을 반환할 때 새로운 함수를 만들어 반환하는 방법.
function add(a,b,callback){
    var res = a + b;
    callback(res);
    //return res; 이 주석을 지우면 add함수의 타입은 undefined이고 주석을 넣고 실행 했을 때는 number다.. 
}
console.log(typeof (add(10,10,function(res){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기에 전달된 10,10의 결과 : %d',res);
})))
/* 책에는 add함수안에서 더 이상 값을 반환하지 않도록 return 키워드를 사용하는 부분을 삭제한다고 써있는데 그렇게 되면 add함수는 콜백함수가 끝나고 나서 add함수가 끝나는 것인가??
return 키워드를 삭제하고 대신 더하기 연산을 한 결과값을 res에 할당하고 callback함수의 파라미터로 전달한다. callback함수는 20번과 21번 라인사이에 미리 변수에 var cb = function(res){...}
이렇게 할당해 두었다가 add함수를 호출할 때 파라미터로 add(10,10,cb)이런식으로 전달할 수도 있지만, add함수를 호출할 때 익명 함수로 만들어서 파라미터로 바로 전달할 수도 있다.*/