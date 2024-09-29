// toggle classa active

const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger'). 
onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
}) 

const container = document.querySelector(".container");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  container.classList.add("active");
});

loginLink.addEventListener("click", () => {
  container.classList.remove("active");
});

function formValidation(e) {
  e.preventDefault();

  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confpass = document.getElementById("confpass");
  var check = document.getElementById("checkedd");

  if (username.value.length < 6) {
    alert("Username must be more than 6 characters!");
  } else if (!email.value.endsWith("@gmail.com")) {
    alert("Email must use an gmail account!");
  } else if (password.value.length == "") {
    alert("Password must be filled!");
  } else if (password.value != confpass.value) {
    alert("Confirm password must be the same as password!");
  } else if (!check.checked) {
    alert("Checkbox must be checked");
  } else {
    alert("Done");
  }
}

function formValidation1(e) {
  e.preventDefault();

  var email = document.getElementById("email1");
  var password = document.getElementById("password1");
  var check = document.getElementById("checkedd1");

  if (!email.value.endsWith("@gmail.com")) {
    alert("Email must use an gmail account!");
  } else if (password.value.length == "") {
    alert("Password must be filled!");
  } else if (!check.checked) {
    alert("Checkbox must be checked");
  } else {
    alert("Done");
  }
}