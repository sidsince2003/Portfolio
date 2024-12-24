import React from 'react';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <span className='text-xl text-slate-500 dark:text-slate-400 font-bold'>
                Siddharth 
              </span>
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              About
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              Skills
            </a>

            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#blog">
              Blog
            </a>

            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              Blogs
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              Contacts
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <ThemeSwitch />
            <a
              className="hidden items-center justify-center rounded-xl bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-700 sm:inline-flex"
              href="https://www.linkedin.com/in/sidsince2003/"
            >
              Linkedin
            </a>
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="https://github.com/sidsince2003"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;