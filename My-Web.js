let emailclassIb = document.getElementById("emailclass-ib");
let passwordclassIb = document.getElementById(" passwordclass-ib");
const loginIb = document.getElementById("login-button")

const email = "abrahamnetsec@gmail.com";
const password = "EL-fuego4@7"
let isIbra = false;
let credentials = document.getElementById("credentials")
const togglebar=document.getElementsByClassName("toggle-bar")[0]
const navbarlinks=document.getElementsByClassName("navbar-links")[0]
let nameIb = document.getElementById("name-ib")

loginIb.addEventListener('click',()=>{
	 if(document.form1.email.value == email && document.form1.password.value == password){
	isIbra = true;
	window.location.replace('index.html');
	 }
	  if(document.form1.email.value != email || document.form1.password.value != password){
	 credentials.textContent = "Invalid credentials"
	 }
	 if(document.form1.email.value == "" || document.form1.password.value == ""){
	 credentials.textContent = "Fill all the fields"
	 }
})
togglebar.addEventListener('click',() =>{
    navbarlinks.classList.toggle('active')
})