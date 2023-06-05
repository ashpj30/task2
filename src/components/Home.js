import React from 'react'
import './Home.css';
import { Vnavbar } from './Vnavbar';
import { Sidebar } from './Sidebar';
import search from './search.png'
import Group from './Group.png'
import rec from './rec.png'
import heart1 from './heart1.png'
import menu from './menu.png'
import song1 from './song1.png'
import song2 from './song2.png'
import song3 from './song3.png'
import bt from './bt.png';
export const Home = () => {
  return (
    <div>
        <div>
            <Vnavbar/>
        </div>
        <div className='home'>
<div className='box'><img src={search}></img><input placeholder='Search artists,songs,albums...'></input> 
<img className='rec' src={rec}></img>
<img className='mic' src={Group}></img></div>
<div className=' song'>FEATURED SONGS</div>
<div className='song1'>
  <span>Post Malone<br></br> <b style={{fontSize:"30px"}}>Circles</b></span>
 </div>

<div  className='menu1'>
  <img src={menu}></img> &nbsp;&nbsp;&nbsp;<img src={heart1}></img>
  </div>

 <button className='btn'>Play</button>
<div className='left'>
  <ul>
  <li style={{marginLeft:"-33px"}}>R&B</li>
  <li style={{marginLeft:"-35px"}}>Pop</li>
  <li style={{marginLeft:"-38px"}}>Rap</li>
  <li style={{marginLeft:"-21px"}}>Ballad</li>
  <li style={{marginLeft:"-8px"}}>Country</li>
  <li style={{marginLeft:"-1px"}}>Hip Hop</li>
</ul>  
</div>
<div className='latest'>
  <h2>New Releases<img style={{height:"20px",width:"30px"}} src={bt}></img></h2>
  <p>See more</p>
<img style={{marginLeft:"-10px",height:"120px",width:"120px",marginBottom:"30px"}} src={song1}></img> &nbsp;
<img style={{height:"120px",width:"120px",marginBottom:"30px"}} src={song2}></img> &nbsp;
<img style={{height:"120px",width:"120px" ,marginBottom:"30px"}} src={song3}></img> &nbsp;
 &nbsp;
<img style={{height:"150px",width:"280px" }}src={song3}></img>

<div className='latest2'><p>Red (Taylor’s Version) <br></br><span>Taylor Swift</span></p>
</div>

</div>
</div>
        <div>
          <Sidebar/>
        </div>
    </div>
  )
}
