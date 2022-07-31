import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll } from "./BooksAPI";
import BookList from "./components/BookList";
import SearchBook from "./components/SearchBook";

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
                    element={ <BookList books={ books } /> }
                />
                <Route
                    path="/search"
                    element={ <SearchBook books={ books } /> }
                />
            </Routes>
        </div >
    );
};

export default App;
