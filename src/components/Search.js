import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "../utils/BooksAPI";
import PropTypes from "prop-types";
import SearchResults from "./SearchResults";

const Search = ({ books, fetchAllBooks }) => {
    const [ query, setQuery ] = useState("");
    const [ matchedBooks, setMatchedBooks ] = useState([]);

    useEffect(() => {
        if (query !== "") {
            search(query)
                .then(res => {
                    res.error ? setMatchedBooks([]) : setMatchedBooks(res);
                })
                .catch(console.log);
        } else {
            setMatchedBooks([]);
        }
    }, [ query ]);

    const handleInputChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
    };

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
            <SearchResults
                matchedBooks={ matchedBooks }
                fetchAllBooks={ fetchAllBooks }
                booksFromMainPage={ books }
            />
        </div>
    );
};

Search.propTypes = {
    books: PropTypes.array.isRequired,
    fetchAllBooks: PropTypes.func.isRequired,
};

export default Search;