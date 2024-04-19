import http from "../axios";
type User ={
    username:string,
    password:string
}

// Sign In
const signIn =(user:User)=>{
    return http.post('/api/auth/login',user)
}


export default {
    signIn
}

