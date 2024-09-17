// src/contexts/UserContext.js

import React, { createContext, useState, useContext } from 'react';

// Create a Context for the user
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUserContext = () => useContext(UserContext);

// Create a Provider component
export const UserProvider = ({ children }) => {
  // State to hold user data
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Function to update user data
  const updateUser = (user) => {
    setLoggedInUser(user);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
