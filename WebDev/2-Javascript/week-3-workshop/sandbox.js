class Book {
    constructor(title, author, year, isRead = false) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isRead = isRead;
    }
}

class Audiobook extends Book {
    constructor(title, author, year, format = 'CD', isListenedTo = false) {
        super(title, author, year);
        this.format = format;
        this.isListenedTo = isListenedTo;
    }
    playAudio() {
        console.log(`The audio recording of ${this.title} begins to play.`)
    }
}

const book1 = new Book('Steppenwolf', 'Herman Hesse', 1927, true);
// console.log(book1);

const book3 = new Book('The Great Booking', 'Booky McBookins');
// console.log(book3);

const book4 = new Audiobook('The Martian Chronicles', 'Ray Bradbury', 1950, 'cassette');
console.log(book4.playAudio());
console.log(book4);