const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian: true
    },
    {
        name: "Spaghetti & Meatballs",
        vegetarian: false
    },
    {
        name: "Potato curry",
        vegetarian: true
    },
    {
        name: "Chicken Biryani",
        vegetarian: false
    }
];

function getVegItems(vegItems) {
    return vegItems.filter(item => item.vegetarian !== false);
}

console.table(getVegItems(dishes));