document.body.innerHTML = "<h1>Access Denied</h1>";
document.head.innerHTML = ""; // Clear the head


const expectedHash = "40db72e0f89a7b97417de617ec0ed5209f8d20f5";

// Prompt user for password
const userInput = prompt("Enter your password:");

// Hash the user input using SHA1
const hashedInput = CryptoJS.SHA1(userInput).toString(CryptoJS.enc.Hex);

// Compare hashed values
if (hashedInput === expectedHash) {

    document.body.style.display = "block";
    const scriptElement = document.createElement('script');
    scriptElement.src = './index.js';
    document.body.appendChild(scriptElement);


} else {
    document.body.innerHTML = "<h1>Access Denied</h1>"; // Optionally replace body content with a message
}