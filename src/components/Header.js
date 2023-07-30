import { title } from "process";
import { IMG_CDN_URL } from "../contants";
import { useState } from "react";
const loggedInUser=()=>{
    //API CALL tO MAKE AUTHENCATION 
    return false;
}
const Title = ()=>(
    <a href="/">
        <img className="logo" 
        alt="logo"
        src={IMG_CDN_URL}></img>
        
    
    </a>
);
const Header = () =>{
    const [isLoggedIn,setIsLoggedIN]=useState(true);//create to state 
        
    return( 
        <div className="header">
         <Title />    
        <div className="nav-item"> 
        <ul>
            <li>Home</li>
            <li>About</li>            
            <li>Contact</li>
            <li>Cart</li>
       <li>

        { isLoggedIn ? (
            <button onClick={()=>setIsLoggedIN(false)}>Logout</button>)
            :(
                <button onClick={()=>setIsLoggedIN(true)}>Login</button>
                )} 
                
        </li>
                </ul>

        </div>


{/* {
((a=10),console.log(a))
} */}



</div>);

};

export default Header;
