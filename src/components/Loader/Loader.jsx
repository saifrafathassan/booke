import React from 'react'
import LoadingImg from '../../assets/loading.svg'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={LoadingImg} alt="loader" />
    </div>
  )
}

export default Loader
