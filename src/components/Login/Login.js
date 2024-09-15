// import React, { useState } from 'react';
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import firebaseConfig from './firebase.config';
// import './Login.css'; // Import CSS for styling
// import login from'../../images/login.png';



// const Login = () => {
//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//     }

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleGoogleSignIn = () => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth()
//             .signInWithPopup(provider)
//             .then((result) => {
//                 var credential = result.credential;
//                 var token = credential.accessToken;
//                 var user = result.user;
//                 console.log("User signed in with Google:", user);
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     };

    
//     const handleEmailSignIn = (e) => {
//         e.preventDefault();
//         firebase.auth()
//             .signInWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 var user = userCredential.user;
//                 console.log("User signed in with email:", user);
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     };

//     return (
//         <div className="login-container">
//             <div className="login-form">
//                 <h1>Login</h1>
                
//                 <form onSubmit={handleEmailSignIn}>
//                     <div>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit">Login with Email</button>
//                 </form>

//                 {error && <p style={{ color: 'red' }}>{error}</p>}

//                 <hr />

//                 <button onClick={handleGoogleSignIn}>Google Sign In</button>
//             </div>
            
//             <div className="login-image">
//                 <img src={login} alt="Login visual"/>
//             </div>
//         </div>
//     );
// };

// export default Login;









import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './firebase.config';
import './Login.css'; // Import CSS for styling
import loginImage from '../../images/login.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("User signed in with Google:", result.user);
        navigate('/dashboard/appointment'); // Redirect to dashboard on successful login
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User signed in with email:", userCredential.user);
        navigate('/dashboard/appointment'); // Redirect to dashboard on successful login
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  
  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("User signed out.");
        navigate('/Login'); // Redirect to login page
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleEmailSignIn}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login with Email</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <hr />
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      </div>
      <div className="login-image">
        <img src={loginImage} alt="Login visual" />
      </div>
    </div>
  );
};

export default Login;
