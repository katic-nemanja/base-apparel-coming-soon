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
    // paragraf.textContent = mejl.textContent;

    console.log("mejl:" + mejl);
    // console.log("paragraf:" + paragraf.textContent);
    if (mejl.match(mailformat))
    {
        
        /*alert("Valid email address!");
        return true;*/
    }
    else
    {
        paragraf.innerHTML = "Please provide a valid email";
        TurnOn();
        // alert("You have entered an invalid email address!");
        // return false;
    }
}


function Reset(){
    let paragraf = document.querySelector("#demo");
    TurnOff();
    paragraf.textContent = "";
}