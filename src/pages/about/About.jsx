import React from 'react'
import about from '../../assets/about.jpg'
import influencer from '../../assets/influencers.png'
import smallbusiness from '../../assets/SMALL-BUSINESSES.png'
import business from '../../assets/big-business.png'
import brand from '../../assets/brands.png'
import cooperation from '../../assets/LARGE-COOPERATIONS.png'

import './about.css'
const About = () => {
  return (
    <section className="about_main">
      <div className="about_title">
        <div className="about_title-content">
          <h2>
            Creating unique connections across Africa and helping little & large
            brands connect and scalein new and exciting ways
          </h2>
        </div>
        <div>
          <img src={about} alt="" />
        </div>
      </div>
      <div className="container about_container">
        <div className="about_content">
          <article className="content-detail1">
            <h3>VISION STATEMENT</h3>
            <p>
              To evolve and position our company as a leading, tech-savvy
              progressive and eco-friendly institution. A company committed to
              providing the utmost in efficacy and excellence, backed up by
              technological innovation and personalized service and to be the go
              to marketplace for anything and everything commerce in Africa and
              the world at large.
            </p>
          </article>
          <article className="content-detail2">
            <h3>MISSION STATEMENT</h3>
            <p>
              Owlet aims to efficiently provide quality and excellent services
              in thefield of free online classifieds services and social media
              growth. To continue to create and develop platforms that bring
              individuals, businesses and brands closer, in an organic,
              transparent and innovative way. We aim to build and maintain a
              team of motivated, committed professionals with a high work ethnic
              adopting technology.{' '}
            </p>
          </article>
          <article className="content-detail3">
            <h3>OUR STRENGTH</h3>
            <p>
              Our strength lies in the areas of attention to detail of our
              clients, a sense of urgency and commitment to building better,
              more sustainable tech products and staying true to our core
              values.
            </p>
          </article>
        </div>
      </div>
      <div className="about_reach">
        <div className="reach-text">
          WHO ARE WE TRYING TO REACH?
        </div>
        <div className="reach-img">
          <img src={influencer} alt="" />
          <small>INFLUENCERS</small>
        </div>
        <div className="reach-img">
          <img src={smallbusiness} alt="" />
          <small>SMALL BUSINESSES</small>
        </div>
        <div className="reach-img">
          <img src={business} alt="" />
          <small>BIG BUSINESSES</small>
        </div>
        <div className="reach-img">
          <img src={brand} alt="" />
          <small>BRANDS</small>
        </div>
        <div className="reach-img">
          <img src={cooperation} alt="" />
          <small>LARGE COOPERATIONS</small>
        </div>

      </div>
    </section>
  )
}

export default About
