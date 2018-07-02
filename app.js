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
      if(goToDash){
        var redir = currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname
            if(redir.lastIndexOf("/")!=-1)
                redir = redir.substring(0,redir.lastIndexOf("/"));
            redir+="/dashboard.html";
        window.location.href = redir ;
       }
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
    for(var i in window.location.search.substring(1).split("&")){
        console.log(window.location.search.substring(1).split("&")[i].split("=")[0]);
        if(window.location.search.substring(1).split("&")[i].split("=")[0]=="REDurl")
            txtREDurl.value = window.location.search.substring(1).split("&")[i].split("=")[1];
        else if(window.location.search.substring(1).split("&")[i].split("=")[0]=="url")
            txtWebsite.value = window.location.search.substring(1).split("&")[i].split("=")[1];
        else if(window.location.search.substring(1).split("&")[i].split("=")[0]=="action" && window.location.search.substring(1).split("&")[i].split("=")[1]=="signIn"){
            goToDash=true;
            $("#signInForm").slideDown();
        }
    }
    if((currentPage.hostname + currentPage.pathname).includes("index.html"))
        txtREDurl.placeholder = "REDurl: The text after " + (currentPage.hostname + currentPage.pathname).substring(0,(currentPage.hostname + currentPage.pathname).indexOf("index.html"));
    else   
        txtREDurl.placeholder = "REDurl: The text after " + (currentPage.hostname + currentPage.pathname);
});

var goToDash = false;
var failedAttempts = 0;
btnDash.addEventListener("click", ()=>{
    if(signedIn){
        var redir = currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname;
            if(redir.lastIndexOf("/")!=-1)
                redir = redir.substring(0,redir.lastIndexOf("/"));
            redir+="/dashboard.html";
        window.location.href = redir;
    }else{
        goToDash = true;
        addPara("action", "signIn")
        console.log(signInFormForm.style.display);
        if(signInForm.style.display == "none")
            dropAllOfSignIn();
        failedAttempts++;
        if(failedAttempts>=3){
           alert("You need to sign in to access this");
        }
    }
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

var validURL = false;
var validRED = false;

$("#txtWebsite").keyup(function() {
    validURL = checkWeb(txtWebsite.value);
    recaper();
});

txtWebsite.addEventListener("change", ()=>{
    validURL = checkWeb(txtWebsite.value);
    recaper();
});

$("#txtREDurl").keyup(function() {
    validRED = checkREDurl(txtREDurl.value);
    recaper();
});

txtREDurl.addEventListener("change", ()=>{
    validRED = checkREDurl(txtREDurl.value);
    recaper();
});

function addPara(para1, para2){
    console.log(para1);
    console.log(para2+"test");
    var found = false;
    var tempurl="";
    console.log(tempurl+"100");
    for(var i in window.location.search.substring(1).split("&")){
        console.log(i);
        if(window.location.search.substring(1).split("&")[i].split("=")[0]==para1){
            if(tempurl== "")
                tempurl += window.location.search.substring(1).split("&")[i].split("=")[0]+"="+para2;
            else   
                tempurl += "&"+window.location.search.substring(1).split("&")[i].split("=")[0]+"="+para2;
            found = true;
            console.log(tempurl+"1");
        }else{
            if(tempurl== ""){
                tempurl += window.location.search.substring(1).split("&")[i];
                 console.log(tempurl+"2");
            }else{
                tempurl +="&"+window.location.search.substring(1).split("&")[i];
                 console.log(tempurl+"3");
            }
        }
    }
    console.log(window.location.search.substring(1).split("&").length);
    if(!found){
        if(window.location.search.substring(1).length >0)
            tempurl += "&"+para1+"="+para2;
        else   
            tempurl += para1+"="+para2;
    }
    history.replaceState( {} , 'foo', "?"+tempurl );
}

function recaper(){
    if(txtWebsite.value)
        addPara("url",txtWebsite.value);
    if(txtREDurl.value)
        addPara("REDurl",txtREDurl.value);
    
        if(validURL&&validRED){
        var str = new URL("http://example.com/"+txtREDurl.value).pathname.substring(1).toLowerCase();
         try{
            //CANT RETURN STUFF HERE
            firebase.database().ref(str+"/user").once('value').then(function(snapshot) {
                if(snapshot.val()==null||snapshot.val()==userID){
                    $("#invalidREDurl").slideUp();
        
                    if((currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname).includes("index.html"))
                        REDlink = (currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname).substring(0,(currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname).indexOf("index.html"))+str;
                    else   
                        REDlink = (currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname)+str;
                    URLlink = new URL(txtWebsite.value).href;
                    recapREDLink.innerHTML = REDlink;
                    recapURL.innerHTML = URLlink;
                    recapURL.href = URLlink;
                    $("#recap").slideDown();
                }else{
                    REDurlSuggestion.innerHTML = "The REDurl ("+str+") is taken";
                    $("#invalidREDurl").slideDown();
                    $("#recap").slideUp();
                }
            });
        }catch(error){
            console.log(error);
            REDurlSuggestion.innerHTML = "REDurl is incompatible";
            $("#invalidREDurl").slideDown();
            $("#recap").slideUp();
        }
    }else{
        console.log("Failed");
        $("#recap").slideUp();
    }
}
var successREDurl = document.getElementById("successREDurl");
var successURL = document.getElementById("successURL");
btnRegister.addEventListener("click", ()=>{
    if(checkWeb(txtWebsite.value)&&checkREDurl(txtREDurl.value)){
        var str = new URL("http://example.com/"+txtREDurl.value).pathname.substring(1).toLowerCase();
         try{
            //CANT RETURN STUFF HERE
            firebase.database().ref(str+"/user").once('value').then(function(snapshot) {
                if(snapshot.val()==null||snapshot.val()==userID){
                    $("#invalidREDurl").slideUp();
        
                    if((currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname).includes("index.html"))
                        REDlink = (currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname).substring(0,(currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname).indexOf("index.html"))+str;
                    else   
                        REDlink = (currentPage.protocol+"//"+currentPage.hostname + currentPage.pathname)+str;
                    URLlink = new URL(txtWebsite.value).href;
                    recapREDLink.innerHTML = REDlink;
                    recapURL.innerHTML = URLlink;
                    recapURL.href = URLlink;
                    $("#recap").slideDown();

                    if(signedIn){
                        firebase.database().ref(str).set({
                            url: URLlink,
                            user: userID
                        }, function(error) {
                            if (error) {
                              debugInfoForDatabase.innerHTML = error;
                            } else {
                                $("#redURLcreatorDiv").slideUp();
                                $("#successMessage").slideDown();
                                successREDurl.innerHTML = REDlink;
                                successREDurl.href = REDlink;
                                successURL.innerHTML = URLlink;
                            }
                        });

                    }else{
                        if(signInForm.style.display == "none")
                            dropAllOfSignIn();
                        else
                            $("#signInBeforeRegistering").slideDown();
                    }
                    
                }else{
                    REDurlSuggestion.innerHTML = "The REDurl ("+str+") is taken";
                    $("#invalidREDurl").slideDown();
                    $("#recap").slideUp();
                }
            });
        }catch(error){
            console.log(error);
            REDurlSuggestion.innerHTML = "REDurl is incompatible";
            $("#invalidREDurl").slideDown();
            $("#recap").slideUp();
        }
    }else{
        console.log("Failed");
        $("#recap").slideUp();
    }
});
var urlSuggestion = document.getElementById("urlSuggestion");
var autoAdd = false;
function checkWeb(str){
    autoAdd = false;
    if(str.substring(0,7)!="http://" && str.substring(0,8)!="https://"){
            urlSuggestion.innerHTML= "Try adding http:// to your url. Click here to automatically add it";
            autoAdd = true;
            $("#invalidURL").slideDown();
            return false;
    }else{
        try {
            var testURL = new URL(str);
            $("#invalidURL").slideUp();
            console.log("WEBPASS");
            return true;
        }catch(error){
            console.log(error);
                urlSuggestion.innerHTML= "";
                $("#invalidURL").slideDown();
                return false;
        }
    }
}

var invalidURLinvalidURL = document.getElementById("invalidREDurl");
invalidURL.addEventListener("click", function(e){
    if(autoAdd){
        txtWebsite.value = "http://" + txtWebsite.value;
        validURL = checkWeb(txtWebsite.value);
        recaper();
    }
},true);
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
    }else if(new URL("http://example.com/"+str).pathname.length >=201){ //The / at the start is included
        REDurlSuggestion.innerHTML = "REDurls shouldn't be longer than 200 characters";
        $("#invalidREDurl").slideDown();
        return false;
    }else{
        $("#invalidREDurl").slideUp();
        return true;
    }
}