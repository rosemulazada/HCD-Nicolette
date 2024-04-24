let firstWord = null;
let isStart = true;

// TODO: FEAT - Show the range of words copied.
// TODO: FIX - Allow the copy/paste to also work on non-paragraphs.

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

                // Toggle class directly if clicked on the same word
                if (event.target === firstWord) {
                    event.target.classList.toggle("grow");
                }

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

// Copy text to clipboard
async function copyText() {
    const selectedText = window.getSelection().toString();

    try {
        // Clipboard API
        if (selectedText) {
            await navigator.clipboard.writeText(selectedText);
            const clipboardText = await navigator.clipboard.readText();
            console.log("Text copied!: ", selectedText);
            const twitterShareBtn = document.querySelector(
                ".twitter-share-button"
            );
            console.log(twitterShareBtn);
            twitterShareBtn.setAttribute(
                "href",
                `https://twitter.com/intent/tweet?text=${clipboardText}`
            );
            return selectedText;
        } else {
            console.log("No text selected to copy!");
            return null; // Return null if no text is selected
        }
    } catch (err) {
        console.error("Failed to copy text: ", err);
        return null; // Return null in case of error
    }
}

const textArea = document.getElementById("textarea");
let clipboardText;
// Paste text into text area
async function updateTextArea() {
    try {
        const clipboardText = await navigator.clipboard.readText();
        textArea.textContent = clipboardText;
        textArea.style.paddingTop = "1em";
        textArea.style.paddingLeft = "1em";
        // tweet functionality
    } catch (err) {
        console.error("Failed to read clipboard text: ", err);
    }
}

// Copy btn
document.getElementById("kopieeren").addEventListener("click", function () {
    copyText();
});

// Paste btn
document.getElementById("plak").addEventListener("click", function (event) {
    updateTextArea();
});

function scrollDown() {
    window.scrollBy(0, 200); // Adjust the value (200) to change the scroll amount
}

function scrollUp() {
    window.scrollBy(0, -200); // Adjust the value (200) to change the scroll amount
}
