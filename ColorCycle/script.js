let div = document.querySelector(".box");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let start = document.querySelector(".submit");

let r = parseInt(a.value);
let g = parseInt(b.value);
let bl = parseInt(c.value);

start.addEventListener("click", setColor);
// start.addEventListener("click", )
function setColor() {
	div.style.backgroundColor =
		"rgb(" + a.value + ", " + b.value + ", " + c.value + ")";
	// console.log(a.value, b.value, c.value);
}

let timer = setInterval(cond, 1000);
let k = 15;
function cond() {
	let r = parseInt(a.value);
	let g = parseInt(b.value);
	let bl = parseInt(c.value);
	if (parseInt(a.value) == 255) {
		a.value = 0;
	} else {
		parseInt(a.value + 15);
		console.log((a.value = r + 5));
	}
	if (parseInt(b.value) == 255) {
		b.value = 0;
	} else {
		parseInt(b.value + 5);
		console.log((b.value = g + 15));
	}
	if (parseInt(c.value) == 255) {
		c.value = 0;
	} else {
		parseInt(c.value + k);
		console.log((c.value = bl + 5));
	}
	setColor(a.value, b.value, c.value);
}
