/* Add your JavaScript to this file */

window.onload = loadPage;

function loadPage(){
    let submit = document.querySelectorAll(".btn")[1];
        
    submit.addEventListener('click', clicker);
}

function clicker(event){
    event.preventDefault();

    const emailAddress = document.getElementById("email").value;

    if(emailAddress!=""){
        document.getElementsByClassName("message")[0].textContent = alert("Thank You! Your email address " +emailAddress+ " has been added to our mailing list");
    }else{
        document.getElementsByClassName("message")[0].textContent = ""
        document.getElementsByClassName("message")[0].textContent =alert("Please enter a valid email address")
    }
}



