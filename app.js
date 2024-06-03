const characterList = "abcdeHIJKLMNfghijklqrstuvwxyzABCDE34567FGOPmnopQRSTU01289VWXYZ"

function generateCaptcha() {
    let captcha = "";
    const charListLength = characterList.length;

    for (let i = 0; i < 6; i++) {
        let charIndex = Math.floor(Math.random() * charListLength);
        captcha += characterList.charAt(charIndex);
    }

    return captcha;
}

const captchaBox = document.querySelector(".captcha-box");
const refreshButton = document.querySelector("#refresh");
const inputBox = document.querySelector("input");
const submitButton = document.querySelector("#submit");
const displayMessage = document.querySelector("p")

captchaBox.textContent = generateCaptcha();

refreshButton.addEventListener("click", () => {
    captchaBox.textContent = generateCaptcha();
    displayMessage.textContent = "";
})

submitButton.addEventListener("click", () => {
    let generatedCaptcha = captchaBox.textContent;
    let enteredCaptcha = inputBox.value;

    if (generatedCaptcha === enteredCaptcha) {
        displayMessage.style.color = "green";
        displayMessage.textContent = "Captcha entered matches!";
    } else {
        displayMessage.style.color = "red";
        displayMessage.textContent = "Please re-enter captcha!";
    }
})