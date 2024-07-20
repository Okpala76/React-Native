import * as Location from  "expo-location"
import  {useState, useEffect} from 'react'


const useLocation = () => {

    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocation = async () => {
        try {
            const {status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            const {
                coords:{latitude,longitude},} = await Location.getLastKnownPositionAsync();
            setLocation({latitude, longitude});
            
            
        } catch (error) {
            console.log("Error")
        }
    };

    useEffect(() => {
        getLocation();
    }, [5]);
    

    return {location,errorMsg};
};

export default useLocation;

//requestForegroundPermissionsAsync 