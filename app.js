var url = "http://www.google.com";
document.onload = function(){
document.getElementById("url").innerHTML = url;
document.getElementById("url").href = url;
document.getElementById("websiteURL").href = url;
document.getElementById("websiteURL").innerHTML = url;
}
window.location.replace(url);