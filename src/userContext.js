import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserContextProvider = ({ children }) => {
  // Define a state to store the logged-in user
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {children}
    </UserContext.Provider>
  );
};
