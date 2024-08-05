"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavbarLight from '../NavbarLight';
import Footer from '../Footer';
import '../main.css'

const page = () => {
  return (
    <>
    <NavbarLight />

       {/* 3 services section */}
    {/* 1st section - handwriting analysis */}
    
    <div className = "service-1" id="service-1">
    
    <div className="service-right-content">
    <div className="service-title">Handwriting Analysis</div>
    <div className="service-description">
    <ul>
    <li className="service-point"> <span className="pointer-desc">Detailed Character Assessment</span>: Understand your personality traits, behaviors, and tendencies through an expert analysis of your handwriting.</li>
    <li className="service-point"><span className="pointer-desc">Identify Strengths and Weaknesses</span>: Discover key strengths and potential areas for improvement based on the unique features of your handwriting</li>
    <li className="service-point"><span className="pointer-desc">Professional Evaluation</span>: Receive a thorough and accurate analysis from a certified graphologist with expertise in handwriting interpretation.</li>
    <li className="service-point"><span className="pointer-desc">Unique Perspective</span>: Gain an unconventional yet enlightening view of your personal attributes and behaviors through the lens of handwriting analysis.</li>
    <li className="service-point"><span className="pointer-desc">Trend Analysis</span>: Identify changes or trends in your handwriting over time to track personal growth or shifts in mental state.</li>
    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfpFSPwLCVZCqK6ISgl97K-l-rttkDLr5YGn2QBRJhIO69IDg/viewform?usp=pp_url&entry.1247869358=Handwriting+Analysis" target="_blank"><button className="book-session">Book a Session</button></Link>
    
    </ul>
    </div>
    </div>
    <div className="service-left-image">
    <Image src="/analysis.jpg" className="service-image-1" alt="Service Image" width={800} height={800} />
     </div>
    
    </div>

    {/* 2nd section - handwriting correction counselling */}
    <div className="service-2" id="service-2">
    <div className="service-left-content">
    <div className="service-title" style={{paddingBottom:'2px'}}>Handwriting Correction Counselling</div>
    <div className="service-description" style={{paddingTop: '2px', marginTop:'2px'}}>
    <ul>
    <li className="service-point"> <span className="pointer-desc">Detailed Character Assessment</span>: Understand your personality traits, behaviors, and tendencies through an expert analysis of your handwriting.</li>
    <li className="service-point"><span className="pointer-desc">Identify Strengths and Weaknesses</span>: Discover key strengths and potential areas for improvement based on the unique features of your handwriting</li>
    <li className="service-point"><span className="pointer-desc">Professional Evaluation</span>: Receive a thorough and accurate analysis from a certified graphologist with expertise in handwriting interpretation.</li>
    <li className="service-point"><span className="pointer-desc">Unique Perspective</span>: Gain an unconventional yet enlightening view of your personal attributes and behaviors through the lens of handwriting analysis.</li>
    <li className="service-point"><span className="pointer-desc">Trend Analysis</span>: Identify changes or trends in your handwriting over time to track personal growth or shifts in mental state.</li>
    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfpFSPwLCVZCqK6ISgl97K-l-rttkDLr5YGn2QBRJhIO69IDg/viewform?usp=pp_url&entry.1247869358=Handwriting+Correction+Counselling" target="_blank"><button className="book-session">Book a Session</button></Link>
        

    </ul>
    
    </div>
    
    
    </div>
    <div className="service-right-image"> <Image src="/correction.jpg" className="service-image-2" alt="Service Image" width={200} height={200} /> </div>
    </div>
    

    {/* 3rd section - learn and earn with graphology */}
    
    <div className = "service-3" id="service-3" >
    
    <div className="service-right-content">
    <div className="service-title-3">Interested in learning and earning with Graphology?</div>
    <div className="service-description" >Join our comprehensive graphology course and embark on a journey of self-discovery and professional growth.
    <ul>
    <li className="service-point"> <span className="pointer-desc">Expert Knowledge Acquisition</span>: Gain comprehensive knowledge in graphology, learning how to analyze handwriting to uncover personal and professional insights.</li>
    <li className="service-point"><span className="pointer-desc">Certification Opportunities</span>: Earn certifications that validate your expertise in graphology, enhancing your credentials and career prospects in various fields.</li>
    <li className="service-point"><span className="pointer-desc">Income Potential</span>: Leverage your graphology skills to create multiple income streams, including consulting, workshops, writing, and personalized analysis services.</li>
    <li className="service-point"><span className="pointer-desc">Career Versatility</span>: Open doors to various career paths, from becoming a professional graphologist to integrating handwriting analysis into coaching, counseling, or HR roles.</li>
    <li className="service-point"><span className="pointer-desc">Personal Growth</span>: Apply graphology techniques for self-improvement and to gain insights into your personal growth areas, enhancing your self-awareness and interpersonal relationships.</li>
    <Link href="https://forms.gle/gq2wxS42tcdravG29" target="_blank"><button className="book-session-2" >Fill This Form</button></Link>
    
    </ul>
    
    
    </div>
    
    </div>
    <div className="service-left-image">
    <Image src="/learn.jpg" className="service-image-1" alt="Service Image" width={200} height={200} />
     </div>
    
    </div>

    <div className='faq-section' id='faq'>
    <div className='faq-title'>Frequently Asked Questions</div>
    <div className='faq-question'>1. What is handwriting analysis? </div>
    <div className='faq-answer'>Handwriting analysis is the study of handwriting to understand personality traits, behaviors, and tendencies. It involves examining various elements of handwriting to gain insights into an individual&apos;s character.</div>
    <div className='faq-question'>2. How does handwriting benefit me?</div>
    <div className='faq-answer'>Handwriting analysis can help you understand your personal strengths and weaknesses, identify areas for improvement, and gain a unique perspective on your behaviors. It can also assist in personal growth by tracking changes in your handwriting over time.</div>
    <div className='faq-question'>3. How do I book a session for handwriting analysis or correction counseling?</div>
    <div className='faq-answer'>You can book a session by clicking on the &apos;Book a Session&apos; button on our website. This will direct you to a form where you can choose the service you&apos;re interested in and schedule an appointment.</div>
    <div className='faq-question'>4. What are the benefits of learning graphology?</div>
    <div className='faq-answer'>Learning graphology can provide you with expert knowledge in handwriting analysis, certification opportunities, income potential, career versatility, and personal growth. It can open doors to various career paths and enhance your self-awareness and interpersonal relationships.</div>
    <div className='faq-question'>5. Are there any prerequisites for the graphology course?</div>
    <div className='faq-answer'>There are no specific prerequisites for the graphology course. However, an interest in handwriting analysis, psychology, or personal development can be beneficial for a deeper understanding of the subject.</div>
    <div className='faq-question'>6. What should I do if I have more questions?</div>
    <div className='faq-answer'>If you have more questions or need further information, feel free to contact us through our website, email, phone number or social media channels. We&apos;ll be happy to assist you and provide any additional details you may need.</div>

    </div>
    
    <Footer />
    </>
  )
}

export default page