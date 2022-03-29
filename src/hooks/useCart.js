import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

export const useCart = courses => {
    const [cart, setCart] = useState();
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (courses.length) {
            for (const key in savedCart) {
                const addedCourse = courses.find(course => course.id === key);
                if (addedCourse) {
                    storedCart.push(addedCourse);
                }
            }
            setCart(storedCart);
        }
    }, [courses])

    return [cart, setCart];

}