//problem #1

function sleep_in(weekday,vacation){
    return !weekday || vacation
}

//problem #2

function monkey_trouble(a_smile,b_smile) {
    if (a_smile == b_smile) {
        return true;
    } else {
        return false;
    }
}
//problem #3

function string_times(string,n){
    var outputString = "";
    for(var i = 0; i<n; i++){
        outputString += string
    }
    return outputString;
}


//problem #4

function front_times(string,n){
    var answer = "";
    var substring = string.substring (0,3);
    for(var i = 0; i<n; i++){
        answer += substring;
    }
    return answer;
}

//problem #5

function string_bits(string){
    var answer = "";

    for(var i = 0; i<string.length; i= i+2){
        var substring = string.substring(i,i+1);
        if(i%2==0){
            answer += substring;
        }
    }
    return answer;
}

//problem #6

function caughtSpeeding(speed,bday) {

    if(bday){
        speed = speed-5
    }
    var t = true;

    if (speed <= 60 ) {
        t =0;
    }
    else if (60 < speed && speed <= 80) {
        t= 1;
    }
    else if (speed >= 81) {
        t=2;
    }
    else {
        t=1;
    }
    return t;
}

//problem #7
function fizz_buzz(int) {
    mod = "";
    if (int % 3 == 0) {
        mod = "Fizz"
    }
    if (int % 5 == 0) {
        mod = "Buzz"
    }
    if (int % 5 == 0 && int % 3 == 0) {
        mod = "FizzBuzz"
    }
    if(int %5 != 0 && int %3 !=0) {
        mod = int + "!"
    }
    return mod;

}

//problem #8
function teaParty(tea, candy){
    var t= true

    if(tea<5 || candy <5){
        t= 0
    }
    else if(tea >= (candy*2) || candy>= (tea*2)){
        t=2
    }
    else if(tea >= 5 && candy >= 5) {
        t = 1
    }

    return t;
}

//problem #9
function blackjack(x,y){
    var blackjack = 0;
    if(x>0 && y>0) {
        if (x == 21 || y == 21) {
            blackjack = 21;
            return blackjack;
        }
        if (x > 21 && y > 21) {
            blackjack = 0;
            return blackjack;
        }
        if (x >= y) {
            if (x > 21) {
                blackjack = y;
            }else{
                blackjack = x;
            }
        }
        if (y >= x) {
            if (y > 21) {
                blackjack = x;
            } else {
                blackjack = y;
            }
        }
    }
    return blackjack;
}


//problem #10
function loneSum(x,y,z){
    var loneSum = 0;
    if(x!=y && y!=z){
        loneSum = x +y +z;

    }
    if(x!=z && y==z) {
        loneSum = x;

    }
    if(x==y && y==z){
        loneSum = 0;

    }
    if(x==z && y!=x){
        loneSum = y;
    }
    if(x==y && z!=x){
        loneSum = z;
    }
    return loneSum;
}


function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times("lilah", 5);
    document.getElementById("output").innerHTML += front_times("whale");
    document.getElementById("output").innerHTML += string_bits("hello", 3);
    document.getElementById("output").innerHTML += caughtSpeeding(60, true);
    document.getElementById("output").innerHTML += fizz_buzz(8);
    document.getElementById("output").innerHTML += teaParty(5, 7);
    document.getElementById("output").innerHTML += blackjack(6, 14);
    document.getElementById("output").innerHTML += loneSum(3, 2, 3);
}