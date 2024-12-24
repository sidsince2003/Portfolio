import React from 'react'

const About = () => {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-white dark:bg-gray-900 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
                <br className="block sm:hidden" />About Me
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-900 dark:text-gray-300 md:mt-8">
                I am Siddharth Sharma, a 4th-year AIML student with a strong foundation in full-stack development and hands-on experience in HTML, CSS, Tailwind CSS, React, Django, Flask, MongoDB, and more. Passionate about bridging technology and real-world applications, I am expanding my expertise in AI and machine learning to develop innovative solutions.
              </p>

              <p className="mt-4 text-xl text-gray-800 dark:text-gray-300 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-yellow-500/50"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2 dark:opacity-50"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="../profile.png"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About