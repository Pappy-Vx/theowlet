import React from 'react'
import './new.css'
import {TbBrandTelegram} from 'react-icons/tb'
import newBg from '../../assets/new-bg.jpg'
const New = () => {
  return (
    <section className='new-container'>
        <div className="new-bg">
           <div>
            <div className="line"></div>
           <h3>
We are creating an online 
group savings and group learning 
community that allows you to contribute 
money with goal-driven individuals to 
achieve your financial goals, and also 
allows you to learn on the go by joining 
transformative online classes to gain 
more skills and or improve your life. </h3>
           </div>
            <div></div>
        </div>
        <div className='new-waitlist'>
        <h3>JOIN THE WAITLIST</h3>
            <form action="" className='new-form'>
                <input type="email" name="" id="" className='new-input' placeholder='ENTER YOUR EMAIL ADDRESS' />
                <button type="submit" className='new-submit'><TbBrandTelegram className='new-tele' /></button>
            </form>
        </div>
    </section>
  )
}

export default New