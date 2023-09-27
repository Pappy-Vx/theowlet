import React from 'react'
import './product.css'
// import logo from '../../assets/logo.svg'
import wletonline from '../../assets/wletonline.png'
// import wletp2p from '../../assets/wletp2p.png'
// import {Link} from 'react-router-dom'
import checkmate from "../../assets/Chequemate.png";
import owletpay from "../../assets/Owletpay.png";
import strix from "../../assets/strix.png";
import quickshop from "../../assets/quickshop.webp";
import owletride from "../../assets/owletride.webp";
const Product = () => {
  return (
    <section className='product_main'>
      <div className="container products">
        {/* <img src={bgbanner} alt="" /> */}
      <h2>Our products</h2>
        <h5>Check out some of our amazing products and services and also,
        be on the lookout for new products we will be unveiling soon.</h5>
        <div className="product-container">
        <article className="home_product-content">
            <img src={wletonline} alt="" />
            <p>
              Theowletonline is a website that provides resellers with speedy
              order fulfillment, high-quality, reasonably priced SMM and SEO
              services.
            </p>
            <a
              href="http://theowletonline.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </article>
          <article className="home_product-content">
            <img src={quickshop} alt="" />
            <p>
              Through innovative methods, OwletApp is uniting people,
              organizations, and brands all over Africa. Our mission is to
              assist you in increasing sales and acquiring new clients both
              locally and throughout Africa. .
            </p>
            <a
              href="https://theowlette.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </article>
          <article className="home_product-content">
            <img src={strix} alt="" />
            <p style={{marginTop:'20px'}}>
              The finest prices on inexpensive and dependable mobile, tablet,
              and smart wear technologies, as well as items for smart home
              technology, can be found at STRIX.
            </p>
            <a
              href="http://theowletonline.com/p2p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </article>
          <article className="home_product-content">
            <img src={checkmate} alt="" />
            <p>
              ChequeMate is an app that's committed to giving you the resources
              you need to raise money for whatever cause you choose. The program
              works by letting users form groups with a financial objective and
              then share the rewards of that goal with one another.
            </p>
            <a
              href="http://theowletonline.com/p2p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </article>
          <article className="home_product-content">
            <img src={owletpay} alt="" />
            <p>
              Owletpay is a bill-paying platform that provides easy access to
              frequently used services like phone, internet, electricity, pay
              cable television, sports betting, tickets, and other online
              services. We integrate Telcos, DisCos, and other service providers
              to offer clients value-added services.
            </p>
            <a
              href="http://theowletonline.com/p2p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </article>
          <article className="home_product-content">
            <img src={owletride} alt="" />
            <p>
            Owletride, is an Nigeria's fastest growing ride-hailing service,
              emerging out of the heart of the Federal Capital Territory, Abuja,
              Nigeria. Navigate your city in style and class when you ride or
              drive, shop or deliver, send or receive with Owletride.
            </p>
            <a
              href="http://theowletonline.com/p2p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </article>

          </div>
      </div>
      {/* <img src={bgbannerbottom} alt="" /> */}
    </section>
  )
}

export default Product