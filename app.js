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
console.log(window.location.pathname);
console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1));
firebase.database().ref(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)).once('value').then(function(snapshot) {
    //if(snapshot.val().url!=null&&(url.substring(0,7)=="http://"||url.substring(0,8)=="https://"))
    snapshot.val().url;
    try {
        var testURL = new URL(snapshot.val().url);
        urlEle.innerHTML = testURL;
        urlEle.setAttribute("href", testURL);
        websiteUrlEle.setAttribute("href", testURL);
        websiteUrlEle.innerHTML = websiteUrlEle.hostname;
    }catch(error){
        noUrl.style.display = "block";
        yesUrl.style.display = "none";
        failedUrl.innerHTML = snapshot.val().url;
    };
    console.log(url);
    console.log(testURL);
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
//window.location.replace(url);


