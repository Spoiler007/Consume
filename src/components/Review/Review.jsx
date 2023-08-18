import React from 'react'
import { MdFormatQuote } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Review = () => {

    return (
        <section id='review' className='bg-primaryColorLight py-20 dark:bg-darkColorLight '>
            <div className='container'>
                <div className='max-w-md mx-auto text-center'>
                    <h2 className='section__title'>CUSTOMER REVIEW</h2>
                    <div className='seperator mx-auto'></div>
                    <p className='paragraph mb-10'> Thanks for taking the time to leave a positive review</p>

                </div>
                <div className='swiper py-10'>
                    <ul className='swiper-wrapper'>
                        <Swiper
                            modules={[Pagination, Autoplay,A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <li className='swiper-slide'>
                                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                                        <p className='paragraph'>The portions are generous and the burgers or the grilled chicken fillet are very tasty!</p>
                                        <div className='felx items-center'>
                                            <img src='img/review-1.jpg' alt='review image' className='w-12 h-12 rounded-full' />
                                            <div className='ml-2'>
                                                <p className='font-oswald uppercase'>Mukesh Sinha</p>
                                                <p className='paragraph'> Designer Lead</p>
                                            </div>
                                            <MdFormatQuote className='text-4xl text-secondaryColor ml-auto' />
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li className='swiper-slide'>
                                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                                        <p className='paragraph'>Very good, clean, prompt service! Nice choice of foods! Good prices! I especially liked the chicken offering! Drink selection was good also!</p>
                                        <div className='felx items-center'>
                                            <img src='img/review-2.jpg' alt='review image' className='w-12 h-12 rounded-full' />
                                            <div className='ml-2'>
                                                <p className='font-oswald uppercase'></p>
                                                <p className='paragraph'> Designer</p>
                                            </div>
                                            <MdFormatQuote className='text-4xl text-secondaryColor ml-auto' />
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li className='swiper-slide'>
                                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                                        <p className='paragraph'>I have to say, I didn't think I could be so impressed by a burger joint, but I am. This place does Burgers!</p>
                                        <div className='felx items-center'>
                                            <img src='img/review-3.jpg' alt='review image' className='w-12 h-12 rounded-full' />
                                            <div className='ml-2'>
                                                <p className='font-oswald uppercase'>Rudra Karmakar</p>
                                                <p className='paragraph'>Production Head</p>
                                            </div>
                                            <MdFormatQuote className='text-4xl text-secondaryColor ml-auto' />
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li className='swiper-slide'>
                                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                                        <p className='paragraph'>Burgers are delicious. Fast, nice variety of choices, generous portions on the french fries. Enough tables to dine in. Good burgers, we like this place!</p>
                                        <div className='felx items-center'>
                                            <img src='img/review-4.jpg' alt='review image' className='w-12 h-12 rounded-full' />
                                            <div className='ml-2'>
                                                <p className='font-oswald uppercase'>abcd</p>
                                                <p className='paragraph'>Customer</p>
                                            </div>
                                            <MdFormatQuote className='text-4xl text-secondaryColor ml-auto' />
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li className='swiper-slide'>
                                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                                        <p className='paragraph'>This place is great!! After reading reviews we decided to try this out and were not disappointed.</p>
                                        <div className='felx items-center'>
                                            <img src='img/review-5.jpg' alt='review image' className='w-12 h-12 rounded-full' />
                                            <div className='ml-2'>
                                                <p className='font-oswald uppercase'>Soham Chowdhury</p>
                                                <p className='paragraph'> Chief Co-ordinator</p>
                                            </div>
                                            <MdFormatQuote className='text-4xl text-secondaryColor ml-auto' />
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                        </Swiper>
                    </ul>

                    <div className='swiper-pagination'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;