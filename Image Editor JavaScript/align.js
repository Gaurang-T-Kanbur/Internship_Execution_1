document.getElementById("left").addEventListener("click", () => {
    const selectedText = document.querySelector(".editable-text.selected");
    if (selectedText) {
        selectedText.style.textAlign = "left";
    }
});

document.getElementById("right").addEventListener("click", () => {
    const selectedText = document.querySelector(".editable-text.selected");
    if (selectedText) {
        selectedText.style.textAlign = "right";
    }
});

document.getElementById("horizontal").addEventListener("click", () => {
    const selectedText = document.querySelector(".editable-text.selected");
    if (selectedText) {
        selectedText.style.textAlign = "center";
    }
});

document.getElementById("vertical").addEventListener("click", () => {
    const selectedText = document.querySelector(".editable-text.selected");
    if (selectedText) {
        selectedText.style.textAlign = "justify";
    }
});
