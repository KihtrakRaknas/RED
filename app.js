var url = "www.google.com";
document.onload = function (){
document.getElementbyId("url").innerHTML = url;
document.getElementbyId("url").href = url;
document.getElementbyId("websiteURL").href = url;
document.getElementbyId("websiteURL").innerHTML = url;
}
//window.location.replace(url);