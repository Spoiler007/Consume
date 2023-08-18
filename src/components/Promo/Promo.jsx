import React from 'react'
import  Fade  from "react-awesome-reveal";

const Promo = () => {
    return (
        <section id="promo">
            <div className='dark:bg-darkColorLight container flex flex-col gap-5 lg:gap-10 lg:flex-row'>
                <Fade cascade damping={1.2}>
                    <div className='dark:bg-darkColorLight bg-primaryColorLight  flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 '>
                        <img src='img/promo-1.png' alt='promo image' className='w-40 mx-auto hover:animate-movingY md:mx-5' />
                        <div className=' space-y-2 pt-5 md:pt-0'>
                            <p className='text-x5 text-secondaryColor'>Payday Promo</p>
                            <h3 className='card__title'>GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                            <p className='paragraph'>Burger,
                            French Fries</p>
                            <a href='#' className='text-xs text-secondaryColor'>Grabe Now</a>
                        </div>
                    </div>

                    <div className='dark:bg-darkColorLight  bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1'>
                        <img src='img/promo-2.png' alt='promo image' className='w-40 mx-auto hover:animate-movingY md:mx-5' />
                        <div className='space-y-2 pt-5 md:pt-0'>
                            <p className='text-x5 text-secondaryColor'>Payday Promo</p>
                            <h3 className='card__title'>GET A 15% DISCOUNT ON PAYDAY WEEK</h3>
                            <p className='paragraph'>Soft Drinks</p>
                            <a href='#' className='text-xs text-secondaryColor'>Grabe Now</a>
                        </div>
                    </div>

</Fade>
            </div>
        </section>
    )
}

export default Promo;