import React, {useEffect,useState} from 'react';
import "./About.css";
import aboutImg from "../../assets/2.png";
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Loader/Loader' 

const About = () => {
  const [loading, setLoading] = useState(true);
useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []); 

  return (
    <> {loading ? <Loader/> : 

          <section className='about'>
      <div className='container'>
        <div>
          <Navbar></Navbar>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "/" />
          </div>
          <div className='about-text text-white'>
            <h2 className='about-title fs-26 ls-1'>About Booke</h2>
            <p className='fs-17'>Books are the architects of human understanding, building bridges across cultures. They are the quiet mentors, teaching lessons of life and beyond. They can transport us to distant galaxies or delve into the depths of the human psyche. Books are the echoes of the past and the whispers of the future, forever enriching the present.</p>
            <p className='fs-17'>Books are portals to various worlds, opening doors to infinite knowledge. They are silent companions, whispering wisdom through words. They have the power to transform minds, and ignite imagination. Books are timeless treasures, preserving stories and ideas for generations.</p>
          </div>
        </div>
      </div>
    </section>
       }
    </>

  )
}

export default About
