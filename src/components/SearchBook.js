import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import SearchResults from "./SearchResults";

const SearchBook = () => {
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
            <SearchResults matchedBooks={ matchedBooks } />
        </div>
    );
};

export default SearchBook;