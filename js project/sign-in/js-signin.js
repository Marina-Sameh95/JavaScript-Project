function ValidateEmail()
{
    var inputText=document.getElementById("inputEmail").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat))
    {
        // document.form1.text1.focus();
        
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        // document.form1.text1.focus();
        return false;
    }
}

function CheckPassword() 
{ 
    var inputtxt=document.getElementById("inputPassword").value;
    var passw = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,12}$/;
    if(inputtxt.match(passw)) 
    { 
        alert('Correct, try another...')
        window.location.href="../blog/index.html";
        return true;
    }
    else
    { 
        alert('you entered wrong password')
        return false;
    }
}