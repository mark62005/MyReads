import "../css/App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll } from "../BooksAPI";
import BookList from "./BookList";
import SearchBook from "./SearchBook";
import BookDetails from "./BookDetails";

function App() {
    const [ books, setBooks ] = useState([]);

    const fetchAllBooks = async () => {
        const res = await getAll();
        setBooks(res);
    };

    useEffect(() => {
        fetchAllBooks();
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={ <BookList books={ books } fetchAllBooks={ fetchAllBooks } /> }
                />
                <Route
                    exact
                    path="/books/:bookId"
                    element={ <BookDetails /> }
                />
                <Route
                    path="/search"
                    element={ <SearchBook books={ books } fetchAllBooks={ fetchAllBooks } /> }
                />
            </Routes>
        </div >
    );
};

export default App;
