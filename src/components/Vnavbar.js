import React from 'react'
import './Vnavbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import Home from './Home.png'
import dash from './dash.png'
import heart from './heart.png'
import library from './library.png'
import home1 from './home1.png';
import logo1 from './logo1.png'
import edit from './edit.png'
export const Vnavbar = (

) => {
  return (
    <div>
       
        <div className='navbar'> <img src={logo}></img>
         <ul>
  <li class="active"><Link to='/'><img src={Home}></img>Home</Link></li>
  <li><Link to='/browse'><img src={dash}></img>Browse</Link>
  <Link to='/fav'><img src={heart}></img>Favorite</Link></li>
  <li><Link to='/library'><img src={library}></img>Library</Link></li>
  
</ul></div> 

<div className='navbar1'>
    <ul>
        <li style={{color: "#2E3A59"}}><img src={home1}></img >Home 
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; <img style={{width:"15px",height:"15px"}} src={edit}></img></li>
        <li style={{color: "#F3777D"}}>For workplace <img  src={logo1}></img></li>
        <li style={{color: "#959D99"}}>Rich Brian’s collections</li>
        <li style={{color: "#959D99"}}>deep focus</li>
        <li style={{color: "#959D99"}}>Lo-Fi Jazz upbeat</li>
        <li style={{color: "#959D99"}}>For workplace</li>
        <li style={{color: "#959D99"}}>Christmas playlist</li>
    </ul>
</div>
    </div>
  )
}
