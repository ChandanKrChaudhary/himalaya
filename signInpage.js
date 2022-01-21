document.querySelector("#button").addEventListener("click",SignIn);
    var regdUser=JSON.parse(localStorage.getItem("userDatabase"));
    function SignIn()
    {
        var email=document.querySelector("#loginInputEmail").value ;
        var password=document.querySelector("#loginInputPassword").value ;
        for(var i=0;i<regdUser.length;i++)
        {
            if(regdUser[i].emailId==email && regdUser[i].pass==password)
            {
                console.log("login successful");
                alert("login successful");    
            }
            else{
                console.log("wrong credentials");
                alert("wrong credentials");   
            }
        }
    }