var nickname = prompt("Enter your nickname:");
var heightInInches = parseFloat(prompt("Enter your height in inches:"));
var weightInKg = parseFloat(prompt("Enter your weight in kilograms:"));

var heightInFeet = Math.floor(heightInInches / 12);
var heightInRemainingInches = heightInInches % 12;

var weightInPounds = weightInKg * 2.20462;

alert("Name: " + nickname + "\nHeight: " + heightInFeet + "'" + heightInRemainingInches + "\"\nWeight: " + weightInPounds.toFixed(3) + " lbs");
