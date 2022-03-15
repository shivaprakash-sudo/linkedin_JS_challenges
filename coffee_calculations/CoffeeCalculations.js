function getTotalBill(coffeeOrders, coffeePrice) {
    const price = coffeePrice;
    const totalOrders = coffeeOrders.reduce((prev, now) => prev + now);
    const totalBill = price * totalOrders;
    return `The total bill is ${totalBill}.`;
}

console.log(getTotalBill([2, 3, 1, 5], 1.25));