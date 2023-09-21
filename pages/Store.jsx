import React from 'react'
import Header from '../components/home_components/Header'
import Footer from '../components/home_components/Footer'
import StoreComponent from '../components/store_components/StoreComponent'

const Store = () => {
  return (
    <div>
      <Header />
        <div className='store_component_container'>
          <StoreComponent />
        </div>
      <Footer />
    </div>
  )
}

export default Store