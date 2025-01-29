var shareInfo = confirm("Do you agree to share your personal information with our site?");

if (shareInfo) {
    console.log("Name: " + nickname + "\nHeight: " + heightInFeet + "'" + heightInRemainingInches + "\"\nWeight: " + weightInPounds.toFixed(3) + " lbs");
} else {
    console.log("User does NOT want to share their information.");
}