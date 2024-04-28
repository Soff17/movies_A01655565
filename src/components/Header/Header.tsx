import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ROTES } from "../../routes/constants";

const Header = () => {

    return (
        <>
            <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
                <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                    <Link to={ROTES.HOME} className='hover:text-[#46515e] text-[#46515e] block font-bold text-[20px]'>MOVIES DB</Link>
                    <div id="collapseMenu" className='hidden lg:block'>
                        <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                            </svg>
                        </button>

                        <ul className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                            <li><NavLink to={ROTES.HOME} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>HOME</NavLink></li>
                            <li><NavLink to={ROTES.POPULAR} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>POPULAR</NavLink></li>
                            <li><NavLink to={ROTES.RATED} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>TOP RATED</NavLink></li>
                            <li><NavLink to={ROTES.PLAYING} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>NOW PLAYING</NavLink></li>
                            <li><NavLink to={ROTES.FAVORITE} className={({ isActive }) => `hover:text-[#ff4444] ${isActive ? 'text-[#ff4444]' : 'text-gray-500'} block font-semibold text-[13px]`}>MY FAVORITES</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
