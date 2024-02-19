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

// Function to change the font of the selected text box
function changeFont(fontName) {
    if (selectedTextBox) {
        selectedTextBox.style.fontFamily = fontName;
    }
}

// Font options
const fontOptions = [
    "Arial",
    "Verdana",
    "Helvetica",
    "Tahoma",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New",
    "Brush Script MT",
    "Comic Sans MS",
    "Impact",
    "Lucida Console",
    "Palatino Linotype",
    "Arial Black",
    "Book Antiqua",
    "Calibri",
    "Cambria",
    "Candara",
    "Century Gothic",
    "Consolas",
    "Constantia",
    "Corbel",
    "Franklin Gothic Medium",
    "Gabriola",
    "Segoe UI",
    "Trebuchet MS",
    "Verdana",
    "Impact",
    "Comic Sans MS",
    "Lucida Sans Unicode",
    "Palatino Linotype",
    "Tahoma",
    "Times New Roman",
    "Georgia",
    "Courier New",
    "Lucida Console",
    "Gill Sans",
    "Geneva",
    "Helvetica Neue",
    "Algerian"
];

// Dropdown menu for font selection
const fontDropdown = document.createElement("select");
fontDropdown.addEventListener("change", (event) => {
    changeFont(event.target.value);
    fontDropdown.selectedIndex = 0; // Reset dropdown to default option
});

// Default option
const defaultOption = document.createElement("option");
defaultOption.text = "Select Font";
fontDropdown.add(defaultOption);

// Add font options to dropdown
fontOptions.forEach((fontName) => {
    const option = document.createElement("option");
    option.text = fontName;
    option.value = fontName;
    fontDropdown.add(option);
});

// Hide the font dropdown initially
fontDropdown.style.display = "none";

// Add the dropdown to the options div
document.querySelector(".options").appendChild(fontDropdown);

// Function to handle font change when a text box is clicked
function handleTextBoxClick(event) {
    selectedTextBox = event.target;
}

// Event listener for text box clicks
document.querySelector(".preview-img").addEventListener("click", handleTextBoxClick);

// Show font dropdown when brightness button is clicked
document.getElementById("brightness").addEventListener("click", () => {
    fontDropdown.style.display = "block";
    cancelIcon.style.display = "block"; // Show the cancel icon
});

// Hide font dropdown when cross icon is clicked
const cancelIcon = document.createElement("i");
cancelIcon.classList.add("bx", "bx-x", "cancel");
cancelIcon.style.display = "none"; // Hide the cancel icon initially
document.querySelector(".options").appendChild(cancelIcon);

cancelIcon.addEventListener("click", () => {
    fontDropdown.style.display = "none";
    cancelIcon.style.display = "none"; // Hide the cancel icon
});

