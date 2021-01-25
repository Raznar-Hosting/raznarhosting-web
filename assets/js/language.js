var ens = {
	"askText": "What is Raznar Hosting?",
	"about": "Raznar Hosting, is a solution for those of you who want to create minecraft servers but want good quality and friendly in pocket prices Starting from Rp19.500,00 / Gigabyte!. Our hosting is supported by (AMD Epyc 7B12 & Intel Xeon Intel(R) Xeon(R) Platinum 8151 (Skylake) 3.6 GHz - 4.0 GHz) which is the ideal CPU for servers and located in Singapore, With an easily accessible and easy-to-understand panel, it is a hallmark of Raznar Hosting. What?| you still doubt the quality?| Take it easy!|, lots of hosting features too! get free additional subdomains (mc-id.xyz , raznar.id , raznar.xyz , mc-srv.xyz), and backup features, so when you want backups do not need to open FTP, just pake features and download, there is a staff system feature too! so your friends can access the panel too, How?| Interested in trying and buying it?| Join our discord: https://discord.gg/q3CaM9D",
	"testimonis": [{
		"icon": "https://cdn.discordapp.com/avatars/278862831846162432/fc25c6d09539a0faba58448894d02a77.png?size=1024",
		"name": "fadialaydrus",
		"text": "Web panel was slow and immediately repaired not until 2 days, for 8gb the price is okay with the existing service, in the guide is also the way it is and if asked is always answered."
	}, {
		"icon": "https://cdn.discordapp.com/avatars/464005823085936640/e5c7e47b4126dacf0a52c04db0e2cb39.png?size=1024",
		"name": "Fakhrads",
		"text": "fast service, no direct small talk to the point."
	}, {
		"icon": "https://cdn.discordapp.com/avatars/743032549760303104/42a74f8bc6f653a597922f21486d008f.png?size=1024",
		"name": "Wisnu Yundo",
		"text": "Problem ping no doubt guys!! The best"
	}, {
		"icon": "https://cdn.discordapp.com/avatars/676761578833444864/a_bfaf01add785347b22b08c838af0613c.gif?size=1024&f=.gif",
		"name": "MechaGuard",
		"text": "Steady, and fast respond."
	}],
	"testimoni": "What they said?",
	"testiOthers": "And 20+ other clients."
}

var ids = {
	"askText": "Apa itu Raznar Hosting?",
	"about": "Raznar Hosting, adalah solusi untuk anda yang ingin membuat server minecraft tapi pengen kualitas bagus dan ramah di kantong harga Mulai dari Rp19.500,00 / Gigabyte!.  Hosting kami didukung dengan (AMD Epyc 7B12 & Intel Xeon Intel(R) Xeon(R) Platinum 8151 (Skylake) 3.6 GHz - 4.0 GHz) yang merupakan CPU yang ideal untuk server dan berlokasi di Singapore, Dengan panel yang mudah diakses dan mudah di pahami, menjadi ciri khas dari Raznar Hosting. Apa?| kalian masih ragu dengan kualitasnya?| Tenang saja!|, banyak fitur juga loh hostingnya! dapet Subdomain tambahan GRATIS (mc-id.xyz , raznar.id , raznar.xyz , mc-srv.xyz), dan fitur backup, jadi saat mau backup ga perlu buka FTP, tinggal pake fiturnya lalu download, ada fitur staff system juga lo! jadi temen kamu bisa akses panel juga, Gimana?| Tertarik untuk mencoba dan membelinya?| Join discord kami: https://discord.gg/q3CaM9D",
	"testimonis": [{
		"icon": "https://cdn.discordapp.com/avatars/278862831846162432/fc25c6d09539a0faba58448894d02a77.png?size=1024",
		"name": "fadialaydrus",
		"text": "Tadi web panelnya lemot dan langsung di benerin gak sampe 2 hari, untuk 8gb harganya oke dengan pelayanan yang ada, di guide juga cara2nya dan kalo bertanya selalu dijawab."
	}, {
		"icon": "https://cdn.discordapp.com/avatars/464005823085936640/e5c7e47b4126dacf0a52c04db0e2cb39.png?size=1024",
		"name": "Fakhrads",
		"text": "pelayanan cepat, ngga basa basi langsung to the point."
	}, {
		"icon": "https://cdn.discordapp.com/avatars/743032549760303104/42a74f8bc6f653a597922f21486d008f.png?size=1024",
		"name": "Wisnu Yundo",
		"text": "Soal ping jangan diragukan lagi bos!! The best"
	}, {
		"icon": "https://cdn.discordapp.com/avatars/676761578833444864/a_bfaf01add785347b22b08c838af0613c.gif?size=1024&f=.gif",
		"name": "MechaGuard",
		"text": "Mantab, Fast Resp"
	}],
	"testimoni": "Apa yang mereka katakan?",
	"testiOthers": "Dan 20+ clients lainnya."
}

var languages = {
	"id": ids,
	"en": ens
};

var lang = localStorage.getItem("language");
if (!lang) window.location.replace("select_lang.html");
else if (!Object.keys(languages).includes(lang.toLowerCase())) {
	window.location.replace("select_lang.html");
} else {
	lang = localStorage.getItem("language");
	// Raznar Head
	document.getElementById("lang_ask").innerText = languages[lang].askText;
	document.querySelector("meta[name=_about]").content = languages[lang].about;
	
	// Testi
	document.getElementById("lang_testiTitle").innerHTML = languages[lang].testimoni;

	// Clients
	languages[lang].testimonis.forEach(testi => {
		var element = `<div class="testimoni"><img src="${testi.icon}" /><h2>${testi.name}</h2><p>${testi.text}</p></div>`;
		document.querySelector(".testimonis").innerHTML += element;
	});
}