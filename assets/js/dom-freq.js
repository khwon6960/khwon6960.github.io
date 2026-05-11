// assets/js/dom-freq.js
function countChar(text, target) {
    let count = 0;
    for (const ch of text) {
        if (ch === target) count++;
    }
    return count;
}

const text = document.querySelector("#text-body").textContent;
const targets = ["이", "의", "날", "개", "소"];

const counts = targets.map(t => countChar(text, t));
console.log(counts); // 임시 확인: [2, 1, 1, 1, 1]