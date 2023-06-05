import React from 'react'
import { data } from '../data'
import './Sidebar.css'
import arr from './arr.png'
export const Sidebar = () => {

  
  return (
    <div>
        <div className='sidebar'>
           <div className='sidebar1'> <p>Top Streams Real-time</p> <h6 ><button style={{background: "#EE4950",color:"white",border:"none"}}> Local</button> <button style={{background: "#49504D", color:"white",border:"none"}}>Global</button></h6></div>
           <div className='table'>
          { 
data.map(data => {
  return (
    <tr>
    <td>{data.id}&nbsp;<img className='just'  src={data.img}></img></td>
    <td className='height'>{data.Song}<p style={{fontSize:"11px"}}>{data.Singer}</p></td>
    <td>{data.time}</td>
    <td><img src={data.img1}></img></td>
    <td><img src={data.img2}></img></td>
    </tr>
  )

 
})}
       <button>Expand<img src={arr}></img></button>  
  </div>

        </div>
    </div>
  )
}
