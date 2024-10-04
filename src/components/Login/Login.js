


// import React, { useState } from 'react';
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import firebaseConfig from './firebase.config';
// import './Login.css'; // Import CSS for styling
// import loginImage from '../../images/login.png';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// const Login = () => {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleGoogleSignIn = () => {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         console.log("User signed in with Google:", result.user);
//         navigate('/dashboard/appointment'); // Redirect to dashboard on successful login
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   const handleEmailSignIn = (e) => {
//     e.preventDefault();
//     firebase.auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         console.log("User signed in with email:", userCredential.user);
//         navigate('/dashboard/appointment'); // Redirect to dashboard on successful login
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

  
//   const handleLogout = () => {
//     firebase.auth().signOut()
//       .then(() => {
//         console.log("User signed out.");
//         navigate('/Login'); // Redirect to login page
//       })
//       .catch((error) => {
//         console.error("Error signing out:", error);
//       });
//   };
  
//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h1>Login</h1>
//         <form onSubmit={handleEmailSignIn}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login with Email</button>
//         </form>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <hr />
//         <button onClick={handleGoogleSignIn}>Google Sign In</button>
//       </div>
//       <div className="login-image">
//         <img src={loginImage} alt="Login visual" />
//       </div>
//     </div>
//   );
// };

// export default Login;










// import React, { useState, useContext } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import { UserContext } from '../../App'; // Assuming you have a UserContext
// import { Container, Form, Button, Alert } from 'react-bootstrap';
// import firebaseConfig from './firebase.config';
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import loginImage from '../../images/login.png'; // Assuming this is where your image is stored
// import './Login.css'; // Custom styling

// // Initialize Firebase if not already initialized
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// const Login = () => {
//     const [newUser, setNewUser] = useState(false);
//     const [user, setUser] = useState({
//         email: '',
//         password: '',
//         error: '',
//         success: false,
//         message: ''
//     });
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: '/' } };

//     const handleBlur = (e) => {
//         const newUserInfo = { ...user };
//         newUserInfo[e.target.name] = e.target.value;
//         setUser(newUserInfo);
//     };

//     const handleSignIn = (e) => {
//         e.preventDefault();

//         // Handle email sign-in
//         if (!newUser && user.email && user.password) {
//             firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//                 .then((res) => {
//                     const newUserInfo = { ...user, success: true, error: '', message: 'Logged in successfully' };
//                     setUser(newUserInfo);
//                     setLoggedInUser(newUserInfo);
//                     navigate(from);
//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user, error: error.message, success: false };
//                     setUser(newUserInfo);
//                 });
//         }

//         // Handle new user sign-up
//         if (newUser && user.email && user.password) {
//             firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//                 .then((res) => {
//                     const newUserInfo = { ...user, success: true, error: '', message: 'Account created successfully' };
//                     setUser(newUserInfo);
//                     setLoggedInUser(newUserInfo);
//                     navigate(from);
//                 })
//                 .catch((error) => {
//                     const newUserInfo = { ...user, error: error.message, success: false };
//                     setUser(newUserInfo);
//                 });
//         }
//     };

//     const handleGoogleSignIn = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider)
//             .then(result => {
//                 const { displayName, email, photoURL } = result.user;
//                 const signedInUser = { name: displayName, email, photo: photoURL, isSignedIn: true };
//                 setUser(signedInUser);
//                 setLoggedInUser(signedInUser);
//                 navigate(from);
//             })
//             .catch(error => {
//                 const newUserInfo = { ...user, error: error.message, success: false };
//                 setUser(newUserInfo);
//             });
//     };

//     const handlePasswordReset = () => {
//         if (!user.email) {
//             const newUserInfo = { ...user, error: 'Please enter your email address first' };
//             setUser(newUserInfo);
//             return;
//         }

//         const auth = getAuth();
//         sendPasswordResetEmail(auth, user.email)
//             .then(() => {
//                 const newUserInfo = { ...user, success: true, error: '', message: 'Password reset email sent!' };
//                 setUser(newUserInfo);
//             })
//             .catch(error => {
//                 const newUserInfo = { ...user, error: error.message, success: false };
//                 setUser(newUserInfo);
//             });
//     };

//     return (
//         <Container className="login-container">
//             <div className="login-form">
//                 <h1>{newUser ? 'Sign Up' : 'Login'}</h1>
//                 <Form onSubmit={handleSignIn}>
//                     {newUser && (
//                         <Form.Group>
//                             <Form.Label>Your Name</Form.Label>
//                             <Form.Control type="text" name="name" placeholder="Your name" onBlur={handleBlur} />
//                         </Form.Group>
//                     )}
//                     <Form.Group>
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" name="email" placeholder="Enter email" onBlur={handleBlur} required />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" name="password" placeholder="Password" onBlur={handleBlur} required />
//                     </Form.Group>
//                     <Button variant="success" type="submit" style={{ width: '100%' }}>
//                         {newUser ? 'Sign Up' : 'Sign In'}
//                     </Button>
//                 </Form>

//                 {!newUser && (
//                     <Button variant="link" onClick={handlePasswordReset} style={{ marginTop: '20px' }}>
//                         Forgot Password?
//                     </Button>
//                 )}

//                 <hr />
//                 <Button onClick={handleGoogleSignIn} variant="primary" style={{ marginBottom: '20px', width: '100%' }}>
//                     Sign in with Google
//                 </Button>

//                 {user.error && <Alert variant="danger" style={{ marginTop: '20px' }}>{user.error}</Alert>}
//                 {user.success && (
//                     <Alert variant="success" style={{ marginTop: '20px' }}>
//                         {user.message || `User ${newUser ? 'created' : 'logged in'} successfully`}
//                     </Alert>
//                 )}
//             </div>
//             <div className="login-image">
//                 <img src={loginImage} alt="Login" />
//             </div>
//         </Container>
//     );
// };

// export default Login;












import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { UserContext } from '../../App';
import { Container, Form, Button, Alert, InputGroup } from 'react-bootstrap'; // Import InputGroup for the password field
import firebaseConfig from './firebase.config';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import loginImage from '../../images/login.png';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
        error: '',
        success: false,
        message: ''
    });
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const handleBlur = (e) => {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        // Handle email sign-in
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user, success: true, error: '', message: 'Logged in successfully' };
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    navigate(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user, error: error.message, success: false };
                    setUser(newUserInfo);
                });
        }

        // Handle new user sign-up
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user, success: true, error: '', message: 'Account created successfully' };
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    navigate(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user, error: error.message, success: false };
                    setUser(newUserInfo);
                });
        }
    };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photo: photoURL, isSignedIn: true };
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                navigate(from);
            })
            .catch(error => {
                const newUserInfo = { ...user, error: error.message, success: false };
                setUser(newUserInfo);
            });
    };

    const handlePasswordReset = () => {
        if (!user.email) {
            const newUserInfo = { ...user, error: 'Please enter your email address first' };
            setUser(newUserInfo);
            return;
        }

        const auth = getAuth();
        sendPasswordResetEmail(auth, user.email)
            .then(() => {
                const newUserInfo = { ...user, success: true, error: '', message: 'Password reset email sent!' };
                setUser(newUserInfo);
            })
            .catch(error => {
                const newUserInfo = { ...user, error: error.message, success: false };
                setUser(newUserInfo);
            });
    };

    const sendSignInLinkToEmail = (e) => {
        e.preventDefault();
        const actionCodeSettings = {
            url: 'https://www.example.com/finishSignUp?cartId=1234', 
            handleCodeInApp: true,
            iOS: { bundleId: 'com.example.ios' },
            android: { packageName: 'com.example.android', installApp: true, minimumVersion: '12' },
            dynamicLinkDomain: 'example.page.link'
        };

        if (!user.email) {
            const newUserInfo = { ...user, error: 'Please enter your email' };
            setUser(newUserInfo);
            return;
        }

        firebase.auth().sendSignInLinkToEmail(user.email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', user.email);
                const newUserInfo = { ...user, success: true, error: '', message: 'Email link sent!' };
                setUser(newUserInfo);
            })
            .catch((error) => {
                const newUserInfo = { ...user, error: error.message, success: false };
                setUser(newUserInfo);
            });
    };

    const handleEmailLinkSignIn = () => {
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                email = window.prompt('Please provide your email for confirmation');
            }

            firebase.auth().signInWithEmailLink(email, window.location.href)
                .then((result) => {
                    window.localStorage.removeItem('emailForSignIn');
                    const signedInUser = { name: result.user.displayName, email: result.user.email, isSignedIn: true };
                    setUser(signedInUser);
                    setLoggedInUser(signedInUser);
                    navigate(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user, error: error.message, success: false };
                    setUser(newUserInfo);
                });
        }
    };

    React.useEffect(() => {
        handleEmailLinkSignIn();
    }, []);

    return (
        <Container className="login-container">
            <div className="login-form">
                <h1>{newUser ? 'Sign Up' : 'Login'}</h1>
                <Form onSubmit={handleSignIn}>
                    {newUser && (
                        <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Your name" onBlur={handleBlur} />
                        </Form.Group>
                    )}
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onBlur={handleBlur} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type={passwordVisible ? 'text' : 'password'} 
                                name="password"
                                placeholder="Password"
                                onBlur={handleBlur}
                                required
                            />
                            <InputGroup.Text onClick={() => setPasswordVisible(!passwordVisible)}>
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Button variant="success" type="submit" style={{ width: '100%' }}>
                        {newUser ? 'Sign Up' : 'Sign In'}
                    </Button>
                </Form>

                {!newUser && (
                    <Button variant="link" onClick={handlePasswordReset} style={{ marginTop: '20px' }}>
                        Forgot Password?
                    </Button>
                )}

                <hr />
                <Button onClick={handleGoogleSignIn} variant="primary" style={{ marginBottom: '20px', width: '100%' }}>
                    Sign in with Google
                </Button>

                <Button onClick={sendSignInLinkToEmail} variant="secondary" style={{ marginTop: '10px', width: '100%' }}>
                    Send Sign-In Link
                </Button>

                {user.error && <Alert variant="danger" style={{ marginTop: '20px' }}>{user.error}</Alert>}
                {user.success && (
                    <Alert variant="success" style={{ marginTop: '20px' }}>
                        {user.message || `User ${newUser ? 'created' : 'logged in'} successfully`}
                    </Alert>
                )}
            </div>
            <div className="login-image">
                <img src={loginImage} alt="Login" />
            </div>
        </Container>
    );
};

export default Login;
