const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const color = e.target.id;
        if (button.id === "yellow") {
            body.style.backgroundColor = color
        }
        if (button.id === "red") {
            body.style.backgroundColor = color
        }
        if (button.id === "grey") {
            body.style.backgroundColor = color
        }
        if (button.id === "white") {
            body.style.backgroundColor = color
        }
        if (button.id === "purple") {
            body.style.backgroundColor = color
        }
    })
})