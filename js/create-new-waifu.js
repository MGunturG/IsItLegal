function previewImage() {
	const img = document.getElementById("imageURL");
	document.getElementById("waifu_image_preview").src = img.value;
}

function createData() {
	const regularName = document.getElementById("regularName");
	const kanjiName = document.getElementById("kanjiName");
	const imageURL = document.getElementById("imageURL");
	const desc = document.getElementById("waifuDesc");
	const age = document.getElementById("waifuAge");

	let data = '{ "eng":"' + regularName.value + '", "jpn":"' + kanjiName.value + '", "img":"' + imageURL.value + '", "desc":"' + waifuDesc.value + '", "age":"' + waifuAge.value + '"}';

	const textToBLOB = new Blob([data], { type: 'text/plain' });
	const sFileName = regularName.value.toLowerCase() + ".json";

	let newLink = document.createElement("a");
	newLink.download = sFileName;

	if (window.webkitURL != null) {
		newLink.href = window.webkitURL.createObjectURL(textToBLOB);
	} else {
		newLink.href = window.URL.createObjectURL(textToBLOB);
		newLink.style.display = "none";
		document.body.appendChild(newLink);
	}

	newLink.click();
}