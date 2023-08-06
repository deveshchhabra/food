import { useEffect,useState } from "react";
const Profile=(props)=>{
    const [count,setCount]=useState(0);
    // const [count2,setCount2]=useState(0);
    
       
    useEffect(()=>{
        //API Call 
       const timer= setInterval(()=>{
            console.log("nameste react-op")
        },1000);
        // console.log("re-render");
    
 
    console.log("useEffect");

  
    return ()=>{
        clearInterval(timer);
        console.log("useEffect Return");
    };
  
},[]);


    console.log("render function");

    return(
        <div>
            <h2>Profile Using function  </h2>
            <h2>Name: {props.name} </h2>
            <h3>{count}</h3>
            <button onClick={
                ()=>
                setCount(1)
                // setCount2(1)
                }>Count</button>       
                <h3>{count}</h3> 

                 <button onClick={
                ()=>
                setCount(1)
                }>Count2</button>       
        </div>
    );
};
export default Profile;
