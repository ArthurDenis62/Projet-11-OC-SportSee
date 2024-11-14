import axios from "axios"

const ApiRequest = ( id ) => {
    const URL1 = `http://localhost:5000/user/${id}`
    const URL2 = `http://localhost:5000/user/${id}/activity`
    const URL3 = `http://localhost:5000/user/${id}/average-sessions`
    const URL4 = `http://localhost:5000/user/${id}/performance`
    
    const promise1 = axios.get(URL1);
    const promise2 = axios.get(URL2);
    const promise3 = axios.get(URL3);
    const promise4 = axios.get(URL4);

    return Promise.all([promise1, promise2, promise3, promise4])
}

export default ApiRequest