
let bg = document.getElementById("bg"); 
let text = document.getElementById("bg-text"); 


window.onload = async () => {
    for (let i = 1; i <= 100; i++) {
        await new Promise(resolve => setTimeout(resolve, 30)); 
        bg.style.filter = `blur(${scale(i, 0, 100, 30, 0)}px)`;
        text.style.opacity = scale(i, 0, 100, 1, 0 )
        text.innerHTML = `${i}%`
    }
    text.style.display = "None";
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }