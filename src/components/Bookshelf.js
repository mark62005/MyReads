import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ shelf, books, fetchAllBooks }) => {
    const displayShelfTitle = (shelf) => {
        switch (shelf) {
            case "currentlyReading":
                return "Currently Reading";
            case "wantToRead":
                return "Want To Read";
            case "read":
                return "Read";
            default:
                break;
        };
    };

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                { displayShelfTitle(shelf) }
            </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((book) => (
                            <Book
                                key={ book.id }
                                book={ book }
                                fetchAllBooks={ fetchAllBooks }
                            />
                        ))
                    }
                </ol>
            </div>
        </div>
    );
};

Bookshelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    fetchAllBooks: PropTypes.func.isRequired,
};

export default Bookshelf;