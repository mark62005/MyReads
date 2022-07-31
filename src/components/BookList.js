import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const BookList = () => {
    const bookshelves = [
        "currentlyReading",
        "wantToRead",
        "read",
        "none"
    ];

    const books = [
        {
            id: "sJf1vQAACAAJ",
            title: "The Cuckoo's Calling",
            authors: [
                "Robert Galbraith"
            ],
            imageLinks: {
                "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            shelf: "currentlyReading"
        },
        {
            id: "nggnmAEACAAJ",
            title: "The Linux Command Line",
            authors: [
                "William E. Shotts, Jr."
            ],
            imageLinks: {
                "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            shelf: "wantToRead"
        },
        {
            id: "jAUODAAAQBAJ",
            title: "Needful Things",
            authors: [
                "Stephen King"
            ],
            imageLinks: {
                "smallThumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            shelf: "read"
        }
    ];

    const filterBooksByShelf = (books, shelf) => books.filter((book) => book.shelf === shelf);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        bookshelves.map((bookshelf) => (
                            bookshelf !== "none" ? <Bookshelf key={ bookshelf } shelf={ bookshelf } books={ filterBooksByShelf(books, bookshelf) } /> : null
                        ))
                    }
                </div>
            </div>
            <div className="open-search">
                <Link to="/search"></Link>
            </div>
        </div>
    );
};

export default BookList;