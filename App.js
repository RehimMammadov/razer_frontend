import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Store from './pages/Store'
import './style/style.scss'
import Community from './pages/Community'
import PC from './pages/PC'
import Mobile from './pages/Mobile'
import LifeStyle from './pages/LifeStyle'
import Services from './pages/Services'
import Support from './pages/Support'
import Basket from './pages/Basket'
import Explore from './pages/Explore'
import Product from './pages/Product'
import Register from './pages/Register'


const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/store' element={<Store />} />
            <Route path='/community' element={<Community />} />
            <Route path='/pc' element={<PC />} />
            <Route path='mobile' element={<Mobile />} />
            <Route path='/lifestyle' element={<LifeStyle />} />
            <Route path='/services' element={<Services />} />
            <Route path='/support' element={<Support />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/product/:id' element={<Product />} />
            <Route />
        </Routes>
    </div>  
  )
}

export default App
