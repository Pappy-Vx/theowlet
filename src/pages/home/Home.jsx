import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import banner from '../../assets/banner.svg'
import slide1 from '../../assets/slide1.png'
import slide3 from '../../assets/slide3.png'
import slide2 from '../../assets/slide2.png'
import wletonline from '../../assets/wletonline.png'
import wletp2p from '../../assets/wletp2p.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Home = () => {
  return (
    <section className=' container_home'>
      <div className="hero">
      <Swiper
      slidesPerView={1}
        // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        loop
        autoplay= {{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="head-content1">
            <div className="head_slide-content1">
            <img src={slide1} alt="" />
            <h1> 
             <span className='head-des'>Owlet is connecting</span>  businesses
              and people around Africa using 
              the power of tech
              </h1>
            <p>Learn more about The Owlet story,
            our mission, our projects and more...
            </p>
            {/* <NavLink to='/dashboard' className="btn-secondary" > Dashboard</NavLink> */}
            <Link to="/about" className="btn-head">Get Started</Link>
            {/* <a href="" className="">Get Started</a> */}
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="head-content3">
        <div className="head_slide-content3">
          <img src={slide2} alt="" />
            <h1> Buy, sell, grow, and communicate 
            <span className='head-des2'> with OwletApp</span> 
            </h1>
            <p>Find out more about the best
            ways to build an online store on
            OwletApp</p>

            
            <a href="https://theowlette.com/" className="btn-head">Get Started</a>
            <div></div>
            </div>
          </div>
          <div className="head-image">
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="head-content2">
        <div className="head_slide-content2">
          <img src={slide3} alt="" />
            <h2> Get genuine Likes, Comment, Views, Shares,
            Followers, Subscribers & more, <span className='head-des'>when you sign up to the 
            Owlet Online.</span> </h2>
            
 
            <a href="http://theowletonline.com/" className="btn-head">Get Started</a>
          </div>
          <div>
          </div>  
          </div>

        </SwiperSlide>
       
      </Swiper>
      </div>
      <div className=" container home_product">
        <h2>Our products</h2>
        <h5>Check out some of our amazing products and services and also,
        be on the lookout for new products we will be unveiling soon.</h5>
        <div className="home_product-container">
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
          <h2>Something New <span className='head-des'>is coming!!!</span></h2>
            <p>
            A new way to get financial help faster and without stress
            </p>
            <Link to="/what's new" >Get Started</Link>
          </article>
        </div>
      </div>
      <div className="banner">
      <Swiper
      slidesPerView={1}
        // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        loop
        autoplay= {{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner1">
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="banner2">
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>

  )
}

export default Home