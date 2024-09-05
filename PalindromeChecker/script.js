const mainBlock = document.getElementById("main-block");
const checkBtn = document.getElementById("check-btn");
const isPalindromeDiv = document.getElementById("is-palindrome-div")

const isPalindrome = () => {
    const phrase = document.getElementById("text-input").value.trim();

    if (phrase === "") {
        alert("Please input a value");
        return null;
    }

    let cleanPhrase = phrase.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let invertedPhrase = cleanPhrase.split('').reverse().join('');

    return cleanPhrase === invertedPhrase 
        ? `<strong>${phrase}</strong> is a palindrome.` 
        : `<strong>${phrase}</strong> is not a palindrome.`;

};

const showResult = () => {
    mainBlock.style.height = "10rem";
    isPalindromeDiv.style.display = "block";

    document.getElementById("result").innerHTML = isPalindrome();
};

checkBtn.addEventListener("click", showResult);
