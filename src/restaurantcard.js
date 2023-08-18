import { useContext } from "react";
import UserContext from "./utilis/UserContext";

const RestaurantCard = ({
    cloudinaryImageId,
      name,
      cuisines,
      areaName,
      lastMileTravelString,
      costForTwo,
      avgRating,
      locality,
    }) => {
  const newLocal = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  const {user}=useContext(UserContext)
      return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
          <img
            src={
              newLocal+  
              cloudinaryImageId
              // "e33e1d3ba7d6b2bb0d45e1001b731fcf"
            }
          />
         <h4 className="font-bold text-xl" > {name}</h4> 
           <h4 className="font-bold text-xl-justify-between">{cuisines}</h4> 
          
            <h4  className="font-bold text-xl">{costForTwo}</h4>
             <h4  className="font-bold text-xl">{areaName}</h4>
            <h4  className="font-bold text-xl">{locality}</h4>
            <h4  className="font-bold text-xl">{lastMileTravelString}</h4>
           <h4  className="font-bold text-xl"><i className="fa-solid fa-star"></i>{avgRating}</h4>
           <h4></h4>
           <h4  className="font-bold text-xl"><i className="fa-solid fa-star"></i>{user.name}</h4>
           {/* <h5 className="font-bold">{user}</h5> */}

          <span></span>
        </div>
      );
    };
export default RestaurantCard;