import React from 'react'
import Topnav from '../components/Topnav'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="Home">
    <Topnav/>
    <Header/>
    <Content/>
    <Footer/>
    </div>
  )
}

export default Home