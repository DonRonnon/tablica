// Funkcja do aktualizacji cyfrowego zegara
function updateClock() {
	const clockElement = document.getElementById("clock");
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");
	const timeString = `${hours}:${minutes}:${seconds}`;
	clockElement.textContent = timeString;
}

// Aktualizuj zegar co sekundę
setInterval(updateClock, 1000);

// Uruchom funkcję po załadowaniu strony, aby zainicjować zegar
window.addEventListener("load", updateClock);
