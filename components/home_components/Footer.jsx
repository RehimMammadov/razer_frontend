import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_main_container">
            <Link to={"/store"}><h2>Store</h2></Link>
            <Link to={"/explore"}><h2>Explore</h2></Link>
            <Link><h2>Support</h2></Link>
            <Link><h2>FAQ</h2></Link>
            <Link><h2>About</h2></Link>
        </div>
        <div className="footer_other">
            <span className='copyright'>Copyright © 2022 Razer Inc. All rights reserved.</span>
            <img src="/assets/Social Media.png" alt="" />
        </div>
    </div>
  )
}

export default Footer