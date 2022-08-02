import { useParams } from "react-router-dom";
import { get, update } from "../BooksAPI";
import { useState, useEffect } from "react";

const BookDetails = () => {
    const [ book, setBook ] = useState(null);
    let params = useParams();

    const fetchBook = (id) =>
        get(id)
            .then(setBook)
            .catch(console.log);

    useEffect(() => {
        fetchBook(params.bookId);
    }, [ params ]);

    const displayShelfTitle = () => {
        switch (book.shelf) {
            case "currentlyReading":
                return "Currently Reading";
            case "wantToRead":
                return "Want To Read";
            case "read":
                return "Read";
            case "none":
                return "None";
            default:
                break;
        };
    };

    const changeShelf = async (event) => {
        event.preventDefault();
        await update(book, event.target.value);
        fetchBook(book.id);
    }

    const renderBook = () => {
        if (book) {
            return <div className="book-top" style={ {
                flexDirection: "column"
            } }>
                <h1>{ book.title }</h1>
                <div>
                    <img
                        src={ `${book.imageLinks.thumbnail}` }
                        alt={ book.title }
                    />
                    <div className="book-shelf-changer">
                        <select onChange={ changeShelf } value={ book.shelf }>
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
                <h3>Subtitle: <span style={ { fontWeight: "normal" } }>{ book.subtitle }</span></h3>
                <h4>Authors: <span style={ { fontWeight: "normal" } }>{ book.authors }</span></h4>
                <p><span style={ { fontWeight: "bold" } }>Description: </span>Description: { book.description }</p>
                <h5>Shelf: <span style={ { fontWeight: "normal" } }>{ displayShelfTitle() }</span></h5>
            </div>
        }
        return null;
    }

    return (
        <div className="book-details">
            { renderBook() }
        </div>
    );
};

export default BookDetails;