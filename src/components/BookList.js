import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

const BookList = ({ books, fetchAllBooks }) => {
    const bookshelves = [
        "currentlyReading",
        "wantToRead",
        "read",
        "none"
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
                            bookshelf !== "none"
                                ? <Bookshelf
                                    key={ bookshelf }
                                    shelf={ bookshelf }
                                    books={ filterBooksByShelf(books, bookshelf) }
                                    fetchAllBooks={ fetchAllBooks }
                                />
                                : null
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

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    fetchAllBooks: PropTypes.func.isRequired,
};

export default BookList;