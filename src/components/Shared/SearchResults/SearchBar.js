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

        // Convert query to lowercase for easier matching
        const lowerCaseQuery = query.toLowerCase();

        // Add 'dashboard' to the list of matching routes
        const pages = ['appointment', 'blog', 'contact', 'review', 'dashboard'];

        if (pages.includes(lowerCaseQuery)) {
            // Navigate to the corresponding route if there's a match
            navigate(`/${lowerCaseQuery}`);
        } else {
            // If no match, redirect to a generic search page
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }

        onSearch(query);  // Optional callback for handling searches
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
