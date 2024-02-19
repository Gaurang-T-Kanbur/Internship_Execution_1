document.getElementById("saturation").addEventListener("click", () => {
    const textElement = document.querySelector(".editable-text");
    if (!textElement) {
        alert("Please add text before changing the font color.");
        return;
    }
    const colorPickerContainer = document.createElement("div");
    colorPickerContainer.classList.add("color-picker-container");

    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.classList.add("color-picker");

    const cancelButton = document.createElement("i");
    cancelButton.classList.add("fas", "fa-times", "cancel-button");
    cancelButton.addEventListener("click", () => {
        colorPickerContainer.remove();
    });

    colorPickerContainer.appendChild(colorPicker);
    colorPickerContainer.appendChild(cancelButton);

    document.querySelector(".options").appendChild(colorPickerContainer);

    colorPicker.addEventListener("input", () => {
        // Change font color here
        const fontColor = colorPicker.value;
        // Apply font color to text
        document.querySelectorAll(".editable-text").forEach((textElement) => {
            textElement.style.color = fontColor;
        });
    });
});


document.getElementById("grayscale").addEventListener("click", () => {
    const colorPickerContainer = document.createElement("div");
    colorPickerContainer.classList.add("color-picker-container");

    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.classList.add("color-picker");

    const cancelIcon = document.createElement("i");
    cancelIcon.classList.add("fas", "fa-times", "cancel-icon");
    cancelIcon.addEventListener("click", () => {
        colorPickerContainer.remove();
    });

    colorPickerContainer.appendChild(colorPicker);
    colorPickerContainer.appendChild(cancelIcon);
    document.querySelector(".options").appendChild(colorPickerContainer);

    colorPicker.addEventListener("input", () => {
        document.querySelector(".container").style.backgroundColor = colorPicker.value;
    });
});
