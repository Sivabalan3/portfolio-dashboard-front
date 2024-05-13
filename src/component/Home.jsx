import React from "react";
import { useState, useEffect } from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import {
  ChevronDoubleDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { FaArrowCircleDown } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Project from "./Project";
import htmls from "../myimgs/swip/html.png";
import css from "../myimgs/swip/css.png";
import JavaScript from "../myimgs/swip/javascript.png";
import mongodb from "../myimgs/swip/mongodb2.png";
import expressjss from "../myimgs/swip/expressjs.png";
import reacts from "../myimgs/swip/reactjs.png";
import nodejss from "../myimgs/swip/nodejs.png";
import docker from "../myimgs/swip/docker.png";
import jsons from "../myimgs/swip/json.png";
import gits from "../myimgs/swip/git.png";
import github from "../myimgs/swip/github.png";
import bootstrab from "../myimgs/swip/pngwing.com.png";
import reduxs from "../myimgs/swip/redux.png";
import tailwindcss from "../myimgs/swip/tailwindcss.png";
import metrialui from "../myimgs/swip/metrailui.png";
import msoffice from "../myimgs/swip/msoffice.png";
import token from "../myimgs/swip/token.png";
import nextjs from "../myimgs/swip/next.png";;
import siva from "../myimgs/sivabalan1.webp";
import insta from "../myimgs/insta1.webp";
import whatsap from "../myimgs/whatsapp.webp";
import develop from "../myimgs/develop.webp";
import code from "../myimgs/code.webp";

import photoshop from "../myimgs/swip/photoshop.png";
import Homeimg from "../myimgs/home.jpg";

import { TextGenerateEffect } from "./TextGenerateEffect";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) navigate("/Admindashboard");
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const images = [
    { img: htmls, name: "HTML - 5" },
    { img: css, name: "CSS - 3" },
    { img: jsons, cls: "dark:invert drop-shadow-2xl", name: "jSON" },
    { img: JavaScript, name: "JAVASCRIPT" },
    { img: mongodb, name: "MONGODB" },
    { img: expressjss, name: "EXPRESS JS" },
    { img: reacts, name: "REACT JS" },
    { img: nodejss, name: "NODE JS" },
    { img: docker, name: "DOCKER" },
    { img: github, cls: "dark:invert drop-shadow-2xl", name: "GITHUB" },
    { img: reduxs, name: "REDUX" },
    { img: gits, name: "GIT" },
    { img: bootstrab, name: "BOOTSTRAB" },
    { img: tailwindcss, name: "TAILWIND CSS" },
    { img: metrialui, name: "METRIAL UI" },
    { img: photoshop, name: "PHOTOSHOP" },
    { img: msoffice, name: "MS - OFFICE" },
    { img: nextjs, name: "NEXT JS", cls: "dark:invert drop-shadow-2xl" },
    { img: token, name: "JS WEBTOKEN", cls: "dark:invert drop-shadow-2xl" },
  ];
  const card = [
    {
      cls: " xl:p-8 flex duration-300 flex-col p-6 mx-auto max-w-lg text-center text-gray-200 bg-gray-200  rounded-lg border border-sky-400 shadow  dark:bg-gray-800 dark:text-white",
      title: "Static website & front end",
      subtitle: "Best option for personal use & for your next project.",
      price: "₹2999",
      developer: "1 developer",
      month: "6 months",
      language: "HTML, CSS, JavaScriptT",
      btn: "Register Now",
      Anime: "fade-right",
      duration: 1000,
    },

    {
      cls: "xl:py-8 xl:px-5 flex duration-300 flex-col p-6 mx-auto max-w-lg text-center text-gray-200 bg-gray-200  rounded-lg border border-sky-400 shadow dark:bg-gray-800 dark:text-white",
      title: "Dynamic Website & front-end",
      subtitle: "Relevant for multiple users, extended & premium support.",
      price: "₹6999",
      developer: "4 developer",
      month: "12 months",
      language: "React Js, Next js,Redux",
      btn: "Register Now",

      Anime: "fade-up",
      duration: 1500,
    },

    {
      cls: "xl:py-8 xl:px-5 flex duration-300 flex-col p-6 mx-auto max-w-lg text-center text-gray-200 bg-gray-200  rounded-lg border border-sky-400 shadow dark:bg-gray-800 dark:text-white",
      title: "Dynamic Website & Full Stack",
      subtitle: "Best option for personal use & for your next project.",
      price: "₹19999",
      developer: "6+ developer",
      month: "18 months",
      language: "MERN STACK",
      btn: "Register Now",
      Anime: "fade-left",
      duration: 2000,
    },
  ];

  const words = `Looking for a skilled website developer? Look no further! Our team of expert developers can create a professional website that meets your needs and exceeds your expectations. Whether you need a simple brochure site or a complex e-commerce platform, we've got the experience and technical know-how to make it happen. We use the latest technologies and best practices to ensure your site is secure, responsive, and visually stunning. Contact us today to discuss your project and get a free quote!`;
  return (
    <>
      {/* NEW   CREATING   */}
      <main>
        <div className="bg-cream dar ">
          <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
            {/* <!--Left Col--> */}
            <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                className="my-4 text-5xl font-bold leading-tight dark:text-white"
              >
                <span className="text-sky-500">Hi</span> I'm Sivabalan
              </h1>
              <p
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
                className="leading-normal text-2xl mb-8 dark:text-slate-200"
              >
                <Typewriter
                  words={["UI/UX Designer & React Js Developer "]}
                  loop={0}
                  typeSpeed={200}
                  deleteSpeed={150}
                  delaySpeed={100}
                  cursor
                ></Typewriter>
              </p>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="700"
                className="mt-12 w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
              >
                <Link to="/userform">
                  <button className="border-4 border-white lg:mx-0 bg-sky-500 text-white text-xl font-bold rounded-full py-2 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                    Click here
                  </button>
                </Link>
                 <Link to="https://www.instagram.com/_sivabalan_/?next=%2Fsivabalanm205%2F" target="blank">
                <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                  <GrInstagram className="w-8 h-8 text-center text-red-500"/>
                  </button>
                  <span className="cursor-pointer dark:text-slate-200 text-pink-500 font-semibold md:text-lg">Instagram</span>
                </div>
                  </Link>
              </div>
            </div>
            {/* <!--Right Col--> */}
            <div className="w-full lg:w-6/12 lg:- relative" id="girl">
              <img
                data-aos="fade-up"
                data-aos-once="true"
                className="w-10/12 mx-auto 2xl:-mb-20"
                src={siva}
                alt="image"
              />
              {/* <!-- calendar --> */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
                className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
              >
                <img
                  className="w-24 h-20 bg-opacity-80 rounded-lg sm:h-16"
                  src={code}
                  alt="image"
                />
              </div>
              {/* <!-- red --> */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="true"
                className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
              >
                 <Link to="https://www.instagram.com/_sivabalan_/?next=%2Fsivabalanm205%2F" target="blank">
                <img
                  className="md:w-18 md:h-18   bg-opacity-80 rounded-lg  h-16 w-16"
                  src={insta}
                  alt="image"
                /></Link>
              </div>
              {/* <!-- ux class --> */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
              >
                <img
                  className=" bg-opacity-80 rounded-lg h-20 sm:h-28"
                  src={develop}
                  alt="image"
                />
              </div>
              {/* <!-- congrats --> */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-once="true"
                className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
              >
                <img
                  className="bg-opacity-80 rounded-lg h-12 sm:h-16"
                  src={whatsap}
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="text-white z-40 ">
            <svg
              className="xl:h-40 xl:w-full dark:hidden"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        {/* PRICING TAG */}
        <section className="bg-white dark:bg-gray-900 overflow-hidden duration-300">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto  text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold   text-sky-400">
                Designed For Business Teams Like Yours
              </h2>
              <p className="mb-5 font-light text-gray-900 sm:text-xl dark:text-gray-400">
                <TextGenerateEffect words={words} />
              </p>
            </div>

            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 ">
              {card.map((cards) => (
                <div
                  key={cards.title}
                  data-aos={cards.Anime}
                  data-aos-duration={cards.duration}
                  className={cards.cls}
                >
                  <h3 className="mb-4 text-xl  sm:text-2xl font-semibold text-sky-400">
                    {" "}
                    {cards.title}
                  </h3>
                  <p className="font-light text-gray-900 sm:text-lg dark:text-gray-400">
                    {cards.subtitle}
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold dark:text-slate-200 text-gray-700">
                      {cards.price}
                    </span>
                    {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
                  </div>

                  <ul className="mb-8 space-y-4 text-left text-gray-700 dark:text-gray-200">
                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold" />
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold" />
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold" />
                      <span>
                        Team size :{" "}
                        <span className="font-semibold">{cards.developer}</span>
                      </span>
                    </li>

                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold" />
                      <span>
                        Free updates :{" "}
                        <span className="font-semibold">{cards.month}</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircleIcon className="text-green-400 w-6 h-6 font-bold" />
                      <span>
                        Languages :{" "}
                        <span className="font-semibold">{cards.language}</span>
                      </span>
                    </li>
                  </ul>
                  <Link
                    to="/userform"
                    className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block"
                  >
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-sky-400 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-sky-600 from-blue-500"></span>
                    <span className="relative flex gap-2 justify-center">
                      {cards.btn}
                      <FaArrowCircleDown className="mt-1.5" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* SWIPER JS  */}

          <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-6 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300  tracking-widest">
            My Skils
          </h1>
          <div className="rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden">
            <InfiniteMovingCards
              items={images}
              direction="right"
              speed="slow"
            />
          </div>
        </section>
        <Project />
      </main>
    </>
  );
}
export default Home;
