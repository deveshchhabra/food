import { useState,useEffect } from "react";
import { FETCH_MENUE_URL } from "../contants";

const useRestaurant=(resid)=>{
    const [restataurant,setRestaurant]=useState(null);
        //Get data from the api    
    useEffect(()=>{
        getRestaurntantInfo();
    },[]);
        //return the data from the api 
    
async function getRestaurntantInfo(){
        const data= await fetch(FETCH_MENUE_URL+resid);
           
            const Json=await data?.json();
            console.log(Json);
            console.log(Json.data.cards[0].card.card.info)
            setRestaurant(Json.data.cards[0].card.card.info);
        };
        // return the restaurant data
        return restataurant;
    }
    
    export default useRestaurant;