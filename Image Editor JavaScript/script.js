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
