import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out.");
      })
      .catch((error) => toast.error(error.message));
  };

  const updateCurrentUser = (user) => {
    setUser(user);
  };

  const addToCart = (id) => {
    const productId = id;
    const info = {
      userEmail: user.email,
      id: productId,
    };
    fetch(`http://localhost:4000/cart`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then(() => {
        toast.success("Product added to cart.");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const removeFromCart = (id) => {
    const productId = id;
    const info = {
      userEmail: user.email,
      id: productId,
    };
    fetch(`http://localhost:4000/cart/remove`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then(() => {
        toast.success("Product removed from cart.");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    loading,
    user,
    setUser,
    registerUser,
    loginUser,
    logoutUser,
    updateCurrentUser,
    addToCart,
    removeFromCart,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
