import React from 'react'
import resim from './resim.jpg'
import github from './github.png'
import linkedin from './linkedin.png'
import './Main.css';
function Main() {
  return (
    <div className='main'>
       
          <img src={resim} alt="Resim" className='cagri'/>
        <h1>Hi, I'm Çağrı</h1>
        <c>Software 
        <span className='blue'>  Developer</span>
      </c>

      <p className='text1'>A software developer working on mobile 
        application development, who has taken it 
        upon herself to wait for the build time in Android Studio.</p>
        <a href="https://github.com/doseyenc" target="_blank" rel="noreferrer noopener">
            <img src={github} alt="Github" className='git'/>
        </a>

        <a href="https://www.linkedin.com/in/cagridoseyen/" target="_blank" rel="noreferrer noopener">
        <img src={linkedin} alt="Linkedin" className='link'/>
        </a>

        <p className='text2'>© Çağrı Döşeyen - 2022</p>

    </div>
  )
}

export default Main