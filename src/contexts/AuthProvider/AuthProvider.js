import React, { useState, useEffect, createContext } from "react";
import {
  addToDb,
  clearTheCart,
  deleteFromDb,
  getStoredCart,
} from "../../utilities/fakedb";
import { useCourses } from "../../hooks/useCourses";
import useFirebase from "../../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const allContext = useFirebase();
  const [courses] = useCourses();
  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (courses.length) {
      for (const key in savedCart) {
        const addedCourse = courses.find((course) => course.id === +key);
        if (addedCourse) {
          storedCart.push(addedCourse);
        }
      }
      setCart(storedCart);
    }
  }, [courses]);

  const handleCourse = (course) => {
    const prevCourses = cart.filter((item) => item.id !== course.id);
    const newCart = [...prevCourses, course];
    setCart(newCart);
    addToDb(course.id);
  };

  const handleRemoveItem = (id) => {
    deleteFromDb(id);
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleClearCart = () => {
    setCart([]);
    clearTheCart();
  };

  const value = {
    handleCourse,
    handleRemoveItem,
    handleClearCart,
    cart,
    ...allContext,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
