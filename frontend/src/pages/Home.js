
import useFetch from "./useFetch";

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm";

 const Home = () => {

    
    const { workouts } = useFetch('/api/workouts')
    return ( 
        <div className="home">
            <div className="workouts">
                { workouts && workouts.map((workout) => (
                    <WorkoutDetails workout={workout} key={workout._id}/>
                ) )}
            </div>
            <WorkoutForm />
        </div>
     );
 }
  
 export default Home;