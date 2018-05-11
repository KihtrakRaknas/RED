firebase.initializeApp({apiKey: "AIzaSyBpAWpSB1sSjuV1qR8woZoamGVonMgYN_Y",authDomain: "red-irector.firebaseapp.com",databaseURL: "https://red-irector.firebaseio.com",projectId: "red-irector",storageBucket: "red-irector.appspot.com",messagingSenderId: "578371314492"});

console.log(window.location.pathname);
console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1));
firebase.database().ref(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)+"/url").once('value').then(function(snapshot) {
    try {
        var testURL = new URL(snapshot.val());
        window.location.replace(testURL);
        $(document).ready(function() {
            var urlEle = document.getElementById("url");
            var websiteUrlEle = document.getElementById("weburls");
            urlEle.innerHTML = testURL;
            urlEle.setAttribute("href", testURL);
            websiteUrlEle.setAttribute("href", testURL);
            websiteUrlEle.innerHTML = websiteUrlEle.hostname;
        });
    }catch(error){
        $(document).ready(function() {
            if(snapshot.val()==undefined){
                noneUrl.style.display = "block";
                yesUrl.style.display = "none";
            }else{
                var failedUrl = document.getElementById("failedUrl");
                noUrl.style.display = "block";
                yesUrl.style.display = "none";
                failedUrl.innerHTML = snapshot.val();
            }
        });
    }
    console.log(snapshot.val());
    console.log(snapshot.val().href);
    console.log(testURL);
});