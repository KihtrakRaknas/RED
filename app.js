console.log("TEST");
var url = "http://bing.com";
var urlEle = document.getElementById("url");
var websiteUrlEle = document.getElementById("weburls");
$(document).ready(function() {
    urlEle.innerHTML = url;
    urlEle.setAttribute("href", url);
    websiteUrlEle.setAttribute("href", url);
    websiteUrlEle.innerHTML = websiteUrlEle.hostname;
    console.log("TEST");
});
//window.location.replace(url);
