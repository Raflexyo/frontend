"use client";
import Link  from 'next/link';
import { useEffect, useRef, useState } from 'react';
//---------------------ICONS------------------------------
import { MdArrowDropDown, MdArrowDropUp, MdTheaters  } from 'react-icons/md';
import { FaRankingStar, FaApple, FaScissors  } from "react-icons/fa6";
import { IoLogoGameControllerB } from "react-icons/io";
import { GrSystem, GrPaint, GrArticle  } from "react-icons/gr";
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';
import { FaFileCsv,FaShoppingBag  } from "react-icons/fa";
import { SiLeagueoflegends } from "react-icons/si";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useTheme } from 'next-themes';


export default function NavBar() {

  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  const settingsBar = useRef<HTMLDivElement>(null);

  const Array = [
    {subdomain:"lol",    name:"League of Legends", icon: <SiLeagueoflegends />},
    {subdomain:"csv",    name:"CSV Reader",        icon: <FaFileCsv />},
    {subdomain:"influ",  name:"InfluRank",         icon: <FaRankingStar />},
    {subdomain:"iphone", name:"Iphone",            icon: <FaApple />},
    {subdomain:"cinema", name:"Cinema",            icon: <MdTheaters />},
    {subdomain:"os",     name:"Rafte.ch OS",       icon: <GrSystem />},
    {subdomain:"art",    name:"Artwork",           icon: <GrPaint />},
    {subdomain:"blog",   name:"Blog",              icon: <GrArticle />},
    {subdomain:"hair",   name:"Hairdresser",       icon: <FaScissors />},
    {subdomain:"shop",   name:"Shop",              icon: <FaShoppingBag />},
    {subdomain:"games",  name:"Games",             icon: <IoLogoGameControllerB />},
    
  ]

  function getSubdomain(url:any) {
    const hostname = new URL(url).hostname;
    const parts = hostname.split('.');
    if (parts.length >= 2) {
        return parts[0];
    }
    return null; 
  }
  let currentSubdomain = null;

  if (typeof window !== 'undefined') {
    currentSubdomain = getSubdomain(window.location.href);
  }


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (linksRef.current && !linksRef.current.contains(event.target as Node)) {
        setShowLinks(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return(
    <div className="flex h-10 bg-primary justify-between text-white">
          
    <Link className='flex h-10 items-center bg-white dark:bg-secondary px-3' href="/">
      <span className='font-bold text-base md:text-lg tracking-wide text-text_light dark:text-white first-letter:text-pink'>RAFTE.CH</span>
    </Link> 

    <div className="bg-nav w-full h-10 flex justify-between">

    <div ref={linksRef} className='flex items-center position: relative z-50'>
      <button onClick={()=>(setShowLinks(!showLinks))} className='flex gap-1 items-center'>
        <div className={`flex justify-between h-10 items-center font-medium text-sm hover:bg-navHover w-[175px]`}>
            <span className='flex items-center'><FaFileCsv  className='mx-1'/>CSV Reader</span>
            {!showLinks ? (<MdArrowDropDown className='w-5 h-5'/>):(<MdArrowDropUp className='w-5 h-5'/>)}
        </div>
        {showLinks && <div className='absolute top-full left-0 w-[175px] bg-nav flex flex-col content-center z-10 rounded-b-md overflow-hidden'>
                {Array.filter(item => item.subdomain !== currentSubdomain).map((item, index) => (
                  <Link href={`https://${item.subdomain}.rafte.ch`} target="_blank" key={index} className='h-8 py-1 flex gap-1 justify-between items-center px-2 hover:bg-navHover border-t-[1px] border-navHover'>
                    <div className='flex gap-1 justify-between items-center'>{item.icon}<span className='text-xs'>{item.name}</span></div>
                    <RxOpenInNewWindow  className='text-white w-3 h-3'/>
                  </Link>
                ))}
              </div>}
      </button>
      </div>

      <div ref={settingsBar} className='flex items-center gap-2 px-2 position: relative'>
        <ThemeToggle/>
      </div>
        
    </div>

  </div>
  );
}


function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    console.log(theme)

    return (
        <button onClick={toggleTheme} className='w-12 h-6 rounded-[20px] bg-lol_light px-[2px] py-[2px] overflow-hidden flex justify-center items-center'>
          <div className={`w-[48px] h-[20px] rounded-[16px] transition-colors dark:bg-blue-950 bg-sky-500 flex ${theme === "dark" ? ('justify-end'): ('justify-start') } items-center p-[2px] position: relative`}>
          <div className='rounded-full bg-white w-[16px] h-[16px] position: absolute dark:left-[2px] left-[26px] transition-all'></div>
          {theme === 'dark' ? (
            <div><IoMoonSharp className='h-[16px] w-[16px] text-yellow-400'/></div>
          ) : (
            <div><IoSunnySharp className='h-[16px] w-[16px] text-yellow-400'/></div>
          )}
          </div>
          
        </button>
    );
}
