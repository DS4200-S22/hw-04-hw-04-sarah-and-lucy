function circle1Clicked() {
    let counter = document.getElementById("counter");
    counter.innerHTML++;
}
function circle2MouseOver() {
    let circle2 = document.getElementById("circle2");
    if(circle2.style.stroke == "black") {
        circle2.style.stroke = "none";
    } else {
        circle2.style.stroke = "black";
    }
}

function circle3Clicked() {
    let circle3 = document.getElementById("circle3");
    if(circle3.style.opacity == "1") {
        circle3.style.opacity = "0";
    } else {
        circle3.style.opacity = "1";
    }
}
