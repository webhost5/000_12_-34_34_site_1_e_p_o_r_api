document.body.innerHTML = "<h1>Access Denied</h1>";


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


    document.head.innerHTML += `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"></script>
    <link rel="stylesheet" href="./style.css">
`;


document.body.innerHTML += `
 <a href="https://github.com/webhost5/000_12_-34_34_site_1_e_p_o_r_api/edits/main/btg/data.js" target="_blank">add
        video?</a>

    <div class="container py-5">
        <div class="row" id="competence-container"></div>

        <!-- Video Section -->
        <div class="video-container" id="video-container">
            <img src="../assets/img/close.svg" id="close" onclick="close_video()" />
            <video id="video-player" controls></video>
        </div>
    </div>
`;

    document.title = "Google";



} else {
    document.body.innerHTML = "<h1>Access Denied</h1>"; // Optionally replace body content with a message
}


