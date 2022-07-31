import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

const Book = ({ book, onChangeShelf }) => {
    const changeShelf = (event) => {
        // update book's shelf to api
        console.log(`Book: ${book.title}, current shelf: ${book.shelf}`);
        console.log(`New shelf: ${event.target.value}`);
    };

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={ {
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.thumbnail})`,
                        } }
                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={ changeShelf }>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">
                    {
                        book.authors.map((author, index) => {
                            return index === book.authors.length - 1
                                ? `${author}`
                                : `${author}, `
                        })
                    }
                </div>
            </div>
        </li>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
};

export default Book;