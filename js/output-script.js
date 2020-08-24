function displayOutput() {
	var waifuInput = document.getElementById("myInput").value;
	let request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.status == 200) {
			var waifusdata = JSON.parse(this.responseText);
			document.getElementById("waifu_image").src = waifusdata.img;
			document.getElementById("waifu_name").innerHTML = waifusdata.eng;
			document.getElementById("waifu_name_japan").innerHTML = waifusdata.jpn;
			document.getElementById("waifu_description").innerHTML = "Description : " + waifusdata.desc;
			document.getElementById("waifu_age").innerHTML = "Age : " + waifusdata.age;
			document.getElementById("waifu_legal_status").innerHTML = "Legal Status : " + waifusdata.stat;
		} else if (this.status == 404) {
			document.getElementById("waifu_image").src = "/notfound.png";
			document.getElementById("waifu_name").innerHTML = "Not Found or invalid input";
			document.getElementById("waifu_name_japan").innerHTML = "Not Found";
			document.getElementById("waifu_description").innerHTML = "Description : Not Found";
			document.getElementById("waifu_age").innerHTML = "Age : Not Found";
			document.getElementById("waifu_legal_status").innerHTML = "Legal Status : Not Found";
		}
	};
	request.open("GET", window.location.href + "waifusdata/character/" + waifuInput.toLowerCase() + ".json", true);
	request.send();
}