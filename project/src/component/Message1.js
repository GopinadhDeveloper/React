import React, { Component, useEffect, useState } from 'react'
import useFetch from './useFetch';
import { MessageContext } from './chat';
 

export default function Message1() {
    const[user,setUser]=useState({username:"krishna"});
    const[count,setCount]=useState(0);
    //const[data,setData]=useState([]);
   // const[todos,setTodos]=useState([]);
    const data=useFetch("https://jsonplaceholder.typicode.com/users");

  //   useEffect(()=>{
  //    fetch("https://jsonplaceholder.typicode.com/users")
  //    .then((res)=>res.json())
  //    .then((data)=> {setData(data);
  // });
  // return()=>{console.log("WillUnmount")}
  //   },[]);
  //   useEffect(()=>{
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res)=>res.json())
  //     .then((data)=> {setTodos(data);
  //  });
  //  return()=>{console.log("WillUnmount")}
  //    },[]);
  return (
    <div>
      <h1>Context</h1>
      <div><MessageContext.Consumer> 
        {(value)=><div>{value?.username}
        </div>}</MessageContext.Consumer></div>
        <h1>Message Notifications</h1>
        <p> you have received {count} new messages</p>
        <h1>users</h1>
        <div> {data.map((user)=><p>{user.name}</p>)} </div>
         
        {/* <h1>title</h1>
        <div> {todos.map(user=>(<p key={user.title}>{user.title}</p>))}
        </div>  */}
        <button onClick={()=>setCount(count+1)}>Send Message</button>
        {user.username}
    <br/>
    {/* <button onClick={()=>setusername("vamshhi")}>Click</button> */}
    </div>
  );
}; 



// export default class Message1 extends Component {
//     state={username:"krishna"}
//   render() {
//     return (
//       <div>{this.state.username}
//       <br/>
//       <button onClick={()=>{this.setState({username:"vamshhi"})}}>Click</button>
//       </div>
//     )
//   }
// }

