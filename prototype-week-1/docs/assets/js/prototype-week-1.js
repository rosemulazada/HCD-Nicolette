let firstWord = null;
let isStart = true;

function enlargeTextOnHover(element) {
    const words = element.textContent.trim().split(/\s+/);
    element.innerHTML = words
        .map((word) => `<span aria-hidden="true">${word}</span>`)
        .join(" ");
    element.querySelectorAll("span").forEach((word) => {
        word.addEventListener("mouseover", function () {
            this.classList.add("grow");
            this.style.transition = "ease 1s";
        });
        word.addEventListener("mouseout", function () {
            this.classList.remove("grow");
            this.style.transition = "ease 1s";
        });
        word.addEventListener("click", (event) => {
            if (isStart) {
                firstWord = event.target;
                isStart = false;
            } else {
                // Is not start, meaning this is the second click
                const lastWord = event.target.nextElementSibling;

                const wordsSelection = window.getSelection();
                const range = document.createRange();

                range.setStart(firstWord, 0);
                range.setEnd(lastWord, 0);

                wordsSelection.removeAllRanges();
                wordsSelection.addRange(range);

                firstWord = null;
                isStart = true; // Reset toggle variable
            }
        });
    });
}

document
    .querySelectorAll("p, h1, h2, h3, h4, h5, h6, span")
    .forEach((element) => {
        enlargeTextOnHover(element);
    });

document.getElementById("plak").addEventListener("click", function (event) {
    copyText();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'k') {
        copyText();
    }
})

document.getElementById("plak").addEventListener("click", function (event) {
    pasteText();
});

async function copyText() {
    try {
        const selectedText = window.getSelection().toString();

        // Clipboard API
        if (selectedText) {
            await navigator.clipboard.writeText(selectedText);
            console.log("Text copied!");
        } else {
            console.log("No text selected to copy!");
        }
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
    return navigator.clipboard.writeText(selectedText);
}

const textArea = document.getElementById("textarea");
async function pasteText() {
    Promise.all(copyText(), console.log(copyText()));
    textArea.innerHTML = "Your copied text here";
    textArea.style.paddingTop = "1em";
    textArea.style.paddingLeft = "1em";
}
