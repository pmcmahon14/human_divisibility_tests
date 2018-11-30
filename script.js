

$(document).ready(function() {
    $('#number').click(testNumber);
    //pickNumber();
    $('#number').keypress(enterKey);
});

var num = null;
var tester2 = 0;
var tester3 = 0;
var tester5 = 0;
var tester7 = 0;
var tester11 = 0;
var tester13 = 0;
var tester17 = 0;
var tester19 = 0;
var tester23 = 0;
var tester29 = 0;
var tester31 = 0;
var tester37 = 0;
var tester41 = 0;
var tester43 = 0;
var tester47 = 0;
var tester51 = 0;
var tester53 = 0;
var tester59 = 0;
var tester61 = 0;
var tester67 = 0;
var tester71 = 0;
var tester73 = 0;
var tester79 = 0;
var tester83 = 0;
var tester89 = 0;
var tester97 = 0;
var factorArray = [];

function clearForm() {
    $('#guess').val('');
    console.log('clearform');
    //document.getElementById('guess').innerHTML = "";
}

function enterKey(event) {
    if (event.which == 13) {
        testNumber();
    }
}

function testNumber () {
    num = document.getElementById('number').value;
    console.log(num);
    //console.log(num % 1 === 0);
    if (num < 2 || (num % 1 !== 0)) {
        document.getElementById('errorMessage').innerHTML = ('Please input integer of 2 or greater.');
    } else {
        factor2();
    }
}
//29484
function factor2() {
    if (num % 2 === 0) {
        for (two = 0; num % 2 === 0; two++) {
            tester2++;
            console.log(num + ' is divisible by 2 ' + tester2 + ' times.');
            num = num / 2;
            console.log(num);
        } two = ('2^' + two);
        document.getElementById('answer2').innerHTML = two;
        factor3();
    } else {
        factor3();
    }
}

function factor3() {
    if (num % 3 === 0) {
        for (three = 0; num % 3 === 0; three++) {
            tester3++;
            console.log(num + ' is divisible by 3 ' + tester3 + ' times.');
            num = num / 3;
            console.log(num);
        } three = ('3^' + three);
        document.getElementById('answer3').innerHTML = three;
        factor5();
    } else {
        factor5();
    }
}

function factor5() {
    if (num % 5 === 0) {
        for (five = 0; num % 5 === 0; five++) {
            tester5++;
            console.log(num + ' is divisible by 5 ' + tester5 + ' times.');
            num = num / 5;
            console.log(num);
        } five = ('5^' + five);
        document.getElementById('answer5').innerHTML = five;
        factor7();
    } else {
        factor7();
    }
}

function factor7 () {
    if (num % 7 === 0) {
        for (seven = 0; num % 7 === 0; seven++) {
            tester7++;
            console.log(num + ' is divisible by 7 ' + tester7 + ' times.');
            num = num / 7;
            console.log(num);
        } seven = ('7^' + seven);
        document.getElementById('answer7').innerHTML = seven;
        factor11();
    } else {
        factor11();
    }
}

function factor11 () {
    if (num % 11 === 0) {
        for (eleven = 0; num % 11 === 0; eleven++) {
            tester11++;
            console.log(num + ' is divisible by 11 ' + tester11 + ' times.');
            num = num / 11;
            console.log(num);
        } eleven = ('11^' + eleven);
        document.getElementById('answer11').innerHTML = eleven;
        factor13();
    } else {
        factor13();
    }
}

function factor13 () {
    if (num % 13 === 0) {
        for (thirteen = 0; num % 13 === 0; thirteen++) {
            tester13++;
            console.log(num + ' is divisible by 13 ' + tester13 + ' times.');
            num = num / 13;
            console.log(num);
        } thirteen = ('13^' + thirteen);
        document.getElementById('answer13').innerHTML = thirteen;
        factor17();
    } else {
        factor17();
    }
}

function factor17 () {
    if (num % 17 === 0) {
        for (seventeen = 0; num % 17 === 0; seventeen++) {
            tester17++;
            console.log(num + ' is divisible by 17 ' + tester17 + ' times.');
            num = num / 17;
            console.log(num);
        } //factor6();
    } else {
        //factor6();
    }
}
