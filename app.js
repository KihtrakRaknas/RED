        firebase.initializeApp({apiKey: "AIzaSyBpAWpSB1sSjuV1qR8woZoamGVonMgYN_Y",authDomain: "red-irector.firebaseapp.com",databaseURL: "https://red-irector.firebaseio.com",projectId: "red-irector",storageBucket: "red-irector.appspot.com",messagingSenderId: "578371314492"});

var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var btnLogin = document.getElementById("btnLogin");
var btnSignUp = document.getElementById("btnSignUp");
var btnSignUpWithGoogle = document.getElementById("btnSignUpWithGoogle");

var btnActiveLogin = document.getElementById("btnActiveLogin");
var btnActiveSignUp = document.getElementById("btnActiveSignUp");
var btnSignUpWithGoogle2 = document.getElementById("btnSignUpWithGoogle2");

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
    console.log(user);
  } else {
    console.log("NOT SIGNED IN");
  }
});
