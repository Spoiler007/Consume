import React from 'react'
import { Fade } from "react-awesome-reveal";
import {BiRupee} from 'react-icons/bi'

const Menu = () => {

	const tabs = document.querySelectorAll('.tabs__wrap ul li');
	const all = document.querySelectorAll('.item_wrap');
	const foods = document.querySelectorAll('.food');
	const beverage = document.querySelectorAll('.beverage');
	const snacks = document.querySelectorAll('.snack');
	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			tabs.forEach(tab => {
				tab.classList.remove('active')
			});
			tab.classList.add('active');

			const tabval = tab.getAttribute('data-tabs');
			all.forEach(item => {
				item.style.display = 'none';
			});

			if (tabval == 'food') {
				all.forEach(item => {
					item.style.display = 'block';
				});
			}
			else if (tabval == 'snack') {
				snacks.forEach(item => {
					item.style.display = 'block';
				});
			}
			else if (tabval == 'beverage') {
				beverage.forEach(item => {
					item.style.display = 'block';
				});
			}
			else {
				all.forEach(item => {
					item.style.display = 'block';
				});
			}
		});
	});


	return (
		<section id='menu'>
			<div className='container'>
				<Fade cascade damping={0.1}>
					<div className='max-w-md mx-auto text-center'>
						<h2 className='section__title'>OUR BEST MENU</h2>
						<div className='seperator mx-auto'></div>
						<p className='paragraph'>Eat the best , Leave the rest</p>
						<div className='tabs__wrap'>
							<ul className='flex flex-wrap justify-center gap-3 py-10 '>
								<li data-tabs="all" className='btn bg-primaryColorLight active'>All</li>
								<li data-tabs="food" className='btn bg-primaryColorLight'>Food</li>
								<li data-tabs="snack" className='btn bg-primaryColorLight'>Snack</li>
								<li data-tabs="beverage" className='btn bg-primaryColorLight'>Beverage</li>
							</ul>
						</div>
					</div>
				</Fade>
				<div>
					<ul className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12'>

						{/* food */}
						<Fade cascade damping={0.05}>

							<li className='item_wrap food'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/burger-1.png' alt='food image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>REGULAR MUTTON BURGER</h4>
										<p className='paragraph'>Double layer with sliced cheese and salad</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap food'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/burger-2.png' alt='food image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>REGULAR veggie BURGER</h4>
										<p className='paragraph'>Crispy potato fry , cheese</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap food'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/burger-3.png' alt='food image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>REGULAR CHICKEN BURGER</h4>
										<p className='paragraph'>Chicken with extra cheese and salad</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap food'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/burger-4.png' alt='food image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>REGULAR fish BURGER</h4>
										<p className='paragraph'>Deeply fried fish with light cheese and salad</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap food'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/burger-5.png' alt='food image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>REGULAR panner BURGER</h4>
										<p className='paragraph'>Panner with light cheese and salad</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>
						</Fade>

						{/* snacks */}
						<Fade cascade damping={0.05}>
							<li className='item_wrap snack'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/snack-1.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>FRENCH FRIES</h4>
										<p className='paragraph'>Cheese french fries</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap snack'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/snack-2.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>FRENCH FRIES</h4>
										<p className='paragraph'>Masala french fries</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap snack'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/snack-3.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'> veggie Sandwich</h4>
										<p className='paragraph'>With lite cheese and salad</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap snack'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/snack-4.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>Potato chips</h4>
										<p className='paragraph'>Deeply fried with masala</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap snack'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/snack-5.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>FRENCH FRIES</h4>
										<p className='paragraph'>French Fries with Ketchupp</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap snack'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/snack-6.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>Popcorn</h4>
										<p className='paragraph'>normal,cheese,masala</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>
						</Fade>
						{/* beverage */}

						<Fade cascade damping={0.05}>
							<li className='item_wrap beverage'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/beverage-1.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-32 sm:w-32 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>BANANA SMOOTHIE</h4>
										<p className='paragraph'>A delicious banana smoothie to lighten up your mood</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap beverage'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/beverage-2.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>MIXED FRUIT SMOOTHIE</h4>
										<p className='paragraph'>A refreshing smoothie made with mango, watermelon and blackberries</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

							<li className='item_wrap beverage'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/beverage-3.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>BLUEBERRY SMOOTHIE</h4>
										<p className='paragraph'>A sweet blueberry smoothie</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>150.00</p>
								</div>
							</li>

							<li className='item_wrap beverage'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/beverage-4.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-32 sm:w-32  lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>ORANGE JUICE</h4>
										<p className='paragraph'>Hydrate yourself with some fresh orange juice.</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>2.00</p>
								</div>
							</li>

							<li className='item_wrap beverage'>
								<div className='dark:bg-darkColorLight  h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
									<img src='img/beverage-5.png' alt='snack image' className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
								</div>
								<div className='pt-5'>
									<div className='mb-2'>
										<h4 className='card__title'>BLOODY MARY COCKTAIL</h4>
										<p className='paragraph'>Try some of our Bloody Mary Cocktail at 3AM</p>
									</div>
									<p className='text-secondaryColor flex flex-row'><BiRupee className='translate-y-1'/>42.00</p>
								</div>
							</li>

						</Fade>
					</ul>
				</div>
			</div>
		</section >
	)
}

export default Menu;