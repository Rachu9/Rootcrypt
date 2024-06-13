
const chars = " " + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" + "0123456789" + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charsArray = chars.split('');
let keyArray = charsArray.slice();
shuffleArray(keyArray);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function encryptMessage() {
    const plainText = document.getElementById('plain-text').value;
    let cipherText = '';
    for (let char of plainText) {
        const index = charsArray.indexOf(char);
        cipherText += keyArray[index];
    }
    document.getElementById('encrypted-message').innerText = cipherText;
}

function decryptMessage() {
    const cipherText = document.getElementById('cipher-text').value;
    let plainText = '';
    for (let char of cipherText) {
        const index = keyArray.indexOf(char);
        plainText += charsArray[index];
    }
    document.getElementById('decrypted-message').innerText = plainText;
}