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

function test2(a,b,cb){
    var res = a + b;
    console.log('여기 언제오니?');
    cb(res);
}
test2(10,10,function(res){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기에 전달된 10,10의 결과 : %d',res);
})

// 함수 안에서 값을 반환할 때 새로운 함수를 만들어 반환하는 방법.

function add(a,b,callback){
    var result = a + b;
    callback(result);

    var history = function(){
        return a + '+' + b + '=' + result;
    };
    /*console.log('너 타입이 뭐니',typeof(history)); 에러로 자꾸 history가 함수가 아니라고 해서 출력 해볼려고 했는데 결과적으로 여기까지 오지도 않고 오류가 났다.. 
    당연한게 43번라인에서 이미 함수가 아니기 때문에 오류가 났기 때문에 출력이 안됬다.*/
   return history;
}
var add_history = add(10,10,function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10,10)의 결과 : %d',result);
});

console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
/* 여기서 add_history is not a function오류가 나서 한참 해메다가 겨우 찾았는데... 이 예제에서 add함수의 형태가 (a,b,callback)이 처럼 되어있는데...
 1번 라인을 보면 객체에 속성으로 add함수를 추가하는게 보인다 이게 충돌이나서 디버깅해본 결과 add함수가 (a,b)의 형태로 되어있더라... 
 다른 예제 에서는 var변수를 같은 이름으로 여러번 써도 괜찮았는데 함수는 오류가 났다. 이유는 정확히 모르겠지만 앞으로 예제에서 사용하는 변수나 함수 객체명은 각각 다르게 사용하도록하자.... */

/* 실행 결과
파라미터로 전달된 콜백 함수 호출됨.
더하기 (10,10)의 결과 : 20
결과 값으로 받은 함수 실행 결과 : 10+10=20
*/
