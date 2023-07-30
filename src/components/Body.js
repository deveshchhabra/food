// import {  } from "..contants/";
import RestaurantCard from "../restaurantcard";
import { restaurantList } from "../contants";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"; 
function filterdata (searchText,restaurants){
  
  const filterData = restaurants.filter((restaurant) =>-
  restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filterData;

}
const Body = () =>{
  const [allRestaurants,setAllRestaturants] =useState([]);//--->COPY OF ALL RESTAURANT
  const [filteredRestaurants,setFilteredRestaurants] =useState([]);
    const [searchText,setSearchText] =useState("");
   
   //callback ---> it will called whenever my useeffect call 
    useEffect(()=>{
      // API Call
    getRestaurants();
    },[]);//[]----->dependence array 
   
    async function getRestaurants(){
      const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6031082&lng=77.1032095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json=await data.json();
      console.log(json);
      //Optional Chaining 
      setAllRestaturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("render");    

    //conditional rendering 
    // if(!allRestaurants) return null;
    // if(filteredRestaurants?.length===0)
    // return <h1>No restaurnta match yours filrer</h1>

return allRestaurants?.length ===0 ?  <Shimmer/>  :(
        <>
        <div className="search-container">
            <input 
            type="text"
            className="search-input"
            placeholder="search" 
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}            
            />         
            <button 
            className="search-bt"
            onClick = {()=>{
            
              const data =filterdata(searchText,allRestaurants);
              setFilteredRestaurants(data);
            }}>
              Search
              </button>
        </div>
        <div className="restaurant-list">
          {/* write logic for no restraunt found here */}
        {filteredRestaurants.map((restaurant) =>{
          return (<RestaurantCard {...restaurant.info} key={restaurant.info.id}  />
          
          
        
        );})}             
  
            </div>
      </>
      );
};



export default Body;