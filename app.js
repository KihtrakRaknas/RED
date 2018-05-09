console.log("TEST");
var url = "http://bing.com";
var urlEle = document.getElementById("url");
var websiteUrlEle = document.getElementById("weburls");
var failedUrl = document.getElementById("failedUrl");
$(document).ready(function() {
    if(url.substring(0,7)=="http://"||url.substring(0,8)=="https://")){
        urlEle.innerHTML = url;
        urlEle.setAttribute("href", url);
        websiteUrlEle.setAttribute("href", url);
        websiteUrlEle.innerHTML = websiteUrlEle.hostname;
        console.log("TEST");
    }else{
        noUrl.style.display = "block";
        yesUrl.style.display = "none";
        failedUrl.innerHTML = url;
    }
});
//window.location.replace(url);
