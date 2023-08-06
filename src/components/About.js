import {Outlet} from "react-router-dom"
import Profile from "./profile.js";
import Profileclass from "./profileclass.js";
import {Component} from "react";
class About extends Component{
    constructor(props){
        super(props)
            // console.log("Parent-Constructor");
        
        
    }

 componentDidMount(){
        // console.log("parent-componentdidmonint")
    }


    render(){
        // console.log("Parent-render")
        return(
            <div>
            <h1>About-us Page</h1>
            <p>This is nameste -react course chapter - 07</p>
            {/* <Outlet /> */}
            <Profile  name={"Devesh"} xyz="divya" />
            {/* <Profileclass name={"fistclass"} xyz="divya"/> */}
            {/* <Profileclass name={"SecondClass"} xyz="divya"/> */}

        </div>

        );
    }}
export default About;
    
//     const About = ()=>{
//         return (
//     <div>
//         <h1>About-us Page</h1>
//         <p>This is nameste -react course chapter - 07</p>
//         <Outlet />
//         <Profile  name={"Devesh"} xyz="divya" />
//         <Profileclass name={"DeveshClass"} xyz="divya"/>

//     </div>
// )
// }

// export default About;