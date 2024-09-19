

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
// import Home from './components/Home/Home/Home';
// import Appointment from './components/Appointment/Appointment/Appointment';
// import Login from './components/Login/Login';
// import Dashboard from './components/Dashboard/Dashboard/Dashboard';
// import AllPatients from './components/AllPatients/AllPatients/AllPatients';
// import AddDoctors from './components/Dashboard/AddDoctors/AddDoctors';

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import firebaseConfig from './components/Login/firebase.config';
// import ProtectedRoute from './components/Login/ProtectedRoute';
// import Contact from './components/Home/Contact/Contact';
// import BlogPost from './components/Home/BlogPost/BlogPost';
// import Review from './components/Home/Review/Review';

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Firebase authentication state listener
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       setUser(user);
//       setLoading(false); // Stop loading when auth state is known
//     });
    
//     return () => unsubscribe(); // Clean up subscription on unmount
//   }, []);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home /> // Public route
//     },
//     {
//       path: "/Home",
//       element: <Home /> // Public route
//     },
//     {
//       path: "/Appointment",
//       element: <ProtectedRoute user={user}><Appointment /></ProtectedRoute> // Protected route
//     },
//     {
//       path: "/contact",
//       element: <ProtectedRoute user={user}><Contact/></ProtectedRoute> // Protected route
//     },

//     {
//       path: "/blogs",
//       element: <ProtectedRoute user={user}><BlogPost/></ProtectedRoute> // Protected route
//     },

//     {
//       path: "/review",
//       element: <ProtectedRoute user={user}><Review/></ProtectedRoute> // Protected route
//     },
//     {
//       path: "/dashboard/appointment",
//       element: <ProtectedRoute user={user}><Dashboard /></ProtectedRoute> // Protected route
//     },
//     {
//       path: "/AllPatients",
//       element: <ProtectedRoute user={user}><AllPatients /></ProtectedRoute> // Protected route
//     },
//     {
//       path: "/addDoctor",
//       element: <ProtectedRoute user={user}><AddDoctors /></ProtectedRoute> // Protected route
//     },
//     {
//       path: "/login",
//       element: user ? <Navigate to="/dashboard/appointment" replace /> : <Login /> // Redirect logged-in users to dashboard
//     },
//   ]);

//   if (loading) {
//     return <p>Loading...</p>; // Show a loading indicator while checking auth state
//   }

//   return <RouterProvider router={router} />;
// }

// export default App;










import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctors from './components/Dashboard/AddDoctors/AddDoctors';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './components/Login/firebase.config';
import ProtectedRoute from './components/Login/ProtectedRoute';
import Contact from './components/Home/Contact/Contact';
import BlogPost from './components/Home/BlogPost/BlogPost';
import Review from './components/Home/Review/Review';
import SearchResults from './components/Shared/SearchResults/SearchResults';
import Blog from './components/Home/BlogPost/Blog';
export const UserContext = React.createContext;



 // Import SearchResults component

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Firebase authentication state listener
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false); // Stop loading when auth state is known
        });
        
        return () => unsubscribe(); // Clean up subscription on unmount
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home /> // Public route
        },
        {
            path: "/Home",
            element: <Home /> // Public route
        },
        {
            path: "/Appointment",
            element: <ProtectedRoute user={user}><Appointment /></ProtectedRoute> // Protected route
        },
        {
            path: "/contact",
            element: <ProtectedRoute user={user}><Contact /></ProtectedRoute> // Protected route
        },
        {
            path: "/blogs",
            element: <ProtectedRoute user={user}><BlogPost /></ProtectedRoute> // Protected route
        },

        {
            path: "/blog",
            element: <ProtectedRoute user={user}><Blog/></ProtectedRoute> // Protected route
        },
        {
            path: "/review",
            element: <ProtectedRoute user={user}><Review /></ProtectedRoute> // Protected route
        },
        {
            path: "/dashboard/appointment",
            element: <ProtectedRoute user={user}><Dashboard /></ProtectedRoute> // Protected route
        },
        {
            path: "/AllPatients",
            element: <ProtectedRoute user={user}><AllPatients /></ProtectedRoute> // Protected route
        },
        {
            path: "/addDoctor",
            element: <ProtectedRoute user={user}><AddDoctors /></ProtectedRoute> // Protected route
        },
        {
            path: "/login",
            element: user ? <Navigate to="/dashboard/appointment" replace /> : <Login /> // Redirect logged-in users to dashboard
        },
        
        {
            path: "/search",
            element: <SearchResults query={new URLSearchParams(window.location.search).get('query')} /> // Search results page
        },
        
    ]);

    if (loading) {
        return <p>Loading...</p>; // Show a loading indicator while checking auth state
    }

    return <RouterProvider router={router} />;
}

export default App;






