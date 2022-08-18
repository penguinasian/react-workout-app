import { useEffect} from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";

const useFetch = (url) => {
    // const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutContext()
    const {user} = useAuthContext()
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(url, {
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                // setWorkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        if (user) {
            fetchWorkouts()
        }
        
    }, [dispatch, user])
    
    return { workouts }
} 

export default useFetch