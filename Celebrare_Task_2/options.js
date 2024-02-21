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
        
        const fontColor = colorPicker.value;
        
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


function changeFont(fontName) {
    if (selectedTextBox) {
        selectedTextBox.style.fontFamily = fontName;
    }
}


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


const fontDropdown = document.createElement("select");
fontDropdown.addEventListener("change", (event) => {
    changeFont(event.target.value);
    fontDropdown.selectedIndex = 0;
});


const defaultOption = document.createElement("option");
defaultOption.text = "Select Font";
fontDropdown.add(defaultOption);


fontOptions.forEach((fontName) => {
    const option = document.createElement("option");
    option.text = fontName;
    option.value = fontName;
    fontDropdown.add(option);
});


fontDropdown.style.display = "none";


document.querySelector(".options").appendChild(fontDropdown);


function handleTextBoxClick(event) {
    selectedTextBox = event.target;
}


document.querySelector(".preview-img").addEventListener("click", handleTextBoxClick);


document.getElementById("brightness").addEventListener("click", () => {
    const textElement = document.querySelector(".editable-text");
    if (!textElement) {
        alert("Please add text before changing the font color.");
        return;
    }
    fontDropdown.style.display = "block";
    cancelIcon.style.display = "block"; 
});


const cancelIcon = document.createElement("i");
cancelIcon.classList.add("bx", "bx-x", "cancel");
cancelIcon.style.display = "none"; 
document.querySelector(".options").appendChild(cancelIcon);

cancelIcon.addEventListener("click", () => {
    fontDropdown.style.display = "none";
    cancelIcon.style.display = "none"; 
});




function changeFontSize(fontSize) {
    if (selectedTextBox) {
        selectedTextBox.style.fontSize = fontSize + "px";
    }
}


const fontSizeOptions = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40, 48, 56, 64, 72, 81, 90, 99, 108, 117, 126, 135, 144, 153, 162, 171, 180, 189, 198,207, 360];

const fontSizeDropdown = document.createElement("select");
fontSizeDropdown.addEventListener("change", (event) => {
    changeFontSize(event.target.value);
});


fontSizeOptions.forEach((fontSize) => {
    const option = document.createElement("option");
    option.text = fontSize;
    option.value = fontSize;
    fontSizeDropdown.add(option);
});


fontSizeDropdown.style.display = "none";


document.querySelector(".options").appendChild(fontSizeDropdown);

function handleTextBoxClick(event) {
    selectedTextBox = event.target;
}


document.querySelector(".preview-img").addEventListener("click", handleTextBoxClick);


document.getElementById("inversion").addEventListener("click", () => {
    const textElement = document.querySelector(".editable-text");
    if (!textElement) {
        alert("Please add text before changing the font size.");
        return;
    }
    fontSizeDropdown.style.display = "block";
    fontSizeCancelIcon.style.display = "block";
});


const fontSizeCancelIcon = document.createElement("i");
fontSizeCancelIcon.classList.add("bx", "bx-x", "cancel");
fontSizeCancelIcon.style.display = "none"; 
document.querySelector(".options").appendChild(fontSizeCancelIcon);

fontSizeCancelIcon.addEventListener("click", () => {
    fontSizeDropdown.style.display = "none";
    fontSizeCancelIcon.style.display = "none"; 


});