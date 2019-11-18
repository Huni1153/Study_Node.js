function Person(name,age){
    this.name = name;
    this.age = age;
    this.run = function(speed){
        console.log(speed + 'km 속도로 뛰어갑니다.');
    }
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다.');
}
/*Person.run = function(speed){ // 아마 이건 프로토타입에 run이라는 속성이 없었기 때문에 4번라인을 추가하기 전에는 Person.run 은 함수가 아니라는 에러 메시지를 출력한듯 하다.
    console.log(speed + 'km 속도로 뛰어갑니다.');
}*/  
var person01 = new Person('박세훈',29);
var person02 = new Person('박초이',25);

//console.log(person01.prototype.walk(10));

console.log('청코너 ' + person01.name + '[나이 : ' + person01.age + ']');
person01.walk(10);
console.log('청코너 ' + person02.name + '[나이 : ' + person02.age + ']');
person02.walk(9);

console.log('아!! 청코너의 ' + person01.name + '선수 뛰기 시작합니다!!!');
person01.run(15);
console.log('아 홍코너의 ' + person02.name + '선수도 따라서 뛰기 시작합니다!!');
person02.run(14);

person01.walk = function(speed){
    console.log('으아니!! 갑자기 !! ' + person01.name + '선수가 ' + speed + 'km 속도로 날아가고 있습니다!!');
} // 오버로딩이 되는구나!? person01.walk를 함수를 재정의해서 사용하니까 오버로딩이 됬다...
person01.walk(50);

person01.walk = function(minus,cost){
    console.log(person01.name + ' 선수 5' + minus + '하셨기 때문에 ' + cost +'점 감점됩니다..');
} // 자바 처럼 오버로딩이 되는구나?
person01.walk('반칙',-10);

console.dir(person01); // 애는 객체의 속성이 전부다 
console.dir(Person);