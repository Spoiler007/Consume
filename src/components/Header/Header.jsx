import React, { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { BiMoon } from 'react-icons/bi'
import {GiHeraldicSun} from 'react-icons/gi'
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Header = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [theme,setTheme] = useState("light");
useEffect(()=>{
  if(theme == "dark"){
    document.documentElement.classList.add("dark");

  }
  else{
    document.documentElement.classList.remove("dark");
   
  }
  
},[theme]);


// custom according to the individual device theme mode
// useEffect(()=>{
//   if(window.matchMedia('(prefers-color-scheme:dark)').matches){
// setTheme('dark');
//   }
//   else{
//     setTheme('light');
//   }
  
// },[])


const handleThemeSwitch = () =>{
setTheme(theme === "dark"?"light":"dark")
setIsIconClicked(!isIconClicked);

};



  const [showMenu, setShowMenu] = useState(false);
  const [showMoon, setShowMoon] = useState(false);

  return (

    // <header className='bg-primaryColor fixed top-0 left-0 w-full z-50'>
    <nav className='container  flex justify-between item-center p-4 '>
      <a className='text-2xl uppercase font-oswald ' href='#'>
        Con<span className='text-secondaryColor '>Sume</span>
      </a>
      <div id='nav-menu' className={!showMenu?' dark:bg-blackColor p-4 md:p-0 -top-full absolute w-full bg-primaryColor border-b border-secondaryColor md:flex md:relative md:border-none md:w-auto items-center ':' z-50 p-4 md:p-0 top-0 left-0 absolute w-full bg-primaryColor border-b border-secondaryColor md:flex md:relative md:border-none md:w-auto items-center'}>
        <ul className='flex flex-col md:flex-row items-center text-center gap-10 py-5'>
          <li>
            <a className='nav__link hover:text-secondaryColor ease-in duration-200' href='#home'>Home</a>
          </li>
          <li>
            <a className='nav__link hover:text-secondaryColor ease-in duration-200' href='#about'>About Us</a>
          </li>
          <li>
            <a className='nav__link hover:text-secondaryColor ease-in duration-200' href='#menu'>Menu</a>
          </li>
          <li>
            <a className='nav__link hover:text-secondaryColor ease-in duration-200' href='#review'>Review</a>
          </li>
          <li>
            <a className='nav__link hover:text-secondaryColor ease-in duration-200' href='#contact'>Contact</a>
          </li>

        </ul>
        <button onClick={()=>{setShowMenu(false)}}>
        <RxCross2 className=' hover:text-secondaryColor text-2xl cursor-pointer absolute top-5 right-7  md:hidden' id='nav-close'  />
        </button>

      </div>
      <div className='flex items-center text-center gap-5'>
<div>
<button onClick={handleThemeSwitch} >
        {!isIconClicked?<BiMoon  className='cursor-pointer text-2xl hover:text-secondaryColor' id='theme-toggle'/> : <GiHeraldicSun className='cursor-pointer text-2xl hover:text-secondaryColor'/> }
</button>
</div>

        <button onClick={()=>{setShowMenu(true)}}>
        <FaHamburger className='cursor-pointer md:hidden text-2xl hover:text-secondaryColor'  />
        </button>
        

      </div>
    </nav>
    // </header>


  );
}

export default Header;