import axios from "axios";

// Create a custom axios instance: This well export a global objects
export default axios.create({
    baseURL: "http://localhost:8000",

    // Header is optional
    headers:{
        "Content-Type":"application/json"
    },
    params:{id:""}
})