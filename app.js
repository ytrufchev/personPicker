let names = ["Айхан Ахмед", "Алисай Ереджеб", "Борис Тотев", "Владислав Русев", "Георги Атанасов", "Даниел Ризов", "Джерен Салимова", "Динчер Селимов", "Емре Хюсеинов", "Ерай Мутлу", "Зара Христова", "Иван Иванов", "Йордан Труфчев", "Йордан Бонев", "Каяхан Шукриев", "Метин Ахмедов", "Миркаан Стефанов", "Несрин Ахмедова", "Ния Гьокова", "Ния Наумова", "Ростислав Калчев", "Рюя Ахмедова", "Салих Салих", "Самир Онбаши", "Сейхан Салиев", "Синан Ахмедов", "Станислав", "Стелиана Петкова", "Стелиян Стоянов", "Тодор Тодоров", "Хасан Хасан", "Ширин Асенова-Илязова", "Александър Димитров", "Анатоли Любенов"];
let lastFive = [];

function app() {
	for (let i = 0; i < names.length; i++) {
		document.getElementById("topA").innerHTML += "<div id='nameInList'><h3>" + names[i] + "</h3></div>";
	}
}

function pickRandom() {
	do {
		const randomIndex = Math.floor(Math.random() * names.length);
		randName = names[randomIndex];
	} while (lastFive.includes(randName));

	lastFive.push(randName);
	if (lastFive.length > 5) {
		lastFive.shift();
	}
	document.getElementById("bottomA").innerHTML += "<div id='selectedPerson'><h3>" + randName + "</h3></div>";
}
function clearData(){
	document.getElementById("bottomA").innerHTML = "";
	lastFive.length = 0;
}