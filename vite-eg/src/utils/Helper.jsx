import axios from "axios";

export const add=(num1,num2)=>{
    if(typeof num1!=="number"||typeof num2!=="number"){
        return 0;
    }
    else
        return num1+num2;
}

export const reverseString=(value)=>{
    return value.split("").reverse().join("")
}

export const userDetails={
    name:"debug",
    age:20
}
export const fetchUser=async ()=>{
    const response=await axios("https://jsonplaceholder.typicode.com/posts/1")
    return response.data
}
export const isAuthenticated=(isLogged=false)=>{
    if(isLogged){
        return "Welcome User"
    }
    throw new Error("User not logged in")
}