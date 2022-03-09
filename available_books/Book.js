class Book {
    constructor(title, author, ISBN, availableCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.availableCopies = availableCopies;
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        const books = this.availableCopies;
        if (books === 0) {
            return "out of stock";
        } else if (books < 10) {
            return "low stock";
        } else {
            return "in stock";
        }
    }

    sell(numOfCopiesSold = 1) {
        if (numOfCopiesSold > this.availableCopies) {
            return "Sold copies cannot be more than the stock!";
        }
        if (numOfCopiesSold < 0) {
            return "Sold copies can't be negative!";
        }
        this.availableCopies -= numOfCopiesSold;
    }

    restock(numOfCopies = 5) {
        this.availableCopies += numOfCopies;
    }
}

export default Book;