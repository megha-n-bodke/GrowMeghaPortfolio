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

console.log(userData.email);
const obj={
  name : "microverse",
};
/* localStorage.setItem("userInfo", JSON.stringify(obj));
 */localStorage.setItem("userInfo", JSON.stringify(userData));

/* converting userInfo data in object form */
document.getElementById("contact-form").onload = function() {myFunction()};
function myFunction(){
const user = JSON.parse(window.localStorage.getItem("userInfo"));
console.log(user);
userName.value = userInfo.name;
userEmail.value = userInfo.email;
userMsg.value = userInfo.msg;
}
}
