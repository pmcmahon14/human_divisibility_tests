

$(document).ready(function() {
    $('#number').click(testNumber);
    //pickNumber();
    $('#number').keypress(enterKey);
});


function clearForm() {
    $('#number').val('');
    console.log('clearform');
    //document.getElementById('guess').innerHTML = "";
}

function enterKey(event) {
    if (event.which == 13) {
        testNumber();
    }
}

function testNumber () {
    true2 = true;
    true3 = true;
    true4 = true;
    num = document.getElementById('number').value;
    console.log(num);
    //console.log(num % 1 === 0);
    if (num < 2 || (num % 1 !== 0)) {
        document.getElementById('errorMessage').innerHTML = ('Please input integer of 2 or greater.');
    } else {
        divide2();
    }
}
//29484
function divide2() {

    if (num % 2 === 0) {
        document.getElementById('answer2').innerHTML = num + ' is divisible by two.';
        divide3();
    } else {
        document.getElementById('answer2').innerHTML = num + ' is not divisible by two.';
        true2 = false;
        divide3();
    }console.log(true2);
}



function divide3() {
    let three = (num.toString().length);
    let tester3 = 0;
    let num3 = num;
    console.log(three);
        for (three; three>0; three--) {
            console.log(num3);
            tester3 = tester3 + num3%10;
            console.log(tester3);
            num3 = Math.floor(num3/10);
            console.log(num);
            console.log(num3);
        }
        if (tester3%3 === 0) {
            document.getElementById('answer3').innerHTML = num + ' is divisible by three.';
            divide4();
            console.log(num);
        } else {
            document.getElementById('answer3').innerHTML = num + ' is not divisible by three.';
            true3 = false;
            divide4();
            console.log(num);
        }
    }

function divide4() {
    console.log(num);
    const num4 = num%1000;
    if (num4%4 === 0) {
        document.getElementById('answer4').innerHTML = num + ' is divisible by four.';
        divide5();
    } else {
        document.getElementById('answer4').innerHTML = num + ' is not divisible by four.';
        true4 = false;
        divide5();
    }
}

//divide number by 10, store % in var
//if  % equals 5 or 0, divisible by 5

function divide5() {
    console.log(num);
    const num5 = num/10;
    if (num5 === 0 || num5 === 5) {
        document.getElementById('answer5').innerHTML = num + ' is divisible by five.';
        divide6();
    } else {
        document.getElementById('answer5').innerHTML = num + ' is not divisible by five.';
        divide6();
    }
}

function divide6 () {
    console.log(true2);
    console.log(true3);
    if (true2 === true  && true3 === true) {
        document.getElementById('answer6').innerHTML = num + ' is divisible by six.';
        divide7();
    } else {
        document.getElementById('answer6').innerHTML = num + ' is not divisible by six.';
        divide7();
    }
}

//need divide7();
//take num, get %10 and mult that (%10*2), take num - (%10*2) = num, repeat

function divide7 () {
    let seven = (num.toString().length);
    let tester7 = 0;
    let num7 = num;
    console.log(seven);
    for (seven; seven>2; seven--) {
        console.log(num7);
        tester7 = (num7%10)*2;
        //console.log(tester7);
        num7 = Math.floor(num7/10);
        //console.log(num7);
        num7 = num7 - tester7;
        console.log(num);
        console.log(num7);
    }
    if (num7%7 === 0) {
        document.getElementById('answer7').innerHTML = num + ' is divisible by seven.';
        divide8();
        console.log(num);
    } else {
        document.getElementById('answer7').innerHTML = num + ' is not divisible by seven.';
        divide8();
        console.log(num);
    }
}

function divide8 () {
    console.log(num);
    const num8 = num%1000;
    if (num8%8 === 0) {
        document.getElementById('answer8').innerHTML = num + ' is divisible by eight.';
        divide9();
    } else {
        document.getElementById('answer8').innerHTML = num + ' is not divisible by eight.';
        divide9();
    }
}

function divide9 () {
    let nine = (num.toString().length);
    let tester9 = 0;
    let num9 = num;
    console.log(nine);
    for (nine; nine>0; nine--) {
        console.log(num9);
        tester9 = tester9 + num9%10;
        console.log(tester9);
        num9 = Math.floor(num9/10);
        console.log(num);
        console.log(num9);
    }
    if (tester9%9 === 0) {
        document.getElementById('answer9').innerHTML = num + ' is divisible by nine.';
        divide10();
        console.log(num);
    } else {
        document.getElementById('answer9').innerHTML = num + ' is not divisible by nine.';
        divide10();
        console.log(num);
    }
}

function divide10 () {
    if (num%10 === 0) {
        document.getElementById('answer10').innerHTML = num + ' is divisible by ten.';
        divide11();
    } else {
        document.getElementById('answer10').innerHTML = num + ' is not divisible by ten.';
        divide11();
    }
}

//set odd to odd array index values
//set even to even array index values
//set length
//divide number by 10 each increment and store based on index number
//odd - even = num11
//if num11%11 === 0 or 11, divisible by 11

function divide11() {
    let odd = 0;
    let even = 0;
    let eleven = (num.toString().length-1);
    let num11 = num;
    console.log(eleven);
    for (eleven; eleven>=0; eleven--) {
        console.log(num11);
        console.log(eleven);
        if (eleven % 2 === 0) {
            even = even + num11 % 10;
            console.log(even);
            num11 = Math.floor(num11/10);
        } else {
            odd = odd + num11 % 10;
            console.log(odd);
            num11 = Math.floor(num11/10);
        }
    }
         const diff = even - odd;
        console.log(diff);
        if (diff%11 === 0) {
            document.getElementById('answer11').innerHTML = num + ' is divisible by eleven.';
        } else {
            document.getElementById('answer11').innerHTML = num + ' is not divisible by eleven.';
        }divide12();
}

function divide12 () {
    console.log(true3);
    console.log(true4);
    if (true3 === true  && true4 === true) {
        document.getElementById('answer12').innerHTML = num + ' is divisible by twelve.';
        divide13();
    } else {
        document.getElementById('answer12').innerHTML = num + ' is not divisible by twelve.';
        divide13();
    }
}

function divide13 () {
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
