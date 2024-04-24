let firstWord = null;
let isStart = true;
const textArea = document.getElementById("textarea");
const clearBtn = document.querySelector("#clear");

// FIXED:
// Added clear button
// Append text to textarea instead of replacing fully
// Change tweet button post value on input (which tracks the value of an input field no matter if you're typing or speaking with a software) so she can still type things
// However, she still can also directly copy, paste and tweet without editing if she wants
// Shows the words you're selecting
// Gives feedback as to where in the process you're at by changing button text

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
                firstWord.classList.add("selected");
            } else {
                firstWord.classList.remove("selected");
                // Is not start, meaning this is the second click
                const lastWord = event.target;

                const wordsSelection = window.getSelection();
                const range = document.createRange();

                range.setStart(firstWord, 0);
                range.setEnd(lastWord, 1);

                wordsSelection.removeAllRanges();
                wordsSelection.addRange(range);

                firstWord = null;
                isStart = true;
            }
        });
    });
}

document
    .querySelectorAll("p, h1, h2, h3, h4, h5, h6, span")
    .forEach((element) => {
        enlargeTextOnHover(element);
    });

/**============================================
 *                BTN FUNCTIONS
 *=============================================**/
// Copy text to clipboard
async function copyText() {
    const selectedText = window.getSelection().toString();

    try {
        // Clipboard API
        if (selectedText) {
            await navigator.clipboard.writeText(selectedText);
            const clipboardText = await navigator.clipboard.readText();
            const twitterShareBtn = document.querySelector(
                ".twitter-share-button"
            );
            twitterShareBtn.setAttribute(
                "href",
                `https://twitter.com/intent/tweet?text=${clipboardText}`
            );

            document.getElementById(
                "kopieeren"
            ).innerHTML = `Gekopieërd! <i class="fa-solid fa-copy"></i>`;
            document.getElementById(
                "plak"
            ).innerHTML = `Plakken <i class="fa-solid fa-paste"></i>`;
            clearBtn.innerHTML = `Wissen <i class="fa-solid fa-trash"></i>`;
            document.querySelector(
                "#copy-all"
            ).innerHTML = `Alles kopieëren <i class="fa-solid fa-copy"></i>`;
            return selectedText;
        } else {
            console.log("No text selected to copy!");
            return null;
        }
    } catch (err) {
        console.error("Failed to copy text: ", err);
        return null;
    }
}

// Copy ALL text to clipboard
async function copyAllText() {
    const selectedText = textArea.value;

    try {
        // Clipboard API
        if (selectedText) {
            await navigator.clipboard.writeText(selectedText);
            document.querySelector(
                "#copy-all"
            ).innerHTML = `Alles gekopieërd! <i class="fa-solid fa-copy"></i>`;
            document.getElementById(
                "plak"
            ).innerHTML = `Plakken <i class="fa-solid fa-paste"></i>`;
            clearBtn.innerHTML = `Wissen <i class="fa-solid fa-trash"></i>`;
            document.getElementById(
                "kopieeren"
            ).innerHTML = `Kopieëren <i class="fa-solid fa-copy"></i>`;
            return selectedText;
        } else {
            console.log("No text selected to copy!");
            return null;
        }
    } catch (err) {
        console.error("Failed to copy text: ", err);
        return null;
    }
}

// Paste text to textarea
async function updateTextArea() {
    try {
        const clipboardText = await navigator.clipboard.readText();
        const currentText = textArea.value;
        const newText = currentText + "\n" + clipboardText;
        textArea.value = newText;
        document.getElementById(
            "kopieeren"
        ).innerHTML = `Kopieëren <i class="fa-solid fa-copy"></i>`;
        document.getElementById(
            "plak"
        ).innerHTML = `Geplakt! <i class="fa-solid fa-paste"></i>`;
        clearBtn.innerHTML = `Wissen <i class="fa-solid fa-trash"></i>`;
        document.querySelector(
            "#copy-all"
        ).innerHTML = `Alles kopieëren <i class="fa-solid fa-copy"></i>`;
    } catch (err) {
        console.error("Failed to read clipboard text: ", err);
    }
}

// Clear textarea
function clearTextArea() {
    textArea.value = "";
    clearBtn.innerHTML = `Gewist! <i class="fa-solid fa-trash"></i>`;
    document.getElementById(
        "plak"
    ).innerHTML = `Plakken <i class="fa-solid fa-paste"></i>`;
    document.querySelector(
        "#copy-all"
    ).innerHTML = `Alles kopieëren <i class="fa-solid fa-copy"></i>`;
    document.getElementById(
        "kopieeren"
    ).innerHTML = `Kopieëren <i class="fa-solid fa-copy"></i>`;
}

// Tweet and Whatsapp share functionality
textArea.addEventListener("input", () => {
    const twitterShareBtn = document.querySelector(".twitter-share-button");
    twitterShareBtn.setAttribute(
        "href",
        `https://twitter.com/intent/tweet?text=${textArea.value}`
    );

    const whatsappShareBtn = document.querySelector("#whatsapp");
    whatsappShareBtn.setAttribute(
        "href",
        `whatsapp://send?text=${textArea.value}`
    );
});

// Web Share API
if (navigator.share) {
    let shareBtn = document.createElement("button");
    shareBtn.id = "webshare-btn";
    shareBtn.textContent = "Delen";
    let btnContainer = document.getElementById("document");
    btnContainer.appendChild(shareBtn);

    shareBtn.addEventListener("click", async () => {
        const textArea = document.getElementById("textarea");
        const shareData = {
            text: textArea.value,
        };

        try {
            await navigator.share(shareData);
        } catch (err) {
            console.log(err);
        }
    });
}

// Scroll within textarea
function scrollDown() {
    textArea.scrollBy(0, 200);
}

function scrollUp() {
    textArea.scrollBy(0, -200);
}
