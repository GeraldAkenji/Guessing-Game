let attempts = 5;
let trials = 3;
let randNum = Math.floor(Math.random() * 100) + 1;

function onClick() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        alert("login Successful");
        window.location = "/game";
        return false;
    }
    else {
        trials--; //trails is decreasing after wrong attempt
        alert("You have " + trials + " trials!!!");
    }
    if (trials === 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submitBtn").disabled = true;

        return false;
    }
}
function Guess() {
    var bg = document.getElementById("bg");

    var num = document.getElementById("number").value;
    console.log(randNum);

    if (num === '') {
        alert("Please Enter a number");
    }
    else {



        if (num > randNum) {
            attempts--;
            alert(num + " is too high, please try again, " + attempts + " trials left");
            console.log(randNum);
        }
        else if (num < randNum) {
            attempts--;
            alert(num + " is too low, please try again, " + attempts + " trials left");

        }
        else {
            attempts--;
            alert("CORRECT, YOU WIN!!!!");
            bg.style.backgroundColor = 'green';
            Reset();
        }
        if (attempts === 0) {
            alert("Game Over, better luck next time. The number was " + randNum);
            bg.style.backgroundColor = 'red';
            document.getElementById("number").disabled = true;
            document.getElementById("submitBtn").disabled = true;
            return false;
        }
    }
}
function Reset() {
    var num = document.getElementById("number");
    attempts = 10
    num.value = '';

    randNum = Math.floor(Math.random() * 100) + 1

    document.getElementById("number").disabled = false;
    document.getElementById("submitBtn").disabled = false;
    bg.style.backgroundColor = 'white';
}