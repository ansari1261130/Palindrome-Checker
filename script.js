let checkBtn = document.querySelector("#checkBtn");
let numInput = document.querySelector("#numInput");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#resetBtn");

function isPalindrome() {
    let num = parseInt(numInput.value); 
    let cpyNum = num;
    let rev = 0;

    while (num !== 0) {
        let d = num % 10;
        rev = rev * 10 + d;
        num = Math.floor(num / 10);
    }

    return rev === cpyNum;
};



checkBtn.addEventListener("click", () => {
    let checkPalin = isPalindrome();
    if (checkPalin) {
        msg.style.backgroundColor = "green";
        msg.innerText = "Palindrome Number";
    } else {
        msg.style.backgroundColor = "red";
        msg.innerText = "Not a Palindrome Number";
    }
});


function reset() {
    numInput.value = "";
    msg.style.backgroundColor = "#1f2937";
    msg.innerText = "Message will display here!";
}

resetBtn.addEventListener("click", reset);