import { Link } from "react-router-dom";
import { update } from "../BooksAPI";
import PropTypes from "prop-types";

const Book = ({ book, fetchAllBooks, isSearchResult, shelfFromMainPage }) => {
    const renderCover = () => {
        return (
            <Link
                className="book-cover"
                style={ {
                    width: 128,
                    height: 193,
                    backgroundImage:
                        book.imageLinks && book.imageLinks.thumbnail
                            ? `url(${book.imageLinks.thumbnail})`
                            : null,
                } }
                to={ `/books/${book.id}` }
            ></Link>
        );
    };

    const renderAuthors = () => {
        return book.authors && book.authors.length > 0
            ? getAuthorsString()
            : "";
    };

    const getAuthorsString = () => {
        let str = "";

        book.authors.forEach((author, index) => {
            if (index === book.authors.length - 1) {
                str += author;
            }
            else {
                str += `${author}, `;
            }
        });
        return str;
    };

    const changeShelf = async (event) => {
        event.preventDefault();
        await update(book, event.target.value);

        fetchAllBooks();

    };

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    { renderCover() }
                    <div className="book-shelf-changer">
                        <select
                            onChange={ changeShelf }
                            value={
                                book.shelf
                                    ? book.shelf
                                    : shelfFromMainPage
                                        ? shelfFromMainPage
                                        : "none"
                            }
                        >
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            {
                                isSearchResult === true
                                    ? null
                                    : <option value="none">None</option>
                            }
                        </select>
                    </div>
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">
                    { renderAuthors() }
                </div>
            </div>
        </li>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    fetchAllBooks: PropTypes.func.isRequired,
    isSearchResult: PropTypes.bool,
    shelfFromMainPage: PropTypes.string,
};

export default Book;