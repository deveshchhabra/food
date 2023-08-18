import { IMG_CDN_URL } from "../contants";
import { useState,useEffect,useContext } from "react";
import  Logo from "../assets/img/images.jpg"
import {Link} from "react-router-dom";
import useOnline from "../utilis/useOnline";
import UserContext from "../utilis/UserContext";
const loggedInUser=()=>{
    //API CALL tO MAKE AUTHENCATION 
    return false;
}
const Title = ()=>(
    <a href="/">
        <img className="h-28 px-2" 
        alt="logo"
        src={Logo}></img>        
    </a>
);
const Header = () =>{
    const [isLoggedIn,setIsLoggedIN]=useState(true);//create to state 
    const isOnline=useOnline();
    // useEffect(()=>{
        // console.log("useEffect");
        // },[])
        // console.log("render");
        
        
        const {user}= useContext(UserContext)
        
        return( 
            <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
         <Title />    
        <div className="nav-item"> 
        <ul className="flex py-9 ">
          <li className="px-3">
            <Link to ="/">
            Home
            </Link></li>
            <li className="px-5"><Link to="/about">About</Link></li>
            <li className="px-5"><Link to="/Contact">Contact</Link></li>
            <li className="px-5"><Link to="/instamart">Instamart</Link></li>

            <li className="px-5">Cart</li>
  
    
            
            <li>{isOnline ?"✅":"🔴"}</li>
          <span className="p-10 font-bold text-red-900">   {user.name} </span> 
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
