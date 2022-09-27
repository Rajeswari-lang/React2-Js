import React, { Component } from 'react'
export class Apitabledata extends Component {
    constructor(props) {
      super(props)
      this.state = {
        obj:{

        },
        posts:[]
      }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts").then(resp=>resp.json())
        .then(resp=>this.setState({posts:resp}))
    }
    handleClick=(e)=>{
      this.state.posts.map((element,i)=>{
        if(element.id==e){
          console.log(element);
              this.setState({
                  obj:element
              })
          console.log(element);
          }
      })
}
  render() {
    return (
<div>
    <h1>Api Table data</h1>
    <table>
    <tbody>
                <tr> 
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {
                  this.state.posts.map((items,i)=>(
      <button onClick={()=>this.handleClick(items.id)}>{items.id} </button>
))
              }
              </tbody>
          </table>
     <p>{this.state.obj.id}</p>
     <p>{this.state.obj.title}</p>
     <p>{this.state.obj.body}</p>
      </div>
    )
  }
}
export default Apitabledata