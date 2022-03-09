import Book from '../available_books/Book.js';

class TechnicalBook extends Book {
    constructor(title, author, ISBN, availableCopies, edition) {
        super(title, author, ISBN, availableCopies);
        this.edition = edition;
    }

    getEdition() {
        return `The current version of the book is ${this.edition}`;
    }
}

export default TechnicalBook;