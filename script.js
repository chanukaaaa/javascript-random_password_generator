const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+=|\}]{[?<>"

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
} 

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");

    // Display the styled alert
    const alertBox = document.createElement("div");
    alertBox.className = "alert";
    alertBox.innerText = "Password copied!";
    document.body.appendChild(alertBox);

    // Set a timeout to remove the alert after 2 seconds
    setTimeout(function() {
        alertBox.classList.remove("show");
        // Remove the alert from the DOM after the transition completes
        setTimeout(function() {
            document.body.removeChild(alertBox);
        }, 500);
    }, 2000);

    // Trigger a reflow to enable the transition
    alertBox.offsetHeight;

    // Add the "show" class to apply the transition
    alertBox.classList.add("show");
}
