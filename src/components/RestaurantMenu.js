import {useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer"; 

const RestauarntMenue=()=>{
    const {resid}=useParams();

const [restataurant,setRestaurant]=useState(null);
// const [restataurantMen,setRestaurantMen]=useState({});


useEffect(()=>{
    getRestaurntantInfo();
},[]) 


async function getRestaurntantInfo(){
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6031082&lng=77.1032095&catalog_qa=undefined&submitAction=ENTER&restaurantId="+resid);
   
    const Json=await data?.json();
    console.log(Json);
    console.log(Json.data.cards[0].card.card.info)
    setRestaurant(Json.data.cards[0].card.card.info);
  
};
return  (!restataurant) ? <Shimmer />:(

        
            <div>
           <h1>Restauarnt id:{resid}</h1>
            <h2>{restataurant.name}</h2>
            <img src={IMG_CDN_URL +restataurant.cloudinaryImageId}  />
            <h1>{restataurant.area}</h1>
            <h2>{restataurant.city}</h2>
            <h3>{restataurant.avgRating}star</h3>
            {/* <h2>{console.log(restataurantMen.name)}</h2> */}
           </div>
       
)     
};
export default RestauarntMenue;


   // const itemcatergory1='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    // const Nesteditemcatergory='type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
    // console.log(Json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map(x => x.card?.card).filter(x=> x['@type'] ===itemcatergory1).map(x=> x.itemCards))
    
    // setRestaurantMen(Json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map(x => x.card?.card).filter(x=> x['@type'] ===itemcatergory)?.map(x=> x.itemCards).map(x=> x.card?.info) || []);
    
    


    // const menue_data=menue.map(item=>{
    //        if(item.card.card["@type"] == itemcatergory !==undefined) {
    //         return item?.card?.card.info;

    //        }
            
    //        console.log("hello")
    //                console.log(menue_data)
    //                setRestaurantMen(menue_data)
    //     })

// }




   
//   if(!restataurant){
//     return <Shimmer />;
//   }