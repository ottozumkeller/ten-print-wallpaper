
let lines = 19;
document.querySelector("body").style.font = `bold ${97.5 / lines}vh / ${100 / lines}vh 'Cascadia Mono'`;

let columns = Math.round(document.querySelector("body").clientWidth / document.querySelector("main").clientWidth);
let chars = columns * lines;
let logo = "10 PRINT";
let content = "";

let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

document.querySelector("main").style.width = "100vw";

for (let i = 0; i < chars; i++) {
    content += String.fromCharCode(9585 + random(0, 1));
}

let animation = window.setInterval(function() {
    if (!random(0, 1000)) {
        let replacement = String.fromCodePoint(9585 + random(0, 1));
        let victim = random(0, 1) ? "1" : "I";
        document.querySelector("p").textContent = logo.replace(victim, replacement);
    } else {
        if (document.querySelector("p").textContent != logo) {
            document.querySelector("p").textContent = logo;
        }
    }
    for (let i = 0; i < chars; i++) {
        if (!random(0, 10)) {
            let replacement = String.fromCodePoint(9585 + random(0, 1));
            if (replacement != content[i]) {
                document.querySelector("main").textContent = content = content.replace(RegExp(`(?<=^.{${i}}).`), replacement);
            }
        }
    }
}, 500);