document.getElementById("abt-btn").addEventListener("click", myFunction);
document.getElementById("media-btn").addEventListener("click", myFunctionTwo);
document.getElementById("archive-btn").addEventListener("click", myFunctionThree);

function myFunction() {
    var x = document.getElementsByClassName("abt-area");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}

function myFunctionTwo() {
    var x = document.getElementsByClassName("media-area");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}

function myFunctionThree() {
    var x = document.getElementsByClassName("archive-area");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}