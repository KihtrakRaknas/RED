        firebase.initializeApp({apiKey: "AIzaSyBpAWpSB1sSjuV1qR8woZoamGVonMgYN_Y",authDomain: "red-irector.firebaseapp.com",databaseURL: "https://red-irector.firebaseio.com",projectId: "red-irector",storageBucket: "red-irector.appspot.com",messagingSenderId: "578371314492"});
        console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1));
try{ firebase.database().ref(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)+"/url").once('value').then(function(snapshot) {
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
                        document.getElementById("noneUrl").style.display = "block";
                        document.getElementById("yesUrl").style.display = "none";
                    }else{
                        document.getElementById("noUrl").style.display = "block";
                        document.getElementById("yesUrl").style.display = "none";
                        document.getElementById("failedUrl").innerHTML = snapshot.val();
                    }
                });
            }
        });
   }catch(error){
    //var urlp = window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1);
    //if(urlp.val().contains(".")||urlp.val().contains("#")||urlp.val().contains("$")||urlp.val().contains("[")||urlp.val().contains("]")){
         window.onload = function() {
            document.getElementById("noneUrl").style.display = "block";
            document.getElementById("yesUrl").style.display = "none";
            document.getElementById("register").innerHTML="invalid REDurl";
            document.getElementById("register").classList.add("disabled");
            document.getElementById("register").classList.remove("btn-success");
            document.getElementById("register").classList.add("btn-danger");
         }
    //}
   }