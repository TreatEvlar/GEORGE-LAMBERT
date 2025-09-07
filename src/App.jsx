import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import {
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEye,
  FaComment,
  FaHeart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="app-container">
      {/* Navbar */}
      <div className="navbar bg-gray-800 w-full text-white flex justify-between items-center py-4 px-7 fixed top-0 left-0 z-50 ">
        <div className="logo-section text-xl font-extralight">
          <a href="#" className="font-semibold">
            GEORGE <br /> LAMBERT
          </a>
        </div>

        <div
          className={`nav-links flex md:flex-row items-center space-x-6 fixed md:static bg-gray-800 md:bg-transparent w-full md:w-auto h-screen md:h-auto left-0 ${
            isOpen ? "bottom-0" : "bottom-203"
          } pt-46 md:pt-0 flex-col space-y-6 md:space-y-0 transition-all duration-300`}
        >
          <a href="#" className="hover:text-blue-300 transition-colors">
            Services
          </a>
          <hr className="w-full max-w-7/8 md:hidden mx-auto" />
          <a href="#" className="hover:text-blue-300 transition-colors">
            Portfolio
          </a>
          <hr className="w-full max-w-7/8 md:hidden mx-auto" />
          <a href="#" className="hover:text-blue-300 transition-colors">
            Blog
          </a>
          <hr className="w-full max-w-7/8 md:hidden mx-auto" />
          <a href="#" className="hover:text-blue-300 transition-colors">
            Contact
          </a>
          <hr className="w-full max-w-7/8 md:hidden mx-auto" />
          <a
            href="#"
            className="border-2 border-blue-500 py-1 px-4 rounded hover:bg-blue-500 transition-colors hidden md:inline-block"
          >
            Book a Session
          </a>
          <a
            href="#"
            className="flex items-center justify-between md:w-auto w-full md:px-0 px-10 hover:text-blue-300 transition-colors md:static absolute top-25"
          >
            <div className="flex items-center md:flex-row flex-row-reverse">
              <span className="md:mr-2 ml-2">
                <FaUserCircle className="md:text-2xl text-3xl" />
              </span>
              Log In
            </div>
            {isOpen ? (
              <FaMinus
                className="md:hidden text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : null}
          </a>
          <div className="social-icons z-50 relative bottom-110 left-0 flex flex-row justify-between w-full text-white text-2xl px-15 md:hidden">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        {!isOpen && (
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <FaPlus />
          </div>
        )}
      </div>

      {/* Social Media Icons */}
      <div className="social-icons z-50 fixed top-40 left-7 md:flex flex-col space-y-4 text-black text-xl hidden">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaInstagram />
      </div>

      {/* Hero Section */}
      <div className="hero-section w-full min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex justify-around items-center md:pt-16 px-4 md:px-8 md:flex-row flex-col-reverse pt-30">
        <div className="f-section max-w-md mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-6xl text-gray-800 mb-6 leading-tight">
            Get the Most Out of Your Social Media
          </h1>
          <p className="text-gray-600 mb-8">
            Expert social media strategies to grow your brand and engage your
            audience
          </p>
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-lg">
            BOOK A MEETING
          </button>
        </div>
        <div className="s-section">
          <img
            src="https://static.wixstatic.com/media/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg/v1/fill/w_960,h_706,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg"
            alt="Social Media Marketing"
            className="rounded-lg shadow-xl w-full max-w-md md:max-w-2xl"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="p-10 w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 pb-10">
          What I Do
        </h1>
        <div className="md:space-y-10 w-full">
          <section className="flex items-start justify-between md:flex-row flex-col md:mx-20 px-4 md:gap-24 border-t-2 border-blue-700">
            <h2 className="text-4xl font-semibold text-gray-800 my-4 md:w-1/4">
              Social Media Strategy
            </h2>
            <p className="text-gray-600 font-medium max-w-md my-4">
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </section>

          <section className="flex items-start justify-between md:flex-row flex-col md:mx-20 px-4 md:gap-24 border-t-2 border-blue-700">
            <h2 className="text-4xl font-semibold text-gray-800 my-4 md:w-1/4">
              Content Creation
            </h2>
            <p className="text-gray-600 font-medium max-w-md my-4">
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </section>

          <section className="flex items-start justify-between md:flex-row flex-col md:mx-20 px-4 md:gap-24 border-t-2 border-blue-700">
            <h2 className="text-4xl font-semibold text-gray-800 my-4 md:w-1/4">
              Advertising on Social Media
            </h2>
            <p className="text-gray-600 font-medium max-w-md my-4">
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </section>

          <section className="flex items-start justify-between md:flex-row flex-col md:mx-20 px-4 md:gap-24 border-t-2 border-blue-700">
            <h2 className="text-4xl font-semibold text-gray-800 my-4 md:w-3/4">
              Analyze <br /> Your Data
            </h2>
            <p className="text-gray-600 font-medium max-w-md my-4">
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </section>

          <section className="flex items-start justify-between md:flex-row flex-col md:mx-20 px-4 md:gap-24 border-t-2 border-blue-700">
            <h2 className="text-4xl font-semibold text-gray-800 my-4 md:w-1/4">
              Social Media Workshops
            </h2>
            <p className="text-gray-600 font-medium max-w-md my-4">
              I'm a paragraph. Click here to add your own text and edit me. I'm
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </section>

          <section className="flex items-center justify-center md:mx-20 px-4 border-t-2 border-blue-700">
            <button className="border-2 border-blue-700 text-blue-700 py-3 px-10 hover:bg-blue-600 hover:text-white transition-colors font-medium flex items-center mx-auto my-10">
              BOOK NOW
            </button>
          </section>
        </div>
      </div>

      {/* Professional Photo Section */}
      <div className="md:p-20 md:pt-10 w-full flex items-center md:flex-row flex-col justify-center">
        <div className="f-section flex flex-col justify-center w-full bg-blue-700 text-white md:w-1/2 md:h-124 md:p-20 px-7 py-15">
          <span>Hello, I’m George!</span>
          <h1 className="md:text-4xl text-2xl font-bold text-white mb-8 w-3/4">
            Here to take your Social Media to another level
          </h1>
          <p className="text-white md:w-sm font-medium">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
        </div>
        <div className="s-section md:w-1/2 w-full">
          <img
            src="https://static.wixstatic.com/media/913019_91e8f50eebc443beab9bb042a398e466~mv2.jpg/v1/fill/w_906,h_660,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_91e8f50eebc443beab9bb042a398e466~mv2.jpg"
            alt="Professional Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* brand and partnerships */}
      <div className="brand-partnerships p-10 w-full flex flex-col items-center justify-center text-center h-120">
        <h2 className="text-3xl font-semibold text-blue-700 my-4">
          Brand & Partnerships
        </h2>
        <div className="brands w-full h-100 flex flex-wrap justify-center items-center md:mt-20 mt-10 md:gap-0 gap-10">
          <div className="list md:w-70 md:h-50 w-30 h-10 flex justify-center items-center">
            <img
              src="https://static.wixstatic.com/media/913019_d4bdcd896bb34e03ba233ee993991e26~mv2.jpg/v1/fill/w_155,h_35,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGOS-01.jpg"
              alt="Brand Logo"
              className="md:mx-4 md:my-4 md:w-40 md:h-10"
            />
          </div>
          <div className="list md:w-70 md:h-50 w-30 h-10 flex justify-center items-center md:border-l-3 border-blue-700">
            <img
              src="https://static.wixstatic.com/media/913019_4c32ddc658764349999861509e63ac2f~mv2.jpg/v1/fill/w_170,h_15,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGOS-05.jpg"
              alt="Brand Logo"
              className="md:mx-4 md:my-4 md:w-40 md:h-10 w-30 h-5"
            />
          </div>
          <div className="list md:w-70 md:h-50 w-30 h-10 flex justify-center items-center md:border-x-3 border-blue-700">
            <img
              src="https://static.wixstatic.com/media/913019_452cf41b729d4855ab446da1db669ec7~mv2.jpg/v1/fill/w_236,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGOS-02.jpg"
              alt="Brand Logo"
              className="md:mx-4 md:my-4 md:w-30 md:h-30 w-20 h-20"
            />
          </div>
          <div className="list md:w-70 md:h-50 w-30 h-10 flex justify-center items-center md:border-r-3 border-blue-700">
            <img
              src="https://static.wixstatic.com/media/913019_c73524f930624be09eafedd5990add6a~mv2.jpg/v1/fill/w_160,h_85,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGOS-03.jpg"
              alt="Brand Logo"
              className="md:mx-4 md:my-4 md:w-30 md:h-30 w-20 h-20"
            />
          </div>
          <div className="list md:w-70 md:h-50 w-30 h-10 flex justify-center items-center">
            <img
              src="https://static.wixstatic.com/media/913019_d1c6580d39f9480bbdb8e8ba2dcf57ac~mv2.jpg/v1/fill/w_139,h_95,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGOS-04.jpg"
              alt="Brand Logo"
              className="md:mx-4 md:my-4 md:w-30 md:h-30 w-20 h-20"
            />
          </div>
        </div>
      </div>

      {/* Review */}
      <div className="reviews md:p-10 py-10 flex flex-col items-center justify-center text-center bg-pink-200 md:m-20 md:mb-0 mb-10">
        <h2 className="text-3xl font-semibold text-blue-700 my-4">
          What People Are Saying
        </h2>
        <div className="review-list w-full flex flex-col justify-center">
          <Slider {...settings} className="md:w-3/4 mx-auto md:px-18 w-80">
            <div className="review-item my-4">
              <img
                src="../src/assets/Screenshot_2025-09-05_214608-removebg-preview.png"
                alt=""
                className="mx-auto"
              />
              <p className="text-gray-800 p-4">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <span className="text-blue-700 font-semibold">
                Alisha Jones- Animalife
              </span>
            </div>
            <div className="review-item my-4">
              <img
                src="../src/assets/Screenshot_2025-09-05_214608-removebg-preview.png"
                alt=""
                className="mx-auto"
              />
              <p className="text-gray-800 p-4">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <span className="text-blue-700 font-semibold">
                Craig Owen - Anthology
              </span>
            </div>
            <div className="review-item my-4">
              <img
                src="../src/assets/Screenshot_2025-09-05_214608-removebg-preview.png"
                alt=""
                className="mx-auto"
              />
              <p className="text-gray-800 p-4">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <span className="text-blue-700 font-semibold">
                Lindsey Wallace - Lushy
              </span>
            </div>
          </Slider>
        </div>
      </div>

      {/* Blog */}
      <div className="blog-section w-full flex flex-col items-center justify-center text-center md:py-10">
        <h2 className="text-3xl font-semibold text-blue-700 ">My Blog</h2>
        <div className="blog-list w-full flex flex-wrap justify-center items-center mt-10">
          <div className="blog-item w-120 h-110 m-4 border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden">
            <div className="relative h-full">
              <img
                src="https://images.pexels.com/photos/20897043/pexels-photo-20897043/free-photo-of-redhead-woman-recording-herself-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Blog Post"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/30 via-pink-300/30 to-pink-300/30 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-white text-sm text-left">
                    Admin <br /> Mar 22, 2023 • 2 min read
                  </span>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">
                    How to create great video <br /> content from home?
                  </h3>

                  <hr className="text-white" />

                  <div className="flex justify-between items-center p-2 rounded-md">
                    <div className="flex space-x-4">
                      <div className="flex items-center text-white text-sm">
                        <FaEye className="mr-1" />
                        <span>0</span>
                      </div>
                      <div className="flex items-center text-white text-sm">
                        <FaComment className="mr-1" />
                        <span>0</span>
                      </div>
                    </div>
                    <div className="flex items-center text-white text-sm">
                      <FaHeart className="mr-1 text-red-400" />
                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-item w-120 h-110 m-4 border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden">
            <div className="relative h-full">
              <img
                src="https://static.wixstatic.com/media/913019_e322a5138df3431692c8540374c01ef5~mv2.jpg/v1/fill/w_640,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_e322a5138df3431692c8540374c01ef5~mv2.jpg"
                alt="Blog Post"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-300/30 via-blue-300/30 to-blue-300/30 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-white text-sm text-left">
                    Admin <br /> Mar 22, 2023 • 2 min read
                  </span>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 text-left">
                    5 Brands that do it right
                  </h3>

                  <hr className="text-white" />

                  <div className="flex justify-between items-center p-2 rounded-md">
                    <div className="flex space-x-4">
                      <div className="flex items-center text-white text-sm">
                        <FaEye className="mr-1" />
                        <span>0</span>
                      </div>
                      <div className="flex items-center text-white text-sm">
                        <FaComment className="mr-1" />
                        <span>0</span>
                      </div>
                    </div>
                    <div className="flex items-center text-white text-sm">
                      <FaHeart className="mr-1 text-red-400" />
                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Starter Session */}
      <div className="starter p-6 md:p-10 flex-col items-center justify-center text-center bg-pink-200 my-10 mx-4 md:mx-20 hidden md:flex">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
          Let's Get Started
        </h1>
        <div className="mt-4 pb-6 md:pb-10">
          <p className="text-base md:text-lg text-black">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>
        </div>
        <hr className="w-full max-w-xs md:max-w-7/8 h-[2px] mx-auto my-4 md:my-6 bg-blue-500 border-0 rounded" />
        <div className="detail flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-20 py-4 gap-4 md:gap-0">
          <div className="text text-xl md:text-2xl text-center md:text-left">
            Starter Session
          </div>
          <div className="price text-lg md:text-xl font-semibold">$80</div>
          <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Book Now
          </button>
        </div>
        <hr className="w-full max-w-xs md:max-w-7/8 h-[2px] mx-auto my-4 md:my-6 bg-blue-500 border-0 rounded" />
      </div>

      {/* Starter Session */}
      <div className="starter p-6 md:p-10 flex-col items-center justify-center text-center bg-pink-200 my-10 flex md:hidden">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
          Let's Get Started
        </h1>
        <div className="mt-4 pb-6 md:pb-10">
          <p className="text-base md:text-lg text-black">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>
        </div>
        <div className="h-110 border-2 border-black">
          <img
            src="https://static.wixstatic.com/media/913019_3a9f4e6c98e34e3ea6ce9c29d229fd3b~mv2.jpg/v1/fill/w_348,h_230,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/913019_3a9f4e6c98e34e3ea6ce9c29d229fd3b~mv2.jpg"
            alt=""
          />
          <div className="text text-xl md:text-2xl text-left md:text-left p-4">
            Starter Session
          </div>
          <hr className="w-full max-w-70 h-[2px] mx-auto bg-blue-500 border-0 rounded" />
          <div className="price text-lg md:text-xl font-semibold text-left p-4">
            $80
          </div>
          <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white w-70 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="py-16 px-4 md:px-8 bg-blue-500 flex flex-col items-center justify-center text-left md:mx-20 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mr-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-3 text-white pb-7">
              Let’s Work Together
            </h3>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Phone</h3>
              <p className="text-white">123-456-7890</p>
              <p className="text-white">info@myatia.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Address</h3>
              <p className="text-white">500 Terry Francine St</p>
              <p className="text-white">San Francisco, CA 94138</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Get in the Know
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Enter your Email *
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 
                         border-b-2 border-white focus:border-blue-400 focus:outline-none 
                         transition-colors duration-300"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter-subscribe"
                  className="h-4 w-4 text-white border-white rounded"
                />
                <label
                  htmlFor="newsletter-subscribe"
                  className="ml-2 block text-sm text-white"
                >
                  Yes, subscribe me to your newsletter.
                </label>
                <button
                  type="submit"
                  className="w-45 border-2 border-pink-300 text-pink-300 py-2 px-4 hover:bg-pink-300 hover:text-blue-600 transition duration-300 font-medium"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Stay in Touch
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 
                         border-b-2 border-white focus:border-blue-400 focus:outline-none 
                         transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 
                         border-b-2 border-white focus:border-blue-400 focus:outline-none 
                         transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 
                         border-b-2 border-white focus:border-blue-400 focus:outline-none 
                         transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 
                         border-b-2 border-white focus:border-blue-400 focus:outline-none 
                         transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Leave us a message...
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 
                       border-b-2 border-white focus:border-blue-400 focus:outline-none 
                       transition-colors duration-300"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-45 border-2 border-pink-300 text-pink-300 py-2 px-4 hover:bg-pink-300 hover:text-blue-600 transition duration-300 font-medium"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="text-left pb-5  text-blue-500 md:px-40 px-20">
          <p>&copy; 2035 George Lambert. Powered and secured by Wix</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
