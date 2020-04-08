/* eslint-disable no-undef */
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDl4dmvk0tBIX0-BWCaOZy0MjAcTtLHo60",
    authDomain: "cabbuddies-1562982601192.firebaseapp.com",
    databaseURL: "https://cabbuddies-1562982601192.firebaseio.com",
    projectId: "cabbuddies-1562982601192",
    storageBucket: "cabbuddies-1562982601192.appspot.com",
    messagingSenderId: "1067716858916",
    appId: "1:1067716858916:web:298c461c0439c497d5b4b1",
    measurementId: "G-VQLJ1DMMJ5"
};

firebase.initializeApp(firebaseConfig);

firebase.analytics();

function googleSignIn(){
    
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function(result){
        console.log(result);
        var json = {};
        json["email"]=result.user.email;
        json["password"]=result.user.uid;
        json["registrationType"]="Google";
        json["firstName"]=result.additionalUserInfo.profile.given_name || "";
        json["lastName"]=result.additionalUserInfo.profile.family_name || "";
        json["phoneNumber"]=result.user.phoneNumber || "";
        //json["imageUrl"]=result.user.photoURL || "";
        $("#myForm").loadJSON(json);
        //document.forms["myForm"].submit();
        document.getElementById("submitButton").click();
    }).catch(function(err){
        console.log(err);	
    });
}
function facebookSignIn(){
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(result){
        console.log(result);
        var json = {};
        json["email"]=result.user.email;
        json["password"]=result.user.uid;
        json["registrationType"]="Facebook";
        json["firstName"]=result.additionalUserInfo.profile.first_name || "";
        json["lastName"]=result.additionalUserInfo.profile.last_name || "";
        json["phoneNumber"]=result.user.phoneNumber || "";
        //json["imageUrl"]=result.user.photoURL || "";
        $("#myForm").loadJSON(json);
        //document.forms["myForm"].submit();
        document.getElementById("submitButton").click();
    }).catch(function(err){
        console.log(err);	
    });
}

$(document).ready(function(){
    

});

    $("#googleSignIn").click(function(){
        console.log('google')
        googleSignIn();
    });

    $("#facebookSignIn").click(function(){
        console.log('facebook')
        facebookSignIn();
    });