firebase.initializeApp({apiKey: "AIzaSyBpAWpSB1sSjuV1qR8woZoamGVonMgYN_Y",authDomain: "red-irector.firebaseapp.com",databaseURL: "https://red-irector.firebaseio.com",projectId: "red-irector",storageBucket: "red-irector.appspot.com",messagingSenderId: "578371314492"});

var url = "bing.com";
console.log(window.location.pathname);
console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1));
firebase.database().ref(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)+"/url").once('value').then(function(snapshot) {
    try {
        var testURL = new URL(snapshot.val().href);
        //window.location.replace(url);
        var urlEle = document.getElementById("url");
        var websiteUrlEle = document.getElementById("weburls");
        urlEle.innerHTML = testURL;
        urlEle.setAttribute("href", testURL);
        websiteUrlEle.setAttribute("href", testURL);
        websiteUrlEle.innerHTML = websiteUrlEle.hostname;
    }catch(error){
        var failedUrl = document.getElementById("failedUrl");
        noUrl.style.display = "block";
        yesUrl.style.display = "none";
        failedUrl.innerHTML = snapshot.val().href;
    };
    console.log(snapshot.val());
    console.log(snapshot.val().href);
    console.log(testURL);
});
                                                 


/*$(document).ready(function() {
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
});*/



