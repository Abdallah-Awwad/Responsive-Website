// increasing Yearly Targets percentage numbers 
let dataWidth = document.querySelectorAll(".percentage > span");
dataWidth.forEach((span) => {
	span.style.width = span.dataset.width;
})

// increasing Ticket Statistics numbers 
let goals = document.querySelectorAll(".ticket-shapes .number");
function mainFunction (el) {
	let target = el.dataset.goal;
	let count = setInterval(() => {
		el.textContent++;
		if (el.textContent == target) {
			clearInterval(count);
		}
	}, 2000 / target);
}

let ticketsSection = document.querySelector(".ticket-shapes");
let started = false;
window.onscroll = function () {
	if (window.scrollY >= ticketsSection.offsetTop) {
		if (started == false) { 
			goals.forEach((number) => mainFunction(number));
			started = true;
		}
	}
}