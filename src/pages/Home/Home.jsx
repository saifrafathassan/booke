import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router'
import Loader from '../../components/Loader/Loader'

const Home = () => {
  const [loading, setLoading] = useState(true);
useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []); 
  return (
    <>
      {loading ? <Loader/> : 
          <main>
        <Header/>
        <Outlet/>
    </main>}
    </>

  )
}

export default Home
