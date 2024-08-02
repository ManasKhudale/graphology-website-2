"use client";
import "./main.css";
import Image from "next/image";
import Footer from "./Footer";
import NavbarLight from "./NavbarLight";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Gallery from "./Gallery";
import Head from "next/head";
import 'animate.css';

export default function Home() {
  return (
    //Landing Part
    
    <>
    <link rel="icon" href="/favicon.png" sizes="any" />
    <NavbarLight />
      {/*First Section*/}
      <div className="first-section"> 
      <div className="landing-nav">
        {/* LearnGraphology */} 
        {/* <br /> */}
         {/* <Link href="/contactpagefolder"><button className="contact-us">Contact Us</button></Link> */}
        {/* <button className="contact-us"> Contact Us </button> */}
      </div>
      <div className="landing-content">
      <div className="left-content">
      <div className="landing-title">Uncover the secrets hidden</div><br />
      <div className="landing-subtitle">Explore the fascinating world of graphology. Get to know more about yourselves, and dive deep into the world of magic of handwriting.</div>
      <Link href="/knowmorefolder"><button className="read-now-button">Know more</button></Link>
      </div>
      <div className="right-content">
      <Image src="/landingimage.png" className="landing-image" alt="Landing Image" width={300} height={197.5} />
      </div>
      </div>
      </div>

      {/* Second Section - 3 (grid/flex) */}
      <div className="second-section">
      <div className="card-3-1">
        <Image src="/card1.png" className="card-image" alt="Card Image" width={80} height={80} />
        <div className="written-2">
        <div className="card-title">Graphology Insights</div>
        <div className="card-description">Enhance self-awareness and personality traits.</div>
        </div>
      </div>
      <div className="card-3-1">
      <Image src="/card2.png" className="card-image" alt="Card Image" width={80} height={80} />
      <div className="written-2">
      <div className="card-title">Handwriting Analysis</div>
       <div className="card-description">Decode hidden meanings and gain valuable insights.</div>
       </div>
      </div>
      <div className="card-3-1">
      <Image src="/card3.png" className="card-image" alt="Card Image" width={80} height={80} />
      <div className="written-2">
      <div className="card-title">Personality Traits Revealed</div>
       <div className="card-description">Uncover personality traits and understand behaviour patterns.</div>
       </div>
      </div>
      </div>

      {/* Third Section - 4 reviews (grid/flex) */}
      <div className="third-section">
      
      <div className="third-title">Join the GraphoBlog community and explore the world of graphology</div>
      <div className="review-section">
      <div className="review-card">
      <div className="sample-logo">
      <Image src="/sample-logo.png" className="sample-logo" alt="Sample Logo" width={50} height={50} />
      </div>
      <div className="review-content">
      Shalini Sanoria&apos;s insights are spot-on and enlightening. A must-read for graphology enthusiasts!
      </div>
      <div className="reviewer">
      <div className="reviewer-pic">
      <Image src="/reviewer1.png" className="reviewer-pic" alt="Reviewer Pic" width={40} height={40} />
      </div>
      <div className="reviewer-name">Mansi Khudale</div> 
      </div>
      </div>

      <div className="review-card">
      <div className="sample-logo">
      <Image src="/sample-logo.png" className="sample-logo" alt="Sample Logo" width={50} height={50} />
      </div>
      <div className="review-content">
      Shalini&apos;s blog provides valuable, practical advice on handwriting analysis. Highly recommended!
      </div>
      <div className="reviewer">
      <div className="reviewer-pic">
      <Image src="/reviewer2.png" className="reviewer-pic" alt="Reviewer Pic" width={40} height={40} />
      </div>
      <div className="reviewer-name">Samrat Khudale</div> 
      </div>
      </div>

      <div className="review-card">
      <div className="sample-logo">
      <Image src="/sample-logo.png" className="sample-logo" alt="Sample Logo" width={50} height={50} />
      </div>
      <div className="review-content">
      Shalini Sanoria&apos;s expertise makes complex graphology concepts easy to understand. Fantastic read!

      </div>
      <div className="reviewer">
      <div className="reviewer-pic">
        <Image src="/reviewer3.png" className="reviewer-pic" alt="Reviewer Pic" width={40} height={40} />
      </div>
      <div className="reviewer-name">Swati Arora</div> 
      </div>
      </div>

      <div className="review-card">
      <div className="sample-logo">
      <Image src="/sample-logo.png" className="sample-logo" alt="Sample Logo" width={50} height={50} />
      </div>
      <div className="review-content">
      Incredible insights from Shalini Sanoria. Her analysis has been eye-opening and practical.
      </div>
      <div className="reviewer">
      <div className="reviewer-pic">
      <Image src="/reviewer4.png" className="reviewer-pic" alt="Reviewer Pic" width={40} height={40} />
      </div>
      <div className="reviewer-name">Sandeep Arora</div> 
      </div>
      </div>
      </div>
      
      </div>

   
    

      <Gallery />
      <Footer />
    </>
  );
}
