// store variables
const principaloutput = document.getElementById("Principalresult");
const interestoutput = document.getElementById("interestresult");
const totalpayableoutput = document.getElementById("totalresult");
const btn = document.getElementById("calc");
const remove = document.getElementById("clear");

const fullcalcultae = () => {
	p = document.getElementsByName("in1");

	// input variables
	const principal = parseInt(document.getElementById("principalvalue").value);
	const interest = parseInt(document.getElementById("interestvalue").value);
	const year = parseInt(document.getElementById("yearvalue").value);

	let inrate = interest / 100 / 12;
	let time = year * 12;

	if (!principal) {
		alert("Please complet inputfield");
		p.style.color = "red";
	} else if (!interest) {
		alert("Please complet inputfield");
	} else if (!year || year > 25) {
		alert("Please complet inputfield");
	} else {
		let emi =
			(principal * inrate * (1 + inrate) ** time) /
			((1 + inrate) ** time - 1);
		// interest fromula
		let finterest = emi * time - principal;

		// itotal payable amount
		let total = emi * time;
		principaloutput.innerText = `₹ ${Math.round(emi)}`;
		interestoutput.innerText = `₹ ${Math.round(finterest)}`;
		totalpayableoutput.innerText = `₹ ${Math.round(total)}`;
	}
};

btn.addEventListener("click", () => {
	fullcalcultae();
});

remove.addEventListener("click", () => {
	// input variables
	document.getElementById("principalvalue").value = "";
	document.getElementById("interestvalue").value = "";
	document.getElementById("yearvalue").value = "";
	principaloutput.innerText = ``;
	interestoutput.innerText = ``;
	totalpayableoutput.innerText = ``;
});

fullcalcultae();
