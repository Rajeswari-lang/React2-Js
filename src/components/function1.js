import { React, useState } from "react";
function Test(){
const[name,setname]=useState("")
const[num, setnum]=useState("")
const handlename=(e)=>{
    setname(e.target.value)
    console.log(e.target.value)
}
const handlenum=(e)=>{
    setnum(e.target.value)
    console.log(e.target.value)
}
const handlesubmit=(e)=>{
    e.preventDefault();
    let obj={
        name:name,
        number:num
    }
    console.log(obj)
}
    return(
        <form>
            name
            <input value={name} onChange={handlename}/>
            num
            <input value={num} onChange={handlenum}/>
            <button onClick={handlesubmit}>submit</button>
        </form>
    )
}
export default Test;