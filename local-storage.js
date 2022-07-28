/* const asigned to the element */
const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userMsg = document.getElementById('message');

changeHandler = () => {
  const userData = {
    name: userName.value,
    email: userEmail.value,
    msg: userMsg.value,
  };
  localStorage.setItem('userInfo', JSON.stringify(userData));
};

const user = JSON.parse(window.localStorage.getItem('userInfo'));

userName.value = user.name;
userEmail.value = user.email;
userMsg.value = user.msg;
