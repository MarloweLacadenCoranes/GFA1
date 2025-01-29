var firstname = prompt("ENTER YOUR FIRST NAME:");
var surname = prompt("ENTER YOUR LAST NAME:");
var birthyear = prompt("ENTER YOUR BIRTH YEAR:");

var currentyear = new Date().getFullYear();
var age = currentyear - birthyear;

document.getElementById("output").innerHTML = "Hello " + firstname + " " + surname + "! How does it feel to be " + age + " years old?";