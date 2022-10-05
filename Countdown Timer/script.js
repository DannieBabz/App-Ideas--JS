let btn = document.getElementById("btn");
let dateVal = document.getElementById("date");
let day = document.querySelector(".days");
let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");

//Onchange get the value of input
//Perform the operation to subtract todays date and the set date
//Input the individual values on each corresponding html elements

dateVal.addEventListener("change", setDate);
// 2022 - 10 - 07;

function setDate() {
	const dateValue = new Date(dateVal.value).getTime();
	let now = new Date().getTime();
	let distance = dateValue - now;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24)),
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

	day.innerHTML += days;
	hour.innerHTML += hours;
	minute.innerHTML += minutes;
	second.innerHTML += seconds;

	if (distance == 0) {
		day.innerHTML += 00;
		hour.innerHTML += 00;
		minute.innerHTML += 00;
		seconds.innerHTML += 00;
	}

	console.log(dateValue);
	console.log(now);
}
