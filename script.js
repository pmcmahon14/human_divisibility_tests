var num = 5475;
var tester2;
var tester3;

function split2(num) {
    if (num%2 === 0) {
        console.log(num + ' is divisible by 2.');
        tester2 = true;
    } else {
        console.log(num + ' is not divisible by 2.');
        tester2 = false;
    }
}
split2(num);


function split3(num) {
    var sum=0;
    var num1 = num;
    do{
        firstNum = Math.floor(num1/10);
        intermediary = firstNum*10;
        secondNum = num1 - intermediary;
        num1 = firstNum;
        sum+=secondNum;
    }
    while(firstNum > 0)
    if (sum%3 === 0) {
        console.log(num+ ' is divisible by 3.');
        tester3 = true;
    } else {
        console.log(num + ' is not divisible by 3.');
        tester3 = false;
    }
}
split3(num);

function split4(num) {
    var test_num=0;
    test_num = Math.floor(num/100);
    intermediary = test_num*100;
    secondNum = num - intermediary;
    if (secondNum%4 === 0){
        console.log(num + ' is divisible by 4.');
    } else {
        console.log(num + ' is not divisible by 4.');
    }
}split4(num);

function split5(num){
    var test_num=0;
    test_num=Math.floor(num/10);
    intermediary = test_num*10;
    secondNum = num - intermediary;
    if (secondNum ===5 || secondNum === 0) {
        console.log(num + ' is divisible by 5.');
    } else {
        console.log(num + ' is not divisible by 5.');
    }
}split5(num);


function split6(num) {
    if (tester2 === true && tester3 === true){
        console.log(num + ' is divisible by 6.');
    } else {
        console.log(num + ' is not divisible by 6.');
    }
}   split6(num);

function split8(num) {
    var test_num=0;
    test_num = Math.floor(num/1000);
    intermediary = test_num*1000;
    secondNum = num - intermediary;
    if (secondNum%8 === 0){
        console.log(num + ' is divisible by 8.');
    } else {
        console.log(num + ' is not divisible by 8.');
    }
}split8(num);

function split9(num) {
    var sum=0;
    var num1 = num;
    do{
        firstNum = Math.floor(num1/10);
        intermediary = firstNum*10;
        secondNum = num1 - intermediary;
        num1 = firstNum;
        sum+=secondNum;
    }
    while(firstNum > 0)
    if (sum%9 === 0) {
        console.log(num+ ' is divisible by 9.');
    } else {
        console.log(num + ' is not divisible by 9.');
    }
}
split9(num);

function split10(num) {
    var test_num = Math.floor(num/10);
    var intermediary = test_num*10;
    if (num - intermediary === 0){
        console.log(num + ' is divisible by 10.');
    } else {
        console.log(num + ' is not divisible by 10.');
    }
}split10(num);


















function split11(num) {
    var n = num.toString();
    for (var i = 0; i<string.length; i++) {
        if
            }
    if (num%11 === 0) {
        console.log(num + ' is divisible by 11.');
    } else {
        console.log(num + ' is not divisible by 11.');
    }
}split11(num);
