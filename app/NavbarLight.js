"use client";
import React from 'react';
import './main.css';
import Link from 'next/link';
import Page from './contactpagefolder/page';
import Head from 'next/head';

const NavbarLight = () => {
  return (
    <>
        <div className="navbar-light">
        <div className="navbar-first-sec">
        <Link href='/' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div className='navbar-light-heading'> LearnGraphology</div></Link>
        <Link href="/contactpagefolder"><button className='navbar-light-contact'>Contact</button> </Link>
        </div>
        <div className='navbar-all-comps'>
        <Link href='/' className='navbar-light-comps' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none',marginLeft:'20px'}} ><div onMouseEnter={e => e.target.style.color = 'purple'}
  onMouseLeave={e => e.target.style.color = 'rgba(3,3,3,255)'}> Home </div></Link>
        
        <div className='navbar-light-comps'> <Link href='/blogspagefolder' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none',marginLeft:'20px'}}  onMouseEnter={e => e.target.style.color = 'purple'}
  onMouseLeave={e => e.target.style.color = 'rgba(3,3,3,255)'}>Blogs </Link> </div>
        <div className='dropdown'>
        <Link href='/servicespagefolder' className='navbar-light-comps' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none',marginLeft:'20px'}} ><div onMouseEnter={e => e.target.style.color = 'purple'}
  onMouseLeave={e => e.target.style.color = 'rgba(3,3,3,255)'} > Services </div></Link>
      <div className='dropdown-content'>
        <Link href='/servicespagefolder/#service-1' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div>Handwriting Analysis</div></Link>
        <Link href='/servicespagefolder/#service-2' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div>Handwriting Correction Counselling</div></Link>
        <Link href='/servicespagefolder/#service-3' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div>Learn and earn with Graphology</div></Link>
        <Link href='/servicespagefolder/#faq' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div>FAQ&apos;s</div></Link>
        </div>
        </div>
        <Link href="/aboutpagefolder"><div className='navbar-light-comps'  style={{color: 'rgba(3,3,3,255)', textDecoration: 'none',marginLeft:'20px'}}  onMouseEnter={e => e.target.style.color = 'purple'}
  onMouseLeave={e => e.target.style.color = 'rgba(3,3,3,255)'}> About</div></Link>
        </div>
        </div>
    </>
  )
}

export default NavbarLight