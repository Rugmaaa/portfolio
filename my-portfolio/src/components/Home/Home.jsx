import React from 'react'
import './Home.css'
import profile from '../../assets/images.png'

function Home() {
    return (
        <div className='home'>
          <div>
        <img src={profile} alt='' className='profile_img'></img>
        
        </div>
          <h1>I'm Rugma</h1>
          <p>Iam a frontend  developer from india.....</p>
          <div className='home-action'>
          <div className='home-connect'>Connect with me</div>
          <div className='resume'>Resume</div>
          </div>
        </div>
        
      );
}

export default Home