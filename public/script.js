//var iframe = document.querySelectorAll("iframe")[1];
var trackID = document.querySelector("#trackID");
var copyButton = document.querySelector("#copyButton").addEventListener('click',function () {
	trackID.select();
	document.execCommand("copy");
});
