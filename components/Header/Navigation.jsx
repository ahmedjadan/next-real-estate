import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { navigation } from './data';
import Link from 'next/link';
import { BsFillTelephoneFill } from 'react-icons/bs';
function Navigation() {
  const router = useRouter();
  const [navActive, setNavActive] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    const changeBgOnScroll = () => {
      if (window.scrollY >= 100) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };
    window.addEventListener('scroll', changeBgOnScroll);
  }, [navActive]);

  return (
    <header className="">
      <nav
        className={`fixed h-24 w-full container z-20 inset-x-0  items-center${
          navActive
            ? '  h-12 bg-white duration-300 shadow-sm dark:shadow-xl'
            : ''
        } z-20 px-2  mx-auto  md:px-4 md:flex md:space-x-4 `}
      >
        <div className="max-w-6xl flex justify-between items-center h-full md:w-full  mx-auto">
          <div className="flex w-full md:w-auto h-full justify-between ">
            <Link href="/">
              <a
                className={` duration-200 flex items-center font-bold text-2xl text-indigo-600 ${
                  navActive ? ' ' : ''
                } `}
              >
                {/* <Image
                src={logo}
                width={200}
                height={80}
                objectFit="contain"
                alt="شعار النخبة"
                className="w-[100px] md:w-[200px]"
              /> */}
                Real <span className="text-gray-700">Estate</span>
              </a>
            </Link>

            <button
              className="text-gray-500 outline-none md:hidden "
              onClick={() => setState(!state)}
              aria-label="toggole menu icon"
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`shadow-md  mt-20  absolute right-0 z-20 top-0  w-1/2 sm:shadow-none md:block sm:border-0  sm:mt-0 md:static md:w-auto ${
              state ? 'p-6 bg-white w-full' : 'hidden '
            }`}
          >
            <li className=" order-1 justify-between sm:flex md:justify-end items-center space-y-4  sm:space-y-0">
              {navigation.map((item, idx) => (
                <Link href={`${item.href}`} passHref key={idx}>
                  <a
                    //onClick={() => setState(!state)}
                    className={`flex text-gray-700 hover:text-indigo-600 dark:text-gray-100 lg:px-4 px-2    ${
                      router.pathname === item.href ||
                      router.asPath === item.path
                        ? ' !text-indigo-600  font-semibold duration-150 '
                        : ''
                    }  ${navActive ? 'text-xl' : 'text-xl'}`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </li>
          </ul>
          <div className="hidden md:flex items-center">
            {' '}
            <BsFillTelephoneFill className="mr-1 text-indigo-600 "/>
            <p className="font-semibold  text-gray-800">+2012987652</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
