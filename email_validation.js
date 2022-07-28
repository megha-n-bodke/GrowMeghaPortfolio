const submit = document.getElementById('gettouch');
const id = document.getElementById('email');
const EMAIL_CASE_CHECK = 'Please Enter Email Address In Lower Case';
const EMAIL_CHECK = 'Please enter valid email address';
const err = document.getElementById('err-msg');

submit.addEventListener('click', function (event) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailAdd = id.value;
  if (emailAdd === emailAdd.toLowerCase()) {
    if (validRegex.test(emailAdd)) {
     err.classList.remove('show-alert');
    err.classList.add('hide-alert');
    } else {
      err.innerHTML = `<span id="err-msg">${EMAIL_CHECK}</span>`;
      event.preventDefault();
      err.classList.add('show-alert');
      err.classList.remove('hide-alert');
    }
  } else {
    event.preventDefault();
    err.innerHTML = `<span id="err-msg">${EMAIL_CASE_CHECK}</span>`;
    err.classList.add('show-alert');
    err.classList.remove('hide-alert');
  }

  setTimeout(() => {
    err.classList.remove('show-alert');
    err.classList.add('hide-alert');
  }, 2500);
});
