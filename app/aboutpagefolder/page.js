import React from 'react'
import NavbarDark from '../NavbarDark'
import Image from 'next/image'
import Footer from '../Footer'
import NavbarLight from '../NavbarLight'
import '../main.css'

const Page = () => {
  return (
    <>
    <NavbarLight />
    <div className='journey'>
        <div className='journey-heading'>Shalini Sanoria&apos;s Journey</div>
    </div>
    <div className="about-section-1">
        <div className='photo-left'>
            <Image src="/shalini.jpg" className='photo' alt="Shalini Sanoria" width={230} height={230} />
        </div>
        <div className='about-right'>
        <span style={{fontWeight:'bold'}}>Shalini Sanoria</span> is a dedicated graphologist whose expertise lies in the fascinating art and science of handwriting analysis. With a keen eye and years of experience, she delves into the intricate strokes and nuances of handwriting to uncover insights into personality traits, behaviors, and potential. Shalini&apos;s passion for graphology extends beyond mere analysis; she believes in the profound impact handwriting can have on understanding oneself and others. Through her meticulous approach and deep understanding of the field, Shalini Sanoria helps individuals gain self-awareness, improve communication, and navigate personal and professional relationships more effectively. Her commitment to graphology as a tool for personal growth and development underscores her belief in the power of handwriting as a window to the soul.
        </div>
    </div>
    <div className="about-section-2">
    <div className='photo-right'>
            <Image src="/shalini2.jpg" className = 'photo' alt="Shalini Sanoria" width={710} height={499} />
        </div>
        <div className='about-left'>
        <span style={{fontWeight:'bold'}}>Shalini Sanoria</span> is a skilled graphologist with a deep passion for the art and science of handwriting analysis. Combining years of expertise with a meticulous approach, she examines the subtle details of handwriting to reveal insights into individual personality traits, behaviors, and potential. Shalini is dedicated to more than just interpreting handwriting; she sees it as a powerful means for personal and interpersonal understanding. Her work emphasizes the transformative effect that handwriting analysis can have on self-awareness, communication, and relationship management. By leveraging her extensive knowledge in graphology, Shalini Sanoria assists people in enhancing their personal and professional lives, affirming her belief in handwriting as a profound tool for self-discovery and growth.        </div>
        
    </div>
    <Footer />
    </>
  )
}

export default Page