

const submit = document.getElementById("gettouch");
const id = document.getElementById("email");
const EMAIL_CASE_CHECK = "Please Enter Email Address In Lower Case";
const EMAIL_CHECK = "Please enter valid email address";
const err = document.getElementById("err-msg");

/* email.insertAdjacentElement('beforebegin', span);
 */

submit.addEventListener("click", function (event) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let email_add = id.value;
  if (email_add === email_add.toLowerCase()) {
    if (validRegex.test(email_add)) {
        err.classList.remove("show-alert");
        err.classList.add("hide-alert");
    } else {
      err.innerHTML = `<span id="err-msg">${EMAIL_CHECK}</span>`;
      event.preventDefault();
      err.classList.add("show-alert");
      err.classList.remove("hide-alert");
    }
  } else {
    event.preventDefault();
    err.innerHTML = `<span id="err-msg">${EMAIL_CASE_CHECK}</span>`;
    err.classList.add("show-alert");
    err.classList.remove("hide-alert");
  }

  setTimeout(() => {
    err.classList.remove("show-alert");
    err.classList.add("hide-alert");
  }, 2500);
});