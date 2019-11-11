/*var result = 0;

console.time('duration_sum');
for(var i = 1 ; i <= 100; i++)
{
    result += i;
}
console.timeEnd('duration_sum');
console.log('1부터 100까지 더한 결과물 : %d',result);

console.log( '현재 실행한 파일의 이름 : %s ' , __filename);
console.log( '현재 실행한 파일의 패스 : %s ' , __dirname);
*/
//var Person1 = {name:"박세훈",age:29,location:"서울"};
//var Person2 = {name:"박초이",age:25};
//Person1 = {name:"박초이",age:25};
//console.dir(Person1);
//console.dir(Person2);

console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

if(process.argv.length > 2)
{
    console.log('세 번째 파라미터의 값 : %s',process.argv[2]);
}
 process.argv.forEach(function(item, index){
    console.log(index + ' : ',item);
});
