import React from 'react'
import Header from '../components/home_components/Header'
import BlackShark from '../components/home_components/BlackShark'
import Footer from '../components/home_components/Footer'
import Karrigan from '../components/home_components/Karrigan'
import RazerNews from '../components/home_components/RazerNews'

const Home = () => {
  return (
      <div>
        <Header />
        <BlackShark />
        <main>
          <RazerNews />
          <Karrigan />
        </main>
        <Footer />
      </div>
  )
}

export default Home 