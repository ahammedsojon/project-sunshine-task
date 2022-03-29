import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAppAuthentication from "../components/Firebase/firebase.init";

initializeAppAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // register user
  const registerUser = (name, email, password, location, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(true);
        setError("");
        setUser({ displayName: name, email });
        updateUser(name);
        const redirect_uri = location?.state?.from || "/";
        history.push(redirect_uri);
      })
      .catch((error) => {
        setLoading(true);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // update user
  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };

  // login user
  const loginUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(true);
        setError("");
        const redirect_uri = location?.state?.from || "/";
        history.push(redirect_uri);
      })
      .catch((error) => {
        setLoading(true);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // google sign in
  const googleSignIn = (location, history) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(true);
        setError("");
        const redirect_uri = location?.state?.from || "/";
        history.push(redirect_uri);
      })
      .catch((error) => {
        setLoading(true);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // logoutUser
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setLoading(true);
        setError("");
      })
      .catch((error) => {
        setLoading(true);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    user,
    error,
    loading,
    registerUser,
    loginUser,
    logoutUser,
    googleSignIn,
  };
};

export default useFirebase;
