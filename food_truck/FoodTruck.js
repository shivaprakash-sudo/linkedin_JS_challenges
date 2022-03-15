onload = () => {
    const menu = document.querySelector("#combined-menu");

    const uniqueFoodItems = getUniqueItems(
        [
            ["Pizza", "Fish & chips", "Biryani"],
            ["Biryani", "Chicken curry", "Pizza"]
        ]
    );

    uniqueFoodItems.forEach(food => {
        const li = document.createElement("li");
        li.textContent = food;
        menu.append(li);
    });
}

function getUniqueItems(foodItems) {
    return [...new Set(foodItems.flat())];
}