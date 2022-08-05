import PropTypes from "prop-types";
import Book from "./Book";

const SearchResults = ({ matchedBooks, fetchAllBooks, booksFromMainPage }) => {
    const isSearchResult = true;

    const renderSearchResults = () => {
        return matchedBooks && matchedBooks.length > 0
            ? matchedBooks.map(
                (book) => {
                    const bookFound = booksFromMainPage.find((bookFromMainPage) => bookFromMainPage.id === book.id);

                    return <Book
                        key={ book.id }
                        book={ book }
                        isSearchResult={ isSearchResult }
                        fetchAllBooks={ fetchAllBooks }
                        shelfFromMainPage={ bookFound ? bookFound.shelf : null }
                    />;
                }
            )
            : null;
    };

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                { renderSearchResults() }
            </ol>
        </div>
    );
};

SearchResults.propTypes = {
    matchedBooks: PropTypes.array.isRequired,
    fetchAllBooks: PropTypes.func.isRequired,
    booksFromMainPage: PropTypes.array.isRequired,
};

export default SearchResults;