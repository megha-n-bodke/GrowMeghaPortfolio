const form = document.getElementById("contact-form");
const email= document.getElementById("gettouch");
const id = document.getElementById("email");
const EMAIL_CASE_CHECK = "Please Enter Email Address In Lower Case";
const EMAIL_CHECK = "Please enter valid email address";
const span = document.createElement("span");
const err = document.getElementById("err-msg");

/* email.insertAdjacentElement('beforebegin', span);
 */

form.addEventListener("submit",function(event){
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email_add=id.value;
    if(email_add === email_add.toLowerCase())
    {
        if(validRegex.test(email_add)){
            
            alert (email_add);
        }
        else{
            err.innerHTML = EMAIL_CHECK;
            event.preventDefault();
            err.classList.add("show-alert");
        }
        
    }
    else {
       /*  alert("not in correct format"); */
        event.preventDefault();
        span.innerHTML = EMAIL_CASE_CHECK;
        span.style.display = "block";
        span.style.color="red";
        /* form.appendChild(span); */
        
    }
})

