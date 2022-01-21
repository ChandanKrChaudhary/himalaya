document.querySelector("form").addEventListener("click",signup);
var userData=JSON.parse(localStorage.getItem("userDatabase"))||[];
function signup(event)
{
    event.preventDefault();
    var fname=document.querySelector("#loginInputName").value;
    var loginLastname=document.querySelector("#loginLastName").value
    var email=document.querySelector("#loginInputEmail").value;
    var loginInputPassword=document.querySelector("#loginInputPassword").value;
    
    var userCred={
        firstname:fname,
        lastname:loginLastname,
        emailId:email,
        pass:loginInputPassword,
    };
    userData.push(userCred);
    localStorage.setItem("userDatabase",JSON.stringify(userData));
    alert("Registration Successful"); 
    window.location.href="signInpage.html";           
}





