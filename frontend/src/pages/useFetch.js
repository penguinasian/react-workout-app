import { useEffect, useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

const useFetch = (url) => {
    // const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutContext()
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(url)
            const json = await response.json()

            if (response.ok) {
                // setWorkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [dispatch])
    
    return { workouts }
} 

export default useFetch