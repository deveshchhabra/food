import { IMG_CDN_URL } from "../contants";
import { useState,useEffect } from "react";
import  Logo from "../assets/img/images.jpg"
import {Link} from "react-router-dom";
import useOnline from "../utilis/useOnline";
const loggedInUser=()=>{
    //API CALL tO MAKE AUTHENCATION 
    return false;
}
const Title = ()=>(
    <a href="/">
        <img className="logo" 
        alt="logo"
        src={Logo}></img>        
    </a>
);
const Header = () =>{
    const [isLoggedIn,setIsLoggedIN]=useState(true);//create to state 
    const isOnline=useOnline();
    useEffect(()=>{
    console.log("useEffect");
    },[])
    console.log("render");
        
    return( 
        <div className="header">
         <Title />    
        <div className="nav-item"> 
        <ul>
          <li>
            <Link to ="/">
            Home
            </Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>

            <li>Cart</li>
  
    
            
            <li>{isOnline ?"✅":"🔴"}</li>
        { isLoggedIn ? (
            <button onClick={()=>setIsLoggedIN(false)}>Logout</button>)
            :(
                <button onClick={()=>setIsLoggedIN(true)}>Login</button>
                )} 
                
        </ul>
            </div>



{/* {
((a=10),console.log(a))
} */}



</div>);

};

export default Header;
