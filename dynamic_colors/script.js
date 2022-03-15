function initializeButtons() {
    const body = document.body;
    const createButton = (backgroundColor, name, textColor) => {
        const btn = document.createElement("button");
        btn.style.backgroundColor = backgroundColor;
        btn.style.color = textColor;
        btn.textContent = name;
        return btn;
    }

    const blueBtn = createButton("#00f", "Blue", "fff");
    const pinkBtn = createButton("pink", "Pink", "000");
    const greenBtn = createButton("#0f0", "Green");

    body.append(blueBtn, pinkBtn, greenBtn);

    function changeBodyColor(color) {
        body.style.background = color;
    }

    blueBtn.addEventListener("click", (e) => changeBodyColor("#00f"));

    pinkBtn.addEventListener("click", (e) => changeBodyColor("pink"));

    greenBtn.addEventListener("click", (e) => changeBodyColor("#0f0"));
}

initializeButtons();