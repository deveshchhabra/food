import React from "react";
class Profileclass extends React.Component{
    constructor(props){
        super(props);
      this.state  = {
        userInfo:{
            name:"Dummy name",
            location:"Dummy location",
        },
    };
        // console.log("Child- Constructor");
}
    async componentDidMount()
        
        {
        //api call
            const data = await fetch("https://api.github.com/users/Deveshchhabra");
            const json = await data.json();
            this.setState({
                userInfo: json,
            });
        
            console.log("Child-ComponentDidMount"+this.props.name);
    };

    componentDidMount(){
        // this.timer=setInterval(()=>{
        // console.log("componentDidMONUNT")
        // },1000);
    }  

    componentWillUnmount(){
        clearInterval(this.timer)
        // console.log("componentWillUnmount")
    }  
    render(){
        const {count}=this.state;
        console.log("Child-render"+this.props.name);

        // console.log("Child-render");
        return(
            
            <div>

        <h2>Profile Class Based Component</h2>
        <img src={this.state.userInfo.avatar_url}/> 
        <h2>Name:{this.state.userInfo.name}</h2>
      <h2>Location:{this.state.userInfo.location}</h2> 
    </div>
       )}  
    }
    export default Profileclass;


    {/* <button  onClick ={()=>{this.setState({count: 1, });}}>count 1</button>       
             <h2>Count:{this.state.count2}</h2>  */}
    
    
// <button onClick ={()=>{this.setState({count2:1,});>SetCount2</button>
//         );
    