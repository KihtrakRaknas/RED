var url = "www.google.com";
Document.onload = function (){
Document.getElementById("url").innerHTML = url;
Document.getElementById("url").href = url;
Document.getElementById("websiteURL").href = url;
Document.getElementById("websiteURL").innerHTML = url;
}
//window.location.replace(url);