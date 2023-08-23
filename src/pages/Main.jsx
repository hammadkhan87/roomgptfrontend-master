import { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import SquigglyLines from "../components/SquigglyLines";
import Header1 from '../components/Header1.jsx';


const Main = ()=>{

    return(
        <>
        {/* <Header/> */}
 
          {/* <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Free and Open-Source Next.js Template for Startup & SaaS
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                   🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient ">
        {/* bg-[#17181C] text-white */}

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white sm:text-7xl">
          Generating dream rooms{" "}
          <span className="relative whitespace-nowrap text-primary mt-1">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{" "}
          for everyone.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Take a picture of your room and see how your room looks in different
          themes. 100% free – remodel your room today.
        </h2>
        {/* <Link
          className="bg-green-400 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-green-600 transition"
          to="/dream"
        >
          Generate your dream room
        </Link> */}
         <Link
                    to="/dream"
                    className="rounded-xl bg-primary py-4 px-8 text-base font-semibold sm:mt-10 mt-8 text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                   🔥Generate your dream room

                  </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg text-white">Original Room</h3>
                <img
                  alt="Original photo of a room with roomGPT.io"
                  src="/original-pic.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg text-white">Generated Room</h3>
                <img
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      
       
      {/* <Footer/> */}
        </>
    )
}

export default Main
