const filterOptions = document.querySelectorAll(".filter button"),
    filterName = document.querySelector(".filter-info .name"),
    filterValue = document.querySelector(".filter-info .value"),
    filterSlider = document.querySelector(".slider input"),
    rotateOptions = document.querySelectorAll(".rotate button"),
    resetFilterBtn = document.querySelector(".reset-filter"),
    saveImgBtn = document.querySelector(".save-img");

let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
let rotate = 0, flipHorizontal = 1, flipVertical = 1;



document.querySelector("#saturation").addEventListener("click", () => {
    const text = prompt("Enter your text:");
    if (text) {
        const x = canvas.width / 2; // X-coordinate of the text
        const y = canvas.height / 2; // Y-coordinate of the text
        const fontSize = 24; // Font size of the text
        const fontFamily = "Arial"; // Font family of the text

        ctx.fillStyle = "#000"; // Color of the text
        ctx.font = `${fontSize}px ${fontFamily}`; // Font style
        ctx.textAlign = "center"; // Text alignment
        ctx.textBaseline = "middle"; // Vertical alignment
        ctx.fillText(text, x, y); // Draw the text on the canvas
    }
});

document.getElementById("add-text-btn").addEventListener("click", () => {
    const text = document.getElementById("text-input").value;
    if (text.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    const textElement = document.createElement("div");
    textElement.contentEditable = true;
    textElement.classList.add("editable-text");
    textElement.style.position = "absolute";
    textElement.style.left = "50px";
    textElement.style.top = "50px";
    textElement.style.border = "1px solid #000";
    textElement.style.padding = "5px";
    textElement.innerText = text;

    document.querySelector(".preview-img").appendChild(textElement);

    makeResizableAndDraggable(textElement);
});


function makeResizableAndDraggable(element) {
    let isResizing = false;
    let isDragging = false;
    let startX, startY, startWidth, startHeight, startLeft, startTop, startFontSize;

    element.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("editable-text")) {
            const rect = element.getBoundingClientRect();
            const isCorner = event.offsetX < 10 || event.offsetX > rect.width - 10 || event.offsetY < 10 || event.offsetY > rect.height - 10;
            if (isCorner) {
                isResizing = true;
                startWidth = element.offsetWidth;
                startHeight = element.offsetHeight;
                startX = event.clientX;
                startY = event.clientY;
                startFontSize = parseInt(window.getComputedStyle(element).fontSize);
            } else {
                isDragging = true;
                startLeft = element.offsetLeft;
                startTop = element.offsetTop;
                startX = event.clientX;
                startY = event.clientY;
            }
        }
    });

    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            const diffX = event.clientX - startX;
            const diffY = event.clientY - startY;
            element.style.left = startLeft + diffX + "px";
            element.style.top = startTop + diffY + "px";
        }

        if (isResizing) {
            const diffX = event.clientX - startX;
            const diffY = event.clientY - startY;
            const newWidth = startWidth + diffX;
            const newHeight = startHeight + diffY;

            if (newWidth > 0) {
                element.style.width = newWidth + "px";
                const newFontSize = startFontSize * (newWidth / startWidth);
                element.style.fontSize = newFontSize + "px";
            }

            if (newHeight > 0) {
                element.style.height = newHeight + "px";
            }
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        isResizing = false;
    });
}
