var lang = localStorage.getItem("language");

document.querySelector("form").onsubmit = () => {
	var select = Number(document.querySelector("form select").value);
	if (select == 0) {
		document.querySelector(".error").innerText = "Mohon pilihlah bahasa yang sesuai!";
	} else if (select == 1) {
		if (lang && lang === "id") {
			document.querySelector(".error").innerText = "Bahasa yang kamu pilih telah sesuai dengan default bahasamu, pilihlah bahasa yang lain!";
		} else {
			localStorage.setItem("language", "id");
			window.location.replace("index.html");
		}
	} else if (select == 2) {
		if (lang && lang === "en") {
			document.querySelector(".error").innerText = "Please select another language!";
		} else {
			localStorage.setItem("language", "en");
			window.location.replace("index.html");
		}
	}
	return !1;
};