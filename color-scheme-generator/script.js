let color_1 = document.getElementById("1");
let color_2 = document.getElementById("2");
let color_3 = document.getElementById("3");
let color_4 = document.getElementById("4");
let color_5 = document.getElementById("5");
let color_6 = document.getElementById("6");

let hex_color_1 = document.getElementById("hexColor1");
let hex_color_2 = document.getElementById("hexColor2");
let hex_color_3 = document.getElementById("hexColor3");
let hex_color_4 = document.getElementById("hexColor4");
let hex_color_5 = document.getElementById("hexColor5");
let hex_color_6 = document.getElementById("hexColor6");

let color_code = "000000"
let color_mode = "monochrome"
let colors_array = []

function gerColorValue() {
    color_code = document.getElementById("inputColor").value;
    color_code = color_code.replace("#", "");
    // console.log(color_code);
}

function getColorType() {
    color_mode = document.getElementById("selectScheme").value;
    // console.log(color_mode);
}

document.getElementById("get-scheme").addEventListener("click", () => {
    gerColorValue();
    getColorType();
    fetch(`https://www.thecolorapi.com/scheme?hex=${color_code}&format=json&mode=${color_mode}&count=6`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 6; i++) {
                // console.log(data.colors[i].hex.value)
                colors_array.push(data.colors[i].hex.value)
                if (colors_array.length > 0) {
                    color_1.style.backgroundColor = colors_array[0]
                    color_2.style.backgroundColor = colors_array[1]
                    color_3.style.backgroundColor = colors_array[2]
                    color_4.style.backgroundColor = colors_array[3]
                    color_5.style.backgroundColor = colors_array[4]
                    color_6.style.backgroundColor = colors_array[5]

                    hex_color_1.innerText = colors_array[0]
                    hex_color_2.innerText = colors_array[1]
                    hex_color_3.innerText = colors_array[2]
                    hex_color_4.innerText = colors_array[3]
                    hex_color_5.innerText = colors_array[4]
                    hex_color_6.innerText = colors_array[5]
                }
            }
            colors_array = []
        })
})

function copyToClipboard(colorValue) {
    const tempInput = document.createElement('textarea');
    tempInput.value = colorValue;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

hex_color_1.addEventListener("click", () => {
    copyToClipboard(hex_color_1.innerText);
})

hex_color_2.addEventListener("click", () => {
    copyToClipboard(hex_color_2.innerText);
})

hex_color_3.addEventListener("click", () => {
    copyToClipboard(hex_color_3.innerText);
})

hex_color_4.addEventListener("click", () => {
    copyToClipboard(hex_color_4.innerText);
})

hex_color_5.addEventListener("click", () => {
    copyToClipboard(hex_color_5.innerText);
})

hex_color_6.addEventListener("click", () => {
    copyToClipboard(hex_color_6.innerText);
})
