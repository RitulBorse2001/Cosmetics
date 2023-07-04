function fun()
    {
        var login=document.getElementById("email").value;
        var pass=document.getElementById("pass").value;
        if(login=="dp7751372@gmail.com" && pass=="ritul@123")
        {
            alert("success");
            window.location.href="recoverhome.html";
        }
        else{
        alert("somethinf wrong try again");
        }
    }