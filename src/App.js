import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import SearchBook from "./components/SearchBook";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={ <BookList /> }
                />
                <Route
                    path="/search"
                    element={ <SearchBook /> }
                />
            </Routes>
        </div >
    );
};

export default App;
