const colorParts = "0123456789ABCDEF";
const backgroundColor = document.querySelector(".colorSection");
const textColor = document.querySelector(".titleText");

const generateColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += colorParts[Math.floor(Math.random() * colorParts.length)];
    }
    return color;
};

console.log(generateColor());

const setBackgroundColor = (color) => {backgroundColor.style.background = color};

const setTextColor = (color) => {textColor.style.color = color};

setInterval( () => {
    setBackgroundColor(generateColor());
    setTextColor(generateColor());
}, 1500);