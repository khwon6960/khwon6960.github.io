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

const list = document.querySelector("#freq-list");

for (let i = 0; i < targets.length; i++) {
    const li = document.createElement("li");
    li.textContent = `'${targets[i]}': ${counts[i]}번`;
    list.appendChild(li);
}