// import React from 'react';
// import Navber from '../../Shared/Navber/Navber';
// import HeaderMain from '../HeaderMain/HeaderMain';
// import './Header.css';
// import BusinessInfo from '../BusinessInfo/BusinessInfo';


// const Header = () => {
//     return (
//         <div className="header-container">
//             <Navber></Navber>
//             <HeaderMain></HeaderMain>
//             <BusinessInfo></BusinessInfo>
            
//         </div>
//     );
// };

// export default Header;






import React, { useState } from 'react';
import Navber from '../../Shared/Navber/Navber';
import HeaderMain from '../HeaderMain/HeaderMain';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

import './Header.css';
import SearchBar from '../../Shared/SearchResults/SearchBar';



const Header = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    return (
        <div className="header-container">
            <SearchBar onSearch={handleSearch} />
            <Navber />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;
