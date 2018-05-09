  var config = {
    apiKey: "AIzaSyBpAWpSB1sSjuV1qR8woZoamGVonMgYN_Y",
    authDomain: "red-irector.firebaseapp.com",
    databaseURL: "https://red-irector.firebaseio.com",
    projectId: "red-irector",
    storageBucket: "red-irector.appspot.com",
    messagingSenderId: "578371314492"
  };
  firebase.initializeApp(config);

var url = "bing.com";

firebase.database().ref(code).once('value').then(function(snapshot) {
    url = snapshot.val().url;
    console.log(url);
});
                                                 
var urlEle = document.getElementById("url");
var websiteUrlEle = document.getElementById("weburls");
var failedUrl = document.getElementById("failedUrl");
$(document).ready(function() {
    if(url.substring(0,7)=="http://"||url.substring(0,8)=="https://"){
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
window.location.replace(url);


