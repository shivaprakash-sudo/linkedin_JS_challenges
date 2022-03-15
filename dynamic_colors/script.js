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
        return () => body.style.background = color;
    }

    const bgColorBlue = changeBodyColor("#00f");
    const bgColorPink = changeBodyColor("pink");
    const bgColorGreen = changeBodyColor("#0f0");

    blueBtn.addEventListener("click", bgColorBlue);

    pinkBtn.addEventListener("click", bgColorPink);

    greenBtn.addEventListener("click", bgColorGreen);
}

initializeButtons();