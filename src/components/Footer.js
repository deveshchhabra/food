import { useContext } from "react";
import UserContext from "../utilis/UserContext";


const Footer = () =>{
    const {user} =useContext(UserContext);
    return (
    <h1 className="p-10 m-10">
        {user.name}-{user.email}
        </h1>
    );
};

export default Footer;
