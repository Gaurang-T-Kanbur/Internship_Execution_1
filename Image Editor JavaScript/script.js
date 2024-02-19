function makeResizableAndDraggable(element) {
    let isResizing = false;
    let isDragging = false;
    let startX, startY, startWidth, startHeight, startLeft, startTop, startFontSize;
    let containerRect = document.querySelector(".container").getBoundingClientRect();

    element.style.border = "none"; // Initially hide the border

    element.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("editable-text")) {
            element.style.border = "1px dotted #000"; // Show the border on interaction
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
            const newLeft = Math.min(Math.max(startLeft + diffX, containerRect.left), containerRect.right - element.offsetWidth);
            const newTop = Math.min(Math.max(startTop + diffY, containerRect.top), containerRect.bottom - element.offsetHeight);
            element.style.left = newLeft + "px";
            element.style.top = newTop + "px";
        }

        if (isResizing) {
            const diffX = event.clientX - startX;
            const diffY = event.clientY - startY;
            const newWidth = Math.min(Math.max(startWidth + diffX, 10), containerRect.right - element.offsetLeft);
            const newHeight = Math.min(Math.max(startHeight + diffY, 10), containerRect.bottom - element.offsetTop);

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
        element.style.border = "none"; // Hide the border when interaction ends
    });

    // Create a cross icon button
    const crossIcon = document.createElement("i");
    crossIcon.classList.add("fas", "fa-times", "cross-icon");
    crossIcon.style.position = "absolute";
    crossIcon.style.top = "-20px"; // Position the cross icon above the text box
    crossIcon.style.right = "0"; // Position the cross icon at the right corner of the text box
    crossIcon.style.display = "none"; // Initially hide the cross icon
    element.appendChild(crossIcon);

    // Show the cross icon button when the text box is clicked
    element.addEventListener("click", () => {
        crossIcon.style.display = "block";
    });

    // Hide the cross icon button when the text box loses focus
    element.addEventListener("blur", () => {
        crossIcon.style.display = "none";
    });

    // Remove the text box when the cross icon button is clicked
    crossIcon.addEventListener("click", () => {
        element.remove();
    });
}


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
