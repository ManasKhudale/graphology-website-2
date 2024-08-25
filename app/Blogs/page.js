"use client";
import React from 'react'
import NavbarLight from '../NavbarLight'
import '../main.css'
import Footer from '../Footer'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <NavbarLight /> 
    <div className="blog-page-section">
    <div className = "blog-page-title">Featured Blog Posts by Shalini Sanoria</div> 
    <div className = "blog-posts">

    <Link href="/blog1" style={{color:'white',textDecoration:"none"}}>
    <div className="blog-post">
    <Image src="/thumb1.jpg" className="blog-thumbnail" alt="Thumbnail" width={240} height={200} />
        <div className='blog-post-title'style={{textDecoration:'underline'}}>The Secrets of Handwriting</div>
        <div className='blog-post-desc'>Explore the hidden meanings in your handwriting with expert insights from Shalini Sanoria.</div>
    </div>
    </Link>

    <Link href="/blog2" style={{color:'white',textDecoration:"none"}}>
    <div className="blog-post">
    <Image src="/thumb2.jpg" className="blog-thumbnail" alt="Thumbnail" width={240} height={200} />
        <div className='blog-post-title' style={{textDecoration:'underline'}}>Graphology and Personality</div>
        <div className='blog-post-desc'>Learn how graphology reveals your personality traits and what your handwriting says about you.</div>
    </div>
    </Link>

    <Link href="/blog3" style={{color:'white',textDecoration:"none"}}>
    <div className="blog-post">
    <Image src="/thumb3.jpg" className="blog-thumbnail" alt="Thumbnail" width={240} height={200} />
        <div className='blog-post-title' style={{textDecoration:'underline'}}>Handwriting Analysis Techniques</div>
        <div className='blog-post-desc'>Discover the techniques used by graphologists to analyze handwriting and what it reveals.</div>
    </div>
    </Link>
    
    </div>    
    <div className = "blog-posts">

    <Link href="/blog4" style={{color:'white',textDecoration:"none"}}>
    <div className="blog-post">
    <Image src="/thumb4.jpg" className="blog-thumbnail" alt="Thumbnail" width={240} height={200} />
        <div className='blog-post-title' style={{textDecoration:'underline'}}>Handwriting in the Digital Age</div>
        <div className='blog-post-desc'>Explore the relevance of handwriting analysis in the modern world dominated by digital communication.</div>
    </div></Link>

    <Link href="/blog5" style={{color:'white',textDecoration:"none"}}> 
    <div className="blog-post">
    <Image src="/thumb5.jpg" className="blog-thumbnail" alt="Thumbnail" width={240} height={200} />
        <div className='blog-post-title' style={{textDecoration:'underline'}}> How Handwriting Reflects Emotions</div>
        <div className='blog-post-desc'>Explore how the subtleties in your handwriting can indicate your emotional state and psychological well-being.</div>
    </div>
    </Link>

    <Link href="/blog6" style={{color:'white',textDecoration:"none"}}>
    <div className="blog-post">
    <Image src="/thumb6.jpg" className="blog-thumbnail" alt="Thumbnail" width={240} height={200} />
        <div className='blog-post-title' style={{textDecoration:'underline'}}>Historical Figures and Their Handwriting</div>
        <div className='blog-post-desc'>Take a journey through time by analyzing the handwriting of famous historical figures and uncovering their personalities.</div>
    </div>
    </Link>
    
    </div>      
    </div>
    <Footer />
    </>
  )
}

export default page