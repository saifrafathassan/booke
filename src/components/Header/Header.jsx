import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>
          <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>find your ideal book.</h2>
            <br />
            <p className='header-text fs-18 fw-3'>Books are a treasure trove of knowledge, opening doors to different worlds, ideas, and perspectives. Reading them not only enhances our understanding and cognitive abilities, but also fosters empathy, creativity, and critical thinking.</p>
            <SearchForm/>
          </div>
      </header>
    </div>
  )
}

export default Header
