const userName = document.getElementById("username");
const userEmail = document.getElementById("email");
const userMsg = document.getElementById("message");

/* console.log(userName,userMsg,userEmail); */
function changeHandler(){
const userData = {
  name : userName.value,
  email : userEmail.value,
  msg : userMsg.value,
};

/* console.log(userData.email); */
const obj={
  name : "microverse",
};

localStorage.setItem("userInfo", JSON.stringify(userData));
const user = JSON.parse(window.localStorage.getItem("userInfo"));
/* console.log(user); */
userName.value = user.name;
userEmail.value = user.email;
userMsg.value = user.msg; 
 }

