

import React from "react";
import  ReactDOM from "react-dom/client";

import Header   from "./components/Header";
// Named import
import Body from "./components/Body"
import About from "./components/About";
import Footer from "./components/Footer";
import Error from "./components/error";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/profile";
const AppLayout = ()=>{

  return (
    <>  
      <Header />
      <Outlet />
      <Footer></Footer>
    </>

  );
};

const appRouter = createBrowserRouter ([
  {
  path:"/",
  element:<AppLayout  />,
  errorElement:<Error />,
  children:[
    {
      path:"/",
      element:<Body />,
    },
    
    
    {
      path:"about", //parentPath/{path} ---->localhost:1234/about
      element:<About />,
      children:[
        {
          path:"profile", //parentPath/{path} ---->localhost:1234/about/profile
          // path:"/profile", //parentPath/{path} ---->localhost:1234/profile

          element:<></>,
        }
      ]
    },
    {
      path:"/contact",
      element:<Contact />,
    },
    {
      path:"/restaurant/:resid",
      element:<RestaurantMenu />,
    }
  ]
  },

]);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={appRouter}/>);










// const {title}=obj;

// https://legacy.reactjs.org/docs/reconciliation.html


// const Title = () =>(
//     <h1 id="title" key="h2">
//         Food title
//     </h1>);






//Config Driven UI

// const config =[
//     {
//         type:"carousel",
//         cards: [],
//     },
//     {
//         type:"carousel",
//         cards:[
//             {
//                 name:"Burger king",
//                 image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//                 cusines:["Burger","American"],
//                 rating:"4.2",
//             },
//             {
//                 name:"KFC",
//                 image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//                 cusines:["Burger","American"],
//                 rating:"4.2",
//             }
//         ]
//     }
// ]


  // props.restaurant.data
//optional chaining = ?.


// props -property restaurant={restaurantList[0]}

// no key <<<<<<<<<<<<<<<<<<< index(uses only if you donot have key ) <<< unique key(best)


//React.Fragment
//1.<React.Fragment></React.Fragment>
//2.<></>

// and  to give css 
// 1.
// const styleObj={
//     border:"1px solid red",
// };

// const jsx=(
// < div style={{backgroundColor:"red"}}>
// <h1>jsx1</h1>
// <h2>jsx2</h2>
// </div>
// );




 // Restaurant card component: Image, name, cuisine
//   const RestaurantCard = ({
//     cloudinaryImageId,
//     name,
//     cuisines,
//     area,
//     lastMileTravelString,
//     costForTwoString,
//     avgRating,
//   }) => {
//     return (
//       <div className="card">
//         <img
//           src={
//             "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//             cloudinaryImageId
//           }
//         />
//         <h2>{name}</h2>
//         <h4>{cuisines.join(", ")}</h4>
//         <h4>{area}</h4>
//         <span>
//         <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
//           <h4>{lastMileTravelString}</h4>
//           <h4>{costForTwoString}</h4>
//         </span>
//       </div>
//     );
//   };
// const burgerKing ={
//     name:"Burger King",
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cusins:["Burger ","American"],
//     rating:"4.2",
// };