import './Home.scss'
import mapImage from '../images/cave.webp'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

function Home() {

  const homeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(homeRef.current, 
      {
        opacity: 0,
        scale: 0.6,
        y: -300,
      },
      {
        opacity: 1, 
        y: 0,
        duration: 1, 
        scale: 1,
        ease: 'power1.in',
      }
    );
  }, [])

  return(
    <div className='Home' ref={homeRef}>

      <header>
        <h1>Journey To The Center Of The Earth</h1>
        <p>Dive into Jules Verne's timeless adventure through the depths of our planet!</p>
      </header>

      <img src={mapImage}></img>

      <div className="quote">
        <blockquote>
          <p>“We may brave human laws, but we cannot resist natural ones.” - Jules Verne</p>
        </blockquote>
      </div>

      <div className="cta">
        <p>Ready to start your journey?</p><br />
        <a href='/about'>Dive into the adventure!</a>
      </div>
    </div>
  )
}

export default Home