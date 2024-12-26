import React from 'react';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-md border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <span className='text-xl text-slate-500 dark:text-slate-400 font-bold'>
                Portfolio
              </span>
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#About"
            >
              About
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#Skills"
            >
              Skills
            </a>

            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#blog">
              Blogs
            </a>

            
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#contact"
            >
              Contacts
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <ThemeSwitch />
            
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;