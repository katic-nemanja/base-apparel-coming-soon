function TurnOff(){
    let img = document.querySelector("#errorIMG");
    img.style.display= "none";
}

function TurnOn(){
    let img = document.querySelector("#errorIMG");
    img.style.display= "block";
}

function ValidateEmail()
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mejl = document.getElementById("email").value;
    let paragraf = document.querySelector("#demo");

    console.log("mejl:" + mejl);
    if (mejl.match(mailformat))
    {
        return true;
    }
    else
    {
        paragraf.innerHTML = "Please provide a valid email";
        document.getElementById("email").style.border = "2px solid red";
        TurnOn();
    }
}


function Reset(){
    let paragraf = document.querySelector("#demo");
    TurnOff();
    document.getElementById("email").style.border = "1px solid #ce9797";
    paragraf.textContent = "";
}