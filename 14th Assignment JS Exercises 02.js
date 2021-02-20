// 01
function CardNum() {
    var num = document.getElementById('cardNum').value;
    var show = "";
    if (num.length  === 16) {
        var v = num.slice(12, 16);
        show = "****-****-****-" + v;
    } else {
        show = "Please Enter only 16 Numbers";
    }
    document.getElementById('cardShow').innerHTML = show;
}
// 02
function AmtNum() {
    var amt = document.getElementById('amtNum').value;
    var show = amt.match(/potato/g).length;    
    document.getElementById('amtShow').innerHTML = show;
}
// 03
function StrDouble() {
    var str = document.getElementById('strDouble').value;
    var show = "";
    for (let index = 0; index < str.length; index++) {
        show += str[index] + str[index]; 
    }
    document.getElementById('strdoubleShow').innerHTML = show;
}
// 04
function Salary() {
    var sal = document.getElementById('salary').value;
    var show = "";
    if (sal <= 10000 ) {
        show = "Basic Salary = " + sal + " : HRA = 20%, DA = 80%";
    } else if (sal >= 10001 && sal <= 20000) {
        show = "Basic Salary = " + sal + " : HRA = 25%, DA = 90%";
    } else if (sal > 20000) {
        show = "Basic Salary = " + sal + " : HRA = 30%, DA = 95%";
    }
    document.getElementById('salaryShow').innerHTML = show;
}
// 05
function Units() {
    var uni = document.getElementById('units').value;
    var show = 0;
    var show = "";
    if (uni > 0 && uni <=50 ) {
        show = "Your Units are " + uni + " and Your Bill will be " + ((uni * 0.50) + (uni * 0.2));
    } else if (uni >= 51 && uni <= 100) {
        show = "Your Units are " + uni + " and Your Bill will be " + ((uni * 0.75) + (uni * 0.2));
    } else if (uni >= 101 && uni <= 200) {
        show = "Your Units are " + uni + " and Your Bill will be " + ((uni * 1.20) + (uni * 0.2));
    } else if (uni >= 250) {
        show = "Your Units are " + uni + " and Your Bill will be " + ((uni * 1.50) + (uni * 0.2));
    }
    document.getElementById('unitsShow').innerHTML = show;
}
// 06
function Numbers() {
    var num = document.getElementById('numbers').value;
    var show = "";
    var output = "";
    var sum = 0;
    if (num >= 1 && num <= 1000) {
        for(let index = 1; index <= num; index++){
            if(index % 3 == 0 || index % 5 == 0){
                sum = sum + index;
                show = show + " { " + index + " } ";
            }
            output = "Total are from 1 to " + num + " and Multiples of 3 or 5 are " + show + " and The Total Sum of these numbers are " + sum;
        }
    } else {
        output = "Please Enter a number between 1 to 1000 only";
    }
    document.getElementById('numbersShow').innerHTML = output;
}
// 07
function Count() {
    var animal = document.getElementById('countAnimal').value;
    var number = document.getElementById('countNumber').value;
    var nul = document.getElementById('countNull').value;
    var AnimalShow = "";
    var NumberShow = "";
    var NullShow = "";

    var cowShow = animal.match(/cow/g).length;
    var dogShow = animal.match(/dog/g).length;
    var catShow = animal.match(/cat/g).length;
    AnimalShow = "Cows: { " + cowShow + " } Dogs: { " + dogShow + " } Cats: { " + catShow + " }";

    var zeroShow = number.match(/0/g).length;
    var oneShow = number.match(/1/g).length;
    var twoShow = number.match(/2/g).length;
    var threeShow = number.match(/3/g).length;
    var fourShow = number.match(/4/g).length;
    var fiveShow = number.match(/5/g).length;
    var sixShow = number.match(/6/g).length;
    var sevenShow = number.match(/7/g).length;
    var eightShow = number.match(/8/g).length;
    var nineShow = number.match(/9/g).length;
    NumberShow = "0: ( " + zeroShow + " ) 1: ( " + oneShow + " ) 2: ( " + twoShow + " ) 3: ( " + threeShow + " ) 4: ( " + fourShow + " ) 5: ( " + fiveShow + " ) 6: ( " + sixShow + " ) 7: ( " + sevenShow + " ) 8: ( " + eightShow + " ) 9: ( "+ nineShow + " )";
    
    var nulShow = nul.match(/null/g).length;
    var infinityShow = nul.match(/infinity/g).length;
    NullShow = "Null: { " + nulShow + " } Infinity: { " + infinityShow + " }";

    document.getElementById('countAnimalShow').innerHTML = AnimalShow;
    document.getElementById('countNumberShow').innerHTML = NumberShow;
    document.getElementById('countNullShow').innerHTML =  NullShow;
}
// 08
function Char() {
    var char = document.getElementById("countChar").value;
    var strg = document.getElementById("countString").value;
    var charShow = "";
    var strgShow = new RegExp(char, 'g');
    var chr = strg.match(strgShow).length;
    charShow = "Character " + char + " is " + chr;

    document.getElementById('countStringShow').innerHTML = charShow
}