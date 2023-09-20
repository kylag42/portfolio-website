let i = 0;
let j = 0
let txt = 'KYLA GRAY'; /* The text */
let txt2 = 'COMPUTER SCIENCE STUDENT';
let speed = 125; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("ky").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (j < txt2.length) {
        document.getElementById("homescreentext").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
    }
}