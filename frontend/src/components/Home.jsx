import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* <!-- Scan, Analyze, Decide Section --> */}
      <section className="bg-gradient-to-r from-[#00244A] to-[#1A2D43]">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
              Scan. Analyze. Decide.
            </h1>
            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-300 font-normal">
              Empower your dietary choices with our AI-based solution. Simply
              scan the ingredients list of any packed food item, and let our
              technology reveal the hidden health risks. Make informed decisions
              with ease and confidence.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <NavLink
                to='/upload'
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-5 lg:mt-0 rounded shadow-lg">
            <img src="./src/assets/images/Purelyze home page.png" alt="healthify image" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </section>
      
      {/* <!-- The Problem We're Solving Section --> */}
      <section className="bg-gradient-to-r from-[#2F4F4F] to-[#556B2F]">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-300 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                The Problem We're Solving
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>
              <ul role="list" className="pt-8 space-y-5 border-t border-gray-700 my-7">
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-white">
                    Empowering Informed Choices: Simplify understanding of complex ingredients lists for informed purchasing decisions.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-white">
                    Promoting Healthier Eating Habits: Real-time analysis of ingredients to encourage healthier food choices and reduce health risks.
                  </span>
                </li>
              </ul>
            </div>
            <img className="w-full mb-4 rounded-3xl lg:mb-0 lg:flex " src="./src/assets/boy image.jpg" alt="dashboard feature image" />
          </div>
        </div>
      </section>

      {/* <!-- Our Solution Section --> */}
      <section className="bg-gradient-to-r from-[#00454F] to-[#081724]">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img className="w-full mb-4 rounded-3xl lg:mb-0 lg:flex" src="./src/assets/images/Solutionimage.jpg" alt="feature image 2" />
            <div className="text-gray-300 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                Our Solution
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>
              <ul role="list" className="pt-8 space-y-5 border-t border-gray-700 my-7">
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-white">
                    Image Processing for Ingredient Extraction
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-white">
                    Natural Language Processing (NLP) for Ingredient Analysis
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-white">
                    Database of Harmful Substances
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-white">
                    User-Friendly Interface
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
