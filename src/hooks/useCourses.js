import { useEffect, useState } from "react"

export const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return [courses];
}