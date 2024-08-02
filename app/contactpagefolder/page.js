"use client";
import React from 'react'
import '../main.css'
import Image from 'next/image';
import NavbarLight from '../NavbarLight'
import Footer from '../Footer';

const Page = () => {
  return (
    <>
    <NavbarLight />
    <div className="contact-section-page">
    
    <div className="contact-form-right"> 
    <form data-netlify="true">
    <div className="form-group">
    <div className="contact-title">Contact Us</div>
    <div className="contact-subtitle">Explore the world of graphology with us. Feel free to reach out.</div>
    <div className="contact-details">
    <Image src="/email.png" className="contact-icon" alt="EmailLogo" width={30} height={30} />
    <a href="mailto:shalini.graphology@gmail.com" style={{color:'white',textDecoration:'underline'}}target="_blank"><div className='contact-info-written'>shalini.graphology@gmail.com </div> </a>
    <Image src="/phone.png" className="contact-icon" alt="PhoneLogo" width={30} height={30} />
    <a href="tel:+91-8527446662" style={{color:'white',textDecoration:'underline'}}target="_blank"><div className='contact-info-written'> +91-8527446662</div> </a>
    </div>
    <form className='form-area-input' name="Contact" method="POST" data-netlify="true" onSubmit="submit">
    <label className="form-label" for="name" required>Name</label>
    <input className="form-entry" type="text" id="name" name="name" placeholder="Your name.." required />
    <label className="form-label" type="email" id="email" for="email" required>Email</label>
    <input className="form-entry" type="text" id="email" name="email" placeholder="Your email.." required />
    <label className="form-label" for="subject" required>Message</label>
    <textarea className="form-entry"id="subject" name="subject" placeholder="How can we assist you?" required ></textarea>
    <input type="submit" className='form-submit' value="Send Message"  />
    </form>
    </div>
    </form>
    </div>
    </div>
    <div className="contact-left">
    <Image src="/contactperson.png" className="contact-image" alt="Contact Image" width={258.67} height={229.34} />
    </div>
    <Footer />
    </>
  )
}

export default Page