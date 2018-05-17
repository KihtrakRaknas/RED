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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      btnActiveLogin.style.display = "none";
      btnActiveSignUp.style.display = "none";
      btnSignUpWithGoogle2.style.display = "none";
      btnSignOut.style.display = "block";
      console.log(user);
      $("#signInForm").slideUp();
  } else {
      console.log("NOT SIGNED IN");
      btnActiveLogin.style.display = "block";
      btnActiveSignUp.style.display = "block";
      btnSignUpWithGoogle2.style.display = "block";
      btnSignOut.style.display = "none";
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


var txtREDurl = document.getElementById("txtREDurl");
var currentPage = new URL(window.location.href);
$(document).ready(function() {
    if((currentPage.hostname + currentPage.pathname).contains("index.html")
        txtREDurl.placeholder = "REDur: The text after " + (currentPage.hostname + currentPage.pathname).substring(0,(currentPage.hostname + currentPage.pathname).indexOf("index.html"));
    else   
        txtREDurl.placeholder = "REDur: The text after " + (currentPage.hostname + currentPage.pathname);
});