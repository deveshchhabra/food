const RestaurantCard = ({
    cloudinaryImageId,
  
      name,
      cuisines,
      areaName,
      lastMileTravelString,
      costForTwo,
      avgRating,
      locality
    }) => {
      return (
        <div className="card">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"  +
              cloudinaryImageId
              // "e33e1d3ba7d6b2bb0d45e1001b731fcf"
            }
          />
          {name} 
           <h4>{cuisines}</h4> 
          
            <h4>{costForTwo}</h4>
             <h4>{areaName}</h4>
            <h4>{locality}</h4>
            <h4>{lastMileTravelString}</h4>
           <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>

          <span></span>
        </div>
      );
    };
export default RestaurantCard;