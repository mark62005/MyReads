import PropTypes from "prop-types";
import Book from "./Book";

const SearchResults = ({ matchedBooks }) => {
    const renderSearchResults = () => {
        return matchedBooks && matchedBooks.length > 0
            ? matchedBooks.map(
                (book) => <Book key={ book.id } book={ book } />
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
    matchedBooks: PropTypes.array,
};

export default SearchResults;