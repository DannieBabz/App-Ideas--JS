let div = document.querySelector(".box");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let start = document.querySelector(".submit");
let stop = document.querySelector(".stop");

start.addEventListener("click", setColor);
function setColor() {
	div.style.backgroundColor =
		"rgb(" + a.value + ", " + b.value + ", " + c.value + ")";
}
let timer = setInterval(cond, 250);

function cond() {
	let r = parseInt(a.value);
	let g = parseInt(b.value);
	let bl = parseInt(c.value);
	if (parseInt(a.value) >= 255) {
		a.value = 0;
	} else {
		parseInt((a.value = r + 5));
	}
	if (parseInt(b.value) >= 255) {
		b.value = 0;
	} else {
		parseInt((b.value = g + 7));
	}
	if (parseInt(c.value) >= 255) {
		c.value = 0;
	} else {
		parseInt((c.value = bl + 10));
	}
	setColor(a.value, b.value, c.value);
}
