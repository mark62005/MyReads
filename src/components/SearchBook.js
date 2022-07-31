import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";

const SearchBook = ({ books }) => {
    const [ query, setQuery ] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredBooks =
        query === ""
            ? books
            : books.filter(book =>
                book.title.toLowerCase().includes(query.trim().toLowerCase())
            );

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={ query }
                        onChange={ handleInputChange }
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        filteredBooks && filteredBooks.length > 0
                            ? filteredBooks.map((book) => <Book key={ book.id } book={ book } />)
                            : null
                    }
                </ol>
            </div>
        </div>
    );
};

SearchBook.propTypes = {
    books: PropTypes.array.isRequired,
};

export default SearchBook;