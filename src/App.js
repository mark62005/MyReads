import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import SearchBook from "./components/SearchBook";

function App() {
    const books = [
        {
            id: "sJf1vQAACAAJ",
            title: "The Cuckoo's Calling",
            authors: [
                "Robert Galbraith"
            ],
            imageLinks: {
                "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            shelf: "currentlyReading"
        },
        {
            id: "nggnmAEACAAJ",
            title: "The Linux Command Line",
            authors: [
                "William E. Shotts, Jr."
            ],
            imageLinks: {
                "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            shelf: "wantToRead"
        },
        {
            id: "jAUODAAAQBAJ",
            title: "Needful Things",
            authors: [
                "Stephen King"
            ],
            imageLinks: {
                "smallThumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            shelf: "read"
        }
    ];

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
