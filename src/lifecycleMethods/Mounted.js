import axios from 'axios';
import React, { Components } from 'react';
class Mounting extends Components{
    constructor(props){
        super()
        this.state={
            name:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return{
            name:"vinod"
        } 
    }
    componentDidMount(){
axios.post("https://jsonplaceholder.typicode.com/todos"
       ,{
     title:"education",
    userId:1,
     id:2
      }
    ).then(val=>{
        this.setState({name:val.data})
       })
    }
    render(){
        console.log("render method")
        return(
            <div>{console.log(this.state.name)}</div>
        )
    }
}
export default Mounting