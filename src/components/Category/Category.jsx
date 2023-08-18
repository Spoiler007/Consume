import React from 'react'
import  Fade  from "react-awesome-reveal";

const Category = () => {
  return (
    <section id="category">
    <div className='container justify-around  flex flex-col gap-5 md:flex-row'>
    <Fade cascade damping={1.2}>
        <div className='bg-secondaryColor w-72 flex py-3 rounded-lg overflow-hidden md:flex-1 md:w-52'>
            <div className='basis-2/3 relative'>
                <img src="img/burger-1.png" alt="category image" className='absolute w-40 -bottom-4 -left-4 '/>
            </div>
            
            <div>
                <div className='mb-2'>
                    <h4 className='card__title'>Burger</h4>
                    <p className='text-xs pr-3'>Chicken Burger, Paneer Burger, CheeseBurger with Lettuce+Mayonaise+Ketchupp </p>
                </div>
                <a href='#' className='text-blackColor cursor-pointer'>Buy Online</a>
            </div>
        </div>
        <div className='bg-redColor w-72 flex py-3 rounded-lg overflow-hidden md:flex-1 md:w-52'>
            <div className='basis-2/3 relative'>
                <img src="img/snack-1.png" alt="category image" className='absolute w-40 -bottom-4 -left-4 '/>
            </div>
            <div>
                <div className='mb-2'>
                    <h4 className='card__title'>French Fries</h4>
                    <p className='text-xs pr-3'>Crispy Salted French Fries served with Ketchupp and Mayonaise</p>
                </div>
                <a href='#' className='text-secondaryColor cursor-pointer'>Buy Online</a>
            </div>
        </div>

        <div className='bg-greenColor w-72 flex py-3 rounded-lg overflow-hidden md:flex-1 md:w-52 '>
            <div className='basis-2/3 relative'>
                <img src="img/beverage-2.png" alt="category image" className='absolute w-40 -bottom-2 -left-2 '/>
            </div>
            <div>
                <div className='mb-2'>
                    <h4 className='card__title'>Drinks</h4>
                    <p className='text-xs pr-3'>Non-Alcoholic Beverages Smoothies, Cocktail, Soft Drinks</p>
                </div>
                <a href='#' className='text-secondaryColor cursor-pointer'>Buy Online</a>
            </div>
        </div>
        </Fade>
    </div>

    </section>
  )
}

export default Category;