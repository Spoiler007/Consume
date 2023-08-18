import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
const about = () => {
  return (
    <section id="about">
      <div className='container flex flex-col gap-10 md:flex-row'>
        <div className='flex-1'>
          <img src='img/about.jpg' alt='about image' className='rounded-lg' />
        </div>
        <div className='flex-1'>
          <h2 className='section__title'>FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE</h2>
          <div className='separator'></div>
          <p className='paragraph'>Eat Healthy-Look Healthy-Feel Healthy</p>
          <ul className='grid grid-cols-2 py-5 space-y-1'>
            <li className='text-xs text-paragraphColor flex gap-2'>
              <GiCheckMark  className='text-secondaryColor'/>
              Best Price

            </li>
            <li  className='text-xs text-paragraphColor flex gap-2'>
              <GiCheckMark className='text-secondaryColor' />
              Fresh Ingredient

            </li>
            <li  className='text-xs text-paragraphColor flex gap-2'>
              <GiCheckMark className='text-secondaryColor'/>
              Best Service

            </li>
            <li  className='text-xs text-paragraphColor flex gap-2'>
              <GiCheckMark className='text-secondaryColor'/>
              Health Protocol

            </li>
          </ul>
            <a href='#' className='btn btn-primary'>About Us</a>
        </div>
      </div>
    </section>
  )
}

export default about;