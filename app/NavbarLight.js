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
        <Link href='/' className='navbar-light-comps' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div > Home </div></Link>
        
        <div className='navbar-light-comps'> <Link href='/blogspagefolder' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}>Blogs </Link> </div>
        <div className='dropdown'>
        <Link href='/servicespagefolder' className='navbar-light-comps' style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}><div > Services </div></Link>
        </div>
        <Link href="/aboutpagefolder"><div className='navbar-light-comps'  style={{color: 'rgba(3,3,3,255)', textDecoration: 'none'}}> About</div></Link>
        </div>
        </div>
    </>
  )
}

export default NavbarLight