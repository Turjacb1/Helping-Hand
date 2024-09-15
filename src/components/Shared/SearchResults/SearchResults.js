import React, { useEffect, useState } from 'react';
import './SearchResults.css'; // Import the CSS file for styling

const SearchResults = ({ query }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (query) {
            setLoading(true);
            fetch(`/api/search?query=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    setResults(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                    setLoading(false);
                });
        }
    }, [query]);

    return (
        <div className="search-results-container">
            <h2>Search Results for: <span className="query-text">{query}</span></h2>
            {loading ? (
                <p>Loading...</p>
            ) : results.length > 0 ? (
                <ul className="results-list">
                    {results.map(result => (
                        <li key={result.id} className="result-item">
                            <h3>{result.home}</h3>
                            <p>{result.description}</p>
                            <a href={result.link} className="result-link">Read more</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
