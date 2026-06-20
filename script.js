function checkNumber() {

    let number = document.getElementById("num").value;

    if (number % 2 == 0) {
        document.getElementById("result").innerHTML =
            "The number is Even";
    }
    else {
        document.getElementById("result").innerHTML =
            "The number is Odd";
    }

}