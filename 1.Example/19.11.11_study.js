var age = 29;
var name = '박세훈';

console.log('나이 : %d',age);
console.log('나이 : %s',age);
console.log('타입 확인 : ',typeof(age));
// 타입은 number인데 %s로 출력해도 출력이 되네? 자동 형변환인가.. 사용자가 직점 parsInt()하지 않아도 되는거임??

console.log('이름 : %s',name);
console.log('이름 : %d',name);
console.log('타입 확인 : ',typeof(name));
// 문자열을 %d로 출력했을 때는 NaN(숫자가 아님)이 출력된다.

var Person = {
    age : 29,
    name : '박세훈',
    mobile : '010-5516-1153'
};
var Person2 = {};
/*
Person['age'] = 29;
Person['name'] = '박세훈';
Person['mobile'] = '010-5516-1153';
*/
console.log('나이 : %d',Person['age']);
console.log('이름 : %s',Person.name);
console.log('전화 : %s',Person.mobile);
console.log('자바스크립트 객체 : %j',Person); // 이건 왜 %j가 출력이 되는거지??
console.dir(Person);

Person2.age = 25;
Person2.name = '박초이';
Person2.mobile = '010-7167-2261';

console.log('나이 : %d',Person2['age']);
console.log('이름 : %s',Person2.name);
console.log('전화 : %s',Person2.mobile);

// 굳이 힘들게 대괄호[]를 쓰지말고 .연산자로 쉽게 하자....


var test = {};
var testFnt = function(a,b)
{
    return a + b;
};

console.log('보낸 값은 숫자냐?',testFnt(1,2));
console.log('리턴 값의 타입',typeof(testFnt));
console.log('리턴 값의 타입',typeof(testFnt(1,2)));
// 함수를 호출하기전의 리턴 값의 타입과 호출하고 나서 리턴 갑의 타입이 다르네..?



// Person객체를 생성하고 Person 객체에 add함수를 속성으로 추가
var Person = {};

Person.age = 29;
Person.name = '박세훈';
Person.add = function(a,b)
{
    return a + b;
};

console.log('Person 객체의 함수 호출 : %d',Person.add(10,10));

// Person객체를 생성하고 oper변수에 add함수를 속성으로 추가한 후 oper변수를 Person객체에 추가
var Person2 = {};

Person2.age = 25;
Person2.name = '박초이';

var oper = function(a,b){
    return a + b;
};

Person2.add = oper;

console.log('Person2 객체의 함수 호출 : %d',Person2.add(10,10));

// Person객체를 만들면서 동시에 속성을 초기화
var Person3 = {
    age : 20,
    name : '소녀시대',
    add : function(a,b){
        return a +b ;
    }
};

console.log('Person3 객체의 함수 호출 : %d',Person3.add(10,10));


