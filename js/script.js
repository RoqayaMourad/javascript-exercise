//exercise1
var ex1inp = document.getElementById("ex1input");

function exercise1() {
    var label1 = '<label> Output :  ' + ex1inp.value + '</label>'
    document.getElementById("output").innerHTML = label1;
}

//exercise2
var ex2inp = document.getElementById("ex2input")

function exercise2() {
    if (ex2inp.value % 3 == 0 && ex2inp.value % 4 == 0) {
        var label2 = '<label> Output : Yes </label>'
        document.getElementById("output2").innerHTML = label2;
    } else {
        var label2 = '<label> Output : No </label>'
        document.getElementById("output2").innerHTML = label2;
    }
}


//exercise3
var ex3inp1 = document.getElementById("ex3input1");
var ex3inp2 = document.getElementById("ex3input2");

function exercise3() {
    if (Number(ex3inp1.value) > Number(ex3inp2.value)) {
        var label3 = '<label> The Max Number : ' + ex3inp1.value + '</label>'
        document.getElementById("output3").innerHTML = label3;
    } else {
        var label3 = '<label> The Max Number : ' + ex3inp2.value + '</label>'
        document.getElementById("output3").innerHTML = label3;
    }
}


//exercise4
var ex4inp = document.getElementById("ex4input")

function exercise4() {
    if (ex4inp.value > 0) {
        var label4 = '<label> This number is Positive </label>'
        document.getElementById("output4").innerHTML = label4;
    } else if (ex4inp.value == 0) {
        var label4 = '<label> This number is neither positive or negative </label>'
        document.getElementById("output4").innerHTML = label4;
    } else {
        var label4 = '<label> This number is Negative </label>'
        document.getElementById("output4").innerHTML = label4;
    }
}

//exercise5 
var ex5inp1 = document.getElementById("ex5input1")
var ex5inp2 = document.getElementById("ex5input2")
var ex5inp3 = document.getElementById("ex5input3")

function exercise5() {
    // compare as numbers, not as text
    var num1 = Number(ex5inp1.value);
    var num2 = Number(ex5inp2.value);
    var num3 = Number(ex5inp3.value);

    if (num1 >= num2 && num1 >= num3) {
        var label5 = '<label> The Max Number is : ' + num1 + ' </label>'
        document.getElementById("output51").innerHTML = label5;
    } else if (num2 >= num1 && num2 >= num3) {
        var label5 = '<label> The Max Number is : ' + num2 + ' </label>'
        document.getElementById("output51").innerHTML = label5;
    } else {
        var label5 = '<label> The Max Number is : ' + num3 + ' </label>'
        document.getElementById("output51").innerHTML = label5;
    }
    if (num1 <= num2 && num1 <= num3) {
        var label5 = '<label> The Min Number is : ' + num1 + ' </label>'
        document.getElementById("output52").innerHTML = label5;
    } else if (num2 <= num1 && num2 <= num3) {
        var label5 = '<label> The Min Number is : ' + num2 + ' </label>'
        document.getElementById("output52").innerHTML = label5;
    } else {
        var label5 = '<label> The Min Number is : ' + num3 + ' </label>'
        document.getElementById("output52").innerHTML = label5;
    }


}


//exercise6 
var ex6inp = document.getElementById("ex6input")

function exercise6() {
    if (ex6inp.value % 2 == 0) {
        var label6 = '<label> This number is even </label>'
        document.getElementById("output6").innerHTML = label6;
    } else {
        var label6 = '<label> This number is odd </label>'
        document.getElementById("output6").innerHTML = label6;
    }
}


//exercise7
var ex7inp = document.getElementById("ex7input")

function exercise7() {
    var char7 = ex7inp.value.toLowerCase();
    if (char7 == "a" || char7 == "e" || char7 == "o" || char7 == "i" || char7 == "u") {
        var label7 = '<label> This char is vowel </label>'
        document.getElementById("output7").innerHTML = label7;
    } else {
        var label7 = '<label> This char is consonant </label>'
        document.getElementById("output7").innerHTML = label7;
    }
}

//exercise8
var ex8inp = document.getElementById("ex8input");
var numbers = [];

function exercise8() {
    // start again on every run
    numbers = [];
    document.getElementById("output8").innerHTML = "";
    for (let i = 1; i <= ex8inp.value; i++) {
        var label8 = '<label class="p-2">' + i + '</label>';
        numbers.push(label8)
        document.getElementById("output8").innerHTML = numbers;
    }
}


//exercise9
var ex9inp = document.getElementById("ex9input")
var results = [];

function exercise9() {
    // start again on every run
    results = [];
    for (let i = 0; i <= 12; i++) {
        var label9 = '<label class="p-3">' + i * ex9inp.value + '</label>';
        results.push(label9)
        document.getElementById("output9").innerHTML = results;
    }
}


//exercise10
var ex10inp = document.getElementById("ex10input")
var evens = [];

function exercise10() {
    // start again on every run
    evens = [];
    document.getElementById("output10").innerHTML = "";
    for (let i = 1; i <= ex10inp.value; i++) {
        if (i % 2 == 0) {
            var label10 = '<label class="p-3">' + i + '</label>';
            evens.push(label10)
            document.getElementById("output10").innerHTML = evens;
        }
    }
}


//exercise11
var ex11inp1 = document.getElementById("ex11input1")
var ex11inp2 = document.getElementById("ex11input2")

function exercise11() {
    var label11 = '<label>' + 'The base is : ' + ex11inp1.value + '</br>  The exponent is : ' + ex11inp2.value + '</br> the result is : ' + Math.pow(ex11inp1.value, ex11inp2.value) + ' </label>'
    document.getElementById("output11").innerHTML = label11;
}


//exercise12
var arr = [2, 4, 6, 1, 5, 7, 8, 9, 12, 4];
var sum = 0;

function exercise12() {
    // start again on every run
    sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i], 10)
    }
    var average = sum / arr.length;
    var label120 = '<label class="p-1"> The numbers are </br>' + arr + '</label>';
    document.getElementById("output120").innerHTML = label120;
    var label12 = '<label class="p-1"> The sum of all numbers is ' + sum + ' </br></br> The average is  ' + average + '</label>';
    document.getElementById("output12").innerHTML = label12;
}


//exercise13
// i will use the same array i used in the previous exercise
function exercise13() {
    // reverse a copy, so the first array stays as it is
    var r_arr = arr.slice().reverse();
    var label13 = '<label class="p-1">the array : ' + arr + '</br></br> The reversed array : ' + r_arr + '</label>'
    document.getElementById("output13").innerHTML = label13;
}

//exercise14
var ex14inp = document.getElementById("ex14input")

function exercise14(ex14inp) {
    var label14 = '<label class="p-1"> Output : ' + ex14inp.value + '</label>'
    document.getElementById("output14").innerHTML = label14
}


//exercise15
var ex15inp1 = document.getElementById("ex15input1")
var ex15inp2 = document.getElementById("ex15input2")
var ex15inp3 = document.getElementById("ex15input3")

function exercise15(ex15inp1, ex15inp2, ex15inp3) {
    var sum = parseInt(ex15inp1.value) + parseInt(ex15inp2.value) + parseInt(ex15inp3.value);
    var ave = sum / 3;
    var label15 = '<label class="p-1">The numbers are :' + ex15inp1.value + ' , ' + ex15inp2.value + ' , ' + ex15inp3.value + '</br>The sum is : ' + sum + '<br> The average is :  ' + ave + '</label>'
    document.getElementById("output15").innerHTML = label15
}

//exercise16
var ex16inp = document.getElementById("ex16input")

function exercise16(ex16inp) {
    var number16 = Number(ex16inp.value);
    // 1 and smaller numbers are not prime, 2 is prime
    var isPrime = Number.isInteger(number16) && number16 > 1;
    for (i = 2; i < number16; i++) {
        if (number16 % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        var label16 = '<label class="p-1"> This number is prime</label>'
        document.getElementById("output16").innerHTML = label16;
    } else {
        var label16 = '<label class="p-1"> This number is not prime</label>'
        document.getElementById("output16").innerHTML = label16;
    }
    return isPrime;
}

//exercise17
var arr17 = [1, 2, 3, 4]

function exercise17() {
    var sum = 0;
    for (i = 0; i < arr17.length; i++) {
        sum += arr17[i];
    }

    var label17 = '<label class="p-1"> The array : ' + arr17 + '</br></br> The sum of its values is : ' + sum + '</label>'
    document.getElementById("output17").innerHTML = label17;

}

//exercise18
var ex18inp = document.getElementById("ex18input")

function exercise18() {
    var char18 = ex18inp.value.toLowerCase();
    if (char18 == "a" || char18 == "e" || char18 == "o" || char18 == "i" || char18 == "u") {
        var label18 = '<label class="p-1">The letter : ' + ex18inp.value + ' is a vowel</label>'
        document.getElementById("output18").innerHTML = label18;
    } else {
        var label18 = '<label class="p-1">The letter : ' + ex18inp.value + ' is a consonant</label>'
        document.getElementById("output18").innerHTML = label18;
    }
}


//exercise19
var ex19inp = document.getElementById("ex19input")


function exercise19(ex19inp) {
    // use the text the user typed
    var word19 = ex19inp.value;
    var count = 0
    for (let i = 0; i < word19.length; i++) {
        var char19 = word19[i].toLowerCase();
        if (char19 == "a" || char19 == "e" || char19 == "i" || char19 == "o" || char19 == "u") {
            count++;
        }
    }
    document.getElementById("output19").innerHTML = '<label class="p-1"></label>';
    // added as text so typed characters are shown as they are
    document.querySelector("#output19 label").innerText = 'the word is : ' + word19 + '\n Number of vowels is : ' + count;
}


//exercise20
var ex20inp = document.getElementById("ex20input")

function exercise20() {
    // use the text the user typed
    var word20 = ex20inp.value;
    var count = 0;
    var str2 = ""
    for (let i = 0; i < word20.length; i++) {
        var char20 = word20[i].toLowerCase();
        if (char20 == "a" || char20 == "e" || char20 == "i" || char20 == "o" || char20 == "u") {
            count++;
        } else {
            str2 += word20[i]
        }
    }
    document.getElementById("output20").innerHTML = '<label class="p-1"></label>';
    // added as text so typed characters are shown as they are
    document.querySelector("#output20 label").innerText = 'The word without vowels is :' + str2;
}