import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import banner from "../../assets/banner.svg";
import slide1 from "../../assets/slide1.png";
import slide3 from "../../assets/slide3.png";
import slide2 from "../../assets/slide2.png";
import wletonline from "../../assets/wletonline.png";
// import wletp2p from "../../assets/wletp2p.png";
import checkmate from "../../assets/Chequemate.png";
import owletpay from "../../assets/Owletpay.png";
import strix from "../../assets/strix.png";
import quickshop from "../../assets/quickshop.webp";
import owletride from "../../assets/owletride.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Home = () => {
  return (
    <section className=" container_home">
      <div className="hero">
        <Swiper
          slidesPerView={1}
          // spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="head-content1">
              <div className="head_slide-content1">
                <img src={slide1} alt="" />
                <h1>
                  <span className="head-des">Owlet is connecting</span>{" "}
                  businesses and people around Africa using the power of tech
                </h1>
                <p>
                  Learn more about The Owlet story, our mission, our projects
                  and more...
                </p>
                {/* <NavLink to='/dashboard' className="btn-secondary" > Dashboard</NavLink> */}
                <Link to="/about" className="btn-head">
                  Get Started
                </Link>
                {/* <a href="" className="">Get Started</a> */}
              </div>
              <div></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="head-content3">
              <div className="head_slide-content3">
                <img src={slide2} alt="" />
                <h1>
                  {" "}
                  Buy, sell, grow, and communicate
                  <span className="head-des2"> with OwletApp</span>
                </h1>
                <p>
                  Find out more about the best ways to build an online store on
                  OwletApp
                </p>

                <a href="https://theowlette.com/" className="btn-head">
                  Get Started
                </a>
                <div></div>
              </div>
            </div>
            <div className="head-image"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="head-content2">
              <div className="head_slide-content2">
                <img src={slide3} alt="" />
                <h2>
                  {" "}
                  Get genuine Likes, Comment, Views, Shares, Followers,
                  Subscribers & more,{" "}
                  <span className="head-des">
                    when you sign up to the Owlet Online.
                  </span>{" "}
                </h2>

                <a href="http://theowletonline.com/" className="btn-head">
                  Get Started
                </a>
              </div>
              <div></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" container home_product">
        <h2>Our products</h2>
        <h5>
          Check out some of our amazing products and services and also, be on
          the lookout for new products we will be unveiling soon.
        </h5>
        <div className="home_product-container">
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
              Through innovative methods, Quickshop is uniting people,
              organizations, and brands all over Africa. Our mission is to
              assist you in increasing sales and acquiring new clients both
              locally and throughout Africa.
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
            <p style={{ marginTop: "20px" }}>
              The finest prices on inexpensive and dependable mobile, tablet,
              and smart wear technologies, as well as items for smart home
              technology, can be found at STRIX.
            </p>
            <a
              href="https://strix.com.ng"
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
              href="https://owletpay.com/"
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
              href="https://owletpay.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner2"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
