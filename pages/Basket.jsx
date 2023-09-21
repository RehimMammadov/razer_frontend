import React from 'react'
import Header from '../components/home_components/Header'
import Footer from '../components/home_components/Footer'
import BasketComponent from '../components/basket_components/BasketComponent'

const Basket = () => {
  return (
    <div>
      <Header />
        <main>
          <BasketComponent />
        </main>
      <Footer />
    </div>
  )
}

export default Basket