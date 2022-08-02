import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

const SearchBook = () => {
    const [ query, setQuery ] = useState("");
    const [ matchedBooks, setMatchedBooks ] = useState([]);

    useEffect(() => {
        console.log(query);
        if (query !== "") {
            search(query)
                .then(res => {
                    console.log(res);
                    if (res.error) {
                        setMatchedBooks([]);
                    } else {
                        setMatchedBooks(res);
                    }
                })
                .catch(console.log);
        } else {
            setMatchedBooks([]);
        }
    }, [ query ]);

    const renderSearchResults = () => {
        return matchedBooks.length > 0
            ? matchedBooks.map((book) => <Book key={ book.id } book={ book } />)
            : null;
    };

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
            <div className="search-books-results">
                <ol className="books-grid">
                    { renderSearchResults() }
                </ol>
            </div>
        </div>
    );
};

export default SearchBook;