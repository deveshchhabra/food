import { createContext } from "react";
import { create } from "yallist";


const UserContext = createContext({
    user:{
    name:"Dummy Name",
    email:"dummy@gmail.com",
    }
});

UserContext.displayName="UserContext"

export default UserContext;