window.onload = () => {
	document.querySelector(".raznar-head").classList.add("show");
	document.querySelector(".raznar-head").classList.remove("hide");
	document.querySelector(".raznar-testi").classList.add("show");
	document.querySelector(".raznar-testi").classList.remove("hide");
	document.querySelector(".footer").classList.add("show");
	document.querySelector(".footer").classList.remove("hide");	

	var typewriter = new Typewriter(document.getElementById("lang_about"), {
		"delay": 50
	});

	var about = document.querySelector("meta[name=_about]").content.split("|");

	typewriter.pauseFor(3000).typeString(about[0])
	.pauseFor(1000)
	.typeString(about[1])
	.pauseFor(1200)
	.typeString(about[2])
	.pauseFor(900)
	.typeString(about[3])
	.pauseFor(1000)
	.typeString(about[4])
	.pauseFor(500)
	.typeString(about[5])
	.start();
};