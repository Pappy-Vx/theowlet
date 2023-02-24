import React from 'react'
import './product.css'
import logo from '../../assets/logo.svg'
import wletonline from '../../assets/wletonline.png'
import wletp2p from '../../assets/wletp2p.png'
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <section className='product_main'>
      <div className="container products">
        {/* <img src={bgbanner} alt="" /> */}
      <h2>Our products</h2>
        <h5>Check out some of our amazing products and services and also,
        be on the lookout for new products we will be unveiling soon.</h5>
        <div className="product-container">
        <article className='home_product-content'>
            <img src={logo} alt="" />
            <p>OwletApp is finding new ways to 
            connect individuals, businesses, and 
            brands all across Africa.

            Our goal is to help you do better 
            with selling and finding new customers
            in locations closest to you and in 
            locations accross Africa.</p>
             <a href="https://theowlette.com/" target="_blank" rel="noopener noreferrer">Get Started</a>
          </article>
          <article className='home_product-content'>
          <img src={wletonline} alt="" />
            <p>
            Theowletonline is a website that offers cheap and high-quality SMM and SEO services, designed for resellers with quick order completion.
            </p>
             <a href="http://theowletonline.com/" target="_blank" rel="noopener noreferrer">Get Started</a>
          </article>
          <article className='home_product-content'>
          <img src={wletp2p} alt="" />
            <p>
            Trade your social media assets securely, 
            on the biggest social media assets platform in the world.
            Connect with other social media asset vendors, purchase
            assets without hassles.
            </p>
            <a href="http://theowletonline.com/p2p" target="_blank" rel="noopener noreferrer">Get Started</a>
          </article>
          <article className='home_product-content'>
          <h2>Something New <span className='head-des'> is coming!!!</span></h2>
            <p>
            A new way to get financial help faster and without stress
            </p>
            <Link to="/what's new" >Get Started</Link>
          </article>
          </div>
      </div>
      {/* <img src={bgbannerbottom} alt="" /> */}
    </section>
  )
}

export default Product