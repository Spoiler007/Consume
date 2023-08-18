import React from 'react'
import ReactDOM from 'react-dom/client';
import { ImSpoonKnife } from 'react-icons/im'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { BiLeaf } from 'react-icons/bi'
import  Fade  from "react-awesome-reveal";


const Home = () => {

 

    return (
        <>
            <section id='home'>
                <div className='container flex flex-col items-center gap-10 md:flex-row'>
                <Fade cascade damping={1.2}>
                    <div className='mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY '>
                        <img src="/img/home-image.png" alt='home image' className='home__image w-60 md:w-full z-50' />
                    </div>
                    <div className='text-center md:basis-1/2 md:text-start lg:basis-3/5 z-10'>
                        <h1 className='home__title'>HAPPY TUMMY TASTY BURGERS</h1>
                        <div className='seperator mx-auto md:mx-0'></div>
                        <p className='paragraph'>Our burgers are made with fresh, organic, and locally sourced ingredients. We are proud to serve you the best burgers in town!</p>


                        <div className='text-base flex items-center justify-center gap-10 py-10 md:justify-start md:gap-20'>
                            <div className='text-center items-center flex flex-col'>
                                <ImSpoonKnife className='text-secondaryColor text-4xl' />
                                <br />
                                Delicious
                            </div>
                            <div className='text-center flex flex-col'>
                                <MdOutlineWaterDrop className='text-secondaryColor text-4xl' />
                                <br />
                                Fresh
                            </div>
                            <div className='text-center items-center flex flex-col'>
                                <BiLeaf className='text-secondaryColor text-4xl' />
                                <br />
                                Organic
                            </div>
                        </div>
                        <a href='#'className='btn btn-primary'>learn more</a>
                    </div>
                    </Fade>
                </div>

            </section>
        </>
    )
}

export default Home;



