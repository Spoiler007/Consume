import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { MdOutlineFacebook } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { FaCopyright } from 'react-icons/fa'
import { BiUpArrowCircle } from 'react-icons/bi'
import  Fade  from "react-awesome-reveal"; 
const Footer = () => {
    return (
        <section id='footer'>
            <div className='container'>
                <ul className='grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4'>
                
                    <li>
                        <div className='space-y-3'>
                            <a href='#' className='text-4xl font-oswald uppercase'>
                                Con<span className='text-secondaryColor'>Sume</span>
                            </a>
                            <p className='text-xs'>
                            Life is too short to miss out on the beautiful things like Burger
                            </p>
                        </div>
                    </li>
                 
                    <li>
                        <div className='flex flex-col gap-3'>
                            <h3 className='text-lg uppercase font-oswald'>SUPPORT</h3>
                            <a href='#' className='text-xs hover:text-secondaryColor'>FAQ's</a>
                            <a href='#' className='text-xs hover:text-secondaryColor'>Privacy Policy</a>
                            <a href='#' className='text-xs hover:text-secondaryColor'>Term & Condition</a>
                            <a href='#' className='text-xs hover:text-secondaryColor'>Contact</a>
                        </div>
                    </li>
                    <li className='space-y-8'>
                        <div className='space-y-2'>
                            <h3 className='text-lg uppercase font-oswald'>Phone</h3>
                            <p className='flex items-center gap-2 text-xs'>
                                <FaPhoneAlt className='text-lg text-secondaryColor' />
                                91+ 1234567890
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-lg uppercase font-oswald'>Email</h3>
                            <p className='flex items-center gap-2 text-xs'>
                                <MdEmail className='text-lg text-secondaryColor' />
                                abcd@gmail.com
                            </p>
                        </div>
                    </li>

                    <li className='space-y-8'>
                        <div className='space-y-2'>
                            <h3 className='text-lg uppercase font-oswald'>Address</h3>
                            <p className='flex items-center gap-2 text-xs'>
                                <ImLocation2 className='text-lg text-secondaryColor' />
                                Kolkata-50,India
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-lg uppercase font-oswald'>Follow Us</h3>
                            <div className='space-x-3 flex'>
                                <MdOutlineFacebook className='text-lg cursor-pointer text-secondaryColor hover:-translate-y-2 ease  duration-300' />
                                <BsTwitter className='text-lg cursor-pointer text-secondaryColor hover:-translate-y-2 ease  duration-300' />
                                <FaInstagramSquare className='text-lg cursor-pointer text-secondaryColor hover:-translate-y-2 ease  duration-300' />
                            </div>
                        </div>
                    </li>
                </ul>
                <Fade cascade damping={1.2}>
                <div className='flex flex-col items-center border-t border-primaryColorLight py-5 md:flex-row md:justify-between '>
                    <p className='paragraph'>Designed by <a href='https://github.com/Spoiler007' target='blank' className='text-secondaryColor'>Spoiler007</a></p>
                    <p className='paragraph'>Copyright<FaCopyright className='text-secondaryColor'/> 2023.All rights reserved.</p>

                </div>
                    </Fade>

            
            </div>
        </section>
    )
}

export default Footer;