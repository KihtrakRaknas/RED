firebase.initializeApp({apiKey: "AIzaSyBpAWpSB1sSjuV1qR8woZoamGVonMgYN_Y",authDomain: "red-irector.firebaseapp.com",databaseURL: "https://red-irector.firebaseio.com",projectId: "red-irector",storageBucket: "red-irector.appspot.com",messagingSenderId: "578371314492"});

var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var btnLogin = document.getElementById("btnLogin");
var btnSignUp = document.getElementById("btnSignUp");
var btnSignUpWithGoogle = document.getElementById("btnSignUpWithGoogle");

var btnActiveLogin = document.getElementById("btnActiveLogin");
var btnActiveSignUp = document.getElementById("btnActiveSignUp");
var btnSignUpWithGoogle2 = document.getElementById("btnSignUpWithGoogle2");
var btnSignOut = document.getElementById("btnSignOut");

var btnSignOutMobile = document.getElementById("btnSignOutMobile");
var SignOutMobileNav = document.getElementById("SignOutMobileNav");

var btnDash = document.getElementById("btnDash");

var txtWebsite = document.getElementById("txtWebsite");
var txtREDurl = document.getElementById("txtREDurl");
var btnRegister = document.getElementById("btnRegister");

var dashSignInReq = document.getElementById("dashSignInReq");

btnLogin.addEventListener("click", ()=>{
    console.log("TEST");
    const email = txtEmail.value
    const password = txtPassword.value
    const promise = firebase.auth().signInWithEmailAndPassword(email, password);
    promise.catch(pro=>{
        console.log(pro.messsage),
        $(document).ready(function() {
            $("#logFailedAlert").slideDown().delay("100").slideUp()
        })
    });
});

var userID;
btnSignUp.addEventListener("click", ()=>{
    const email = txtEmail.value
    const password = txtPassword.value
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    promise.catch(pro=>{
        console.log(pro.messsage),
        $(document).ready(function() {
            $("#logFailedAlert").slideDown().delay("100").slideUp()
        });
    });
});

var provider = new firebase.auth.GoogleAuthProvider();
btnSignUpWithGoogle.addEventListener("click", ()=>{
    firebase.auth().signInWithRedirect(provider),
    firebase.auth().getRedirectResult().then().catch(function(pro) {
        console.log(pro),
        $(document).ready(function() {
            $("#logFailedAlert").slideDown().delay("100").slideUp()
        })
    })
});

btnSignUpWithGoogle2.addEventListener("click", ()=>{
    firebase.auth().signInWithRedirect(provider),
    firebase.auth().getRedirectResult().then().catch(function(pro) {
        console.log(pro),
        $(document).ready(function() {
            $("#logFailedAlert").slideDown().delay("100").slideUp()
        })
    })
});
var signedIn = false;
var userID = "";
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      userID = user.uid;
      signedIn = true;
      btnActiveLogin.style.display = "none";
      btnActiveSignUp.style.display = "none";
      btnSignUpWithGoogle2.style.display = "none";
      btnSignOut.style.display = "block";
      dashSignInReq.style.display = "none";
      SignOutMobileNav.style.display = "block";
      console.log(user);
      $("#signInForm").slideUp();
  } else {
      signedIn = false;
      console.log("NOT SIGNED IN");
      btnActiveLogin.style.display = "block";
      btnActiveSignUp.style.display = "block";
      btnSignUpWithGoogle2.style.display = "block";
      btnSignOut.style.display = "none";
      dashSignInReq.style.display = "block";
      SignOutMobileNav.style.display = "none";
  }
});

var signInFormForm = document.getElementById("signInFormForm");
btnActiveLogin.addEventListener("click", ()=>{
    if(btnLogin.style.display!="block"){
        var pad = 50;
        var loop = setInterval(function(){pad--;signInFormForm.style.paddingTop = pad+"px";}, 7);
        
        $("#signInForm").slideUp(function(){
            btnLogin.style.display = "block";
            btnSignUp.style.display = "none";
            btnSignUpWithGoogle.style.display = "none";
            clearInterval(loop);
            pad = 0;
            var loop2 = setInterval(function(){pad++;signInFormForm.style.paddingTop = pad+"px";if(pad >= 50){clearInterval(loop2);}}, 10);
            $("#signInForm").slideDown();
        });
    }else{
        btnLogin.style.display = "block";
        btnSignUp.style.display = "none";
        btnSignUpWithGoogle.style.display = "none";
        $("#signInForm").slideDown();
    }
    
});

btnActiveSignUp.addEventListener("click", ()=>{
    if(btnSignUp.style.display!="block"){
        var pad = 50;
        var loop = setInterval(function(){pad--;signInFormForm.style.paddingTop = pad+"px";}, 7);
        $("signInFormForm").slideUp();
        $("#signInForm").slideUp(function(){
            btnSignUp.style.display = "block";
            btnLogin.style.display = "none";
            btnSignUpWithGoogle.style.display = "none";
            clearInterval(loop);
            pad = 0;
            var loop2 = setInterval(function(){pad++;signInFormForm.style.paddingTop = pad+"px";if(pad >= 50){clearInterval(loop2);}}, 7);
            $("#signInForm").slideDown();
        });
    }else{
            btnSignUp.style.display = "block";
            btnLogin.style.display = "none";
            btnSignUpWithGoogle.style.display = "none";
            $("#signInForm").slideDown();
    }
});



btnSignOut.addEventListener("click", ()=>{
    firebase.auth().signOut();
});

btnSignOutMobile.addEventListener("click", ()=>{
    firebase.auth().signOut();
});


var txtREDurl = document.getElementById("txtREDurl");
var currentPage = new URL(window.location.href);
$(document).ready(function() {
    if((currentPage.hostname + currentPage.pathname).includes("index.html"))
        txtREDurl.placeholder = "REDurl: The text after " + (currentPage.hostname + currentPage.pathname).substring(0,(currentPage.hostname + currentPage.pathname).indexOf("index.html"));
    else   
        txtREDurl.placeholder = "REDurl: The text after " + (currentPage.hostname + currentPage.pathname);
});

btnDash.addEventListener("click", ()=>{
    if(signedIn)
        console.log("GO TO PAGE");
    else
        dropAllOfSignIn();
});

function dropAllOfSignIn(){
    btnSignUp.style.display = "block";
    btnLogin.style.display = "block";
    btnSignUpWithGoogle.style.display = "block";
    $("#signInForm").slideDown();
}
var REDlink;
var URLlink;

var recapREDLink = document.getElementById("recapREDLink");
var recapURL = document.getElementById("recapURL");

txtWebsite.addEventListener("change", ()=>{
    if(checkWeb(txtWebsite.value)&&checkREDurl(txtREDurl.value)){
        if((currentPage.hostname + currentPage.pathname).includes("index.html"))
            REDlink = (currentPage.hostname + currentPage.pathname).substring(0,(currentPage.hostname + currentPage.pathname).indexOf("index.html"))+"/"+txtREDurl;
        else   
            REDlink = (currentPage.hostname + currentPage.pathname)+"/"+txtREDurl;
        recapREDLink.innerHTML = REDlink;
        URLlink = txtWebsite.value;
        recapURL = URLlink;
        $("#recap").slideDown();
    }
});

txtREDurl.addEventListener("change", ()=>{
    if(checkREDurl(txtREDurl.value)&&checkWeb(txtWebsite.value)){
        if((currentPage.hostname + currentPage.pathname).includes("index.html"))
            REDlink = (currentPage.hostname + currentPage.pathname).substring(0,(currentPage.hostname + currentPage.pathname).indexOf("index.html"))+"/"+txtREDurl;
        else   
            REDlink = (currentPage.hostname + currentPage.pathname)+"/"+txtREDurl;
        recapREDLink.innerHTML = REDlink;
        URLlink = txtWebsite.value;
        recapURL = URLlink;
        $("#recap").slideDown();
    }
});

btnRegister.addEventListener("click", ()=>{
    console.log(checkREDurl(txtREDurl.value));
    console.log(checkWeb(txtWebsite.value));
    if(checkWeb(txtWebsite.value)&&checkREDurl(txtREDurl.value)){
        console.log("PASSED");
        if((currentPage.hostname + currentPage.pathname).includes("index.html"))
            REDlink = (currentPage.hostname + currentPage.pathname).substring(0,(currentPage.hostname + currentPage.pathname).indexOf("index.html"))+"/"+txtREDurl;
        else   
            REDlink = (currentPage.hostname + currentPage.pathname)+"/"+txtREDurl;
        recapREDLink.innerHTML = REDlink;
        URLlink = txtWebsite.value;
        recapURL = URLlink;
        $("#recap").slideDown();
        
            if(signedIn){
                console.log("GO TO PAGE");
            }else{
                dropAllOfSignIn();
            }
        
    }else{
        console.log("Failed");
        $("#recap").slideUp();
    }

});
var urlSuggestion = document.getElementById("urlSuggestion");
function checkWeb(str){
    try {
        var testURL = new URL(str);
        $("#invalidURL").slideUp();
        return true;
    }catch(error){
        if(str.substring(0,7)!="http://" && str.substring(0,8)!="https://")
            urlSuggestion.innerHTML= "Try adding http:// to your url";
        else
            urlSuggestion.innerHTML= "";
        $("#invalidURL").slideDown();
        return false;
    }
    $("#invalidURL").slideDown();
}
var REDurlSuggestion = document.getElementById("REDurlSuggestion");
function checkREDurl(str){
    if(str == ""){
        REDurlSuggestion.innerHTML = "REDurl can't be empty";
        $("#invalidREDurl").slideDown();
        return false;
    }else if(str.includes(".")||str.includes("#")||str.includes("$")||str.includes("/")||str.includes("[")||str.includes("]")){
        REDurlSuggestion.innerHTML = "REDurl can't contain \".\", \"#\", \"$\", \"/\", \"[\", or \"]\"";
        $("#invalidREDurl").slideDown();
        return false;
    }else{
        try{
            //CANT RETURN STUFF HERE
            firebase.database().ref(str+"/user").once('value').then(function(snapshot) {
                if(snapshot.val()==null||snapshot.val()==userID){
                    $("#invalidREDurl").slideUp();
                    return true;
                }else{
                    REDurlSuggestion.innerHTML = "The REDurl ("+str+") is taken";
                    $("#invalidREDurl").slideDown();
                    return false;
                }
            });
        }catch(error){
            REDurlSuggestion.innerHTML = "REDurl is incompatible";
            $("#invalidREDurl").slideDown();
            return false;
        }
    }
}