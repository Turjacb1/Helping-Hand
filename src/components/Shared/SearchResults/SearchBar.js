import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
        navigate(`/search?query=${encodeURIComponent(query)}`); // Redirect to search results
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search for medical topics, doctors, etc..."
                    value={query}
                    onChange={handleInputChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
