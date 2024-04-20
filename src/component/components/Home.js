import React from "react";
import { useState, useEffect} from "react";
import "./Home.scss";
import { Typewriter, Cursor } from "react-simple-typewriter";
import {
  ChevronDoubleDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper";
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
import photoshop from "../myimgs/swip/photoshop.png";
import Homeimg from '../myimgs/home.jpg'
import { TextGenerateEffect } from "./TextGenerateEffect";
function Home() {
  const navigate= useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) navigate("/Admindashboard");
  });
  //TIME EVENTS
  let time = new Date().toLocaleTimeString();

  const [cutime, setcutime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setcutime(time);
  };
  setInterval(UpdateTime, 1000);

  //DATES EVENTS
  const dates = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = weekday[dates.getDay().toLocaleString()];
  const month = months[dates.getMonth().toLocaleString()];
  const date = dates.getDate().toLocaleString();
  const year = dates.getFullYear();
  //ADD ZERO IN DATES
  function addZero(t) {
    var len = t.toString().length;
    if (len <= 1) {
      return "0" + t;
    }

    return t;
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const images = [
    { img: htmls },
    { img: css },
    { img: jsons, cls: "dark:invert drop-shadow-2xl" },
    { img: JavaScript },
    { img: mongodb },
    { img: expressjss },
    { img: reacts },
    { img: nodejss },
    { img: docker },
    { img: github, cls: "dark:invert drop-shadow-2xl" },
    { img: reduxs },
    { img: gits },
    { img: bootstrab },
    { img: tailwindcss },
    { img: metrialui },
    { img: photoshop },
    { img: msoffice },
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
      title: "Dynamic Website & Back End",
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
        <div className="relative">
          <img
            src={Homeimg}
            className="absolute inset-0 object-cover w-full h-full"
            alt="img"
          />
          <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
            <svg
              className="absolute inset-x-0 bottom-[-0.5px] text-white dark:text-gray-900  "
              viewBox="0 0 1160 163"
            >
              <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
              />
            </svg>
            <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h1 className="max-w-lg mb-4 font-sans text-[40px] font-bold tracking-tight text-white sm:text-[70px] sm:leading-none">
                    <span className="bg-clip-text bg-gradient-to-tl from-blue-500 to-sky-400 text-transparent  text-[40px]  sm:text-[70px]">
                      Hi i'm
                    </span>{" "}
                    Sivabalan
                  </h1>
                  <h1 className="text-white text-2xl sm:text-4xl mb-3">
                    <Typewriter
                      words={["UI/UX Designer ", "React Js Developer "]}
                      loop={0}
                      typeSpeed={200}
                      deleteSpeed={150}
                      delaySpeed={100}
                    ></Typewriter>
                  </h1>
                  <p className="text-white text-xl">
                    If you need to create a website fill the link below
                  </p>

                  <button
                    className="mt-4 inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                  >
                    <Link
                      to="/userform"
                      className=" relative inline-flex items-center justify-center md:p-4 md:px-6 md:py-1.5  overflow-hidden font-medium text-slate-200 transition duration-300 ease-out border-2 border-sky-500 rounded-full shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-sky-500 group-hover:translate-x-0 ease">
                        <ChevronDoubleDownIcon className="w-6 h-6" />
                      </span>
                      <span className="text-xs md:text-md absolute flex items-center justify-center w-full h-full texslatet2-200 transition-all duration-300 transform group-hover:translate-x-full ease">
                        Click here
                      </span>
                      <span className="text-xs md:text-md p-1 relative invisible">
                        Click here
                      </span>
                    </Link>
                  </button>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="bg-white rounded shadow-2xl p-7 sm:p-10 ">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                      Sign up for updates
                    </h3>
                    <form>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="firstName"
                          className="inline-block mb-1 font-medium"
                        >
                          First name
                        </label>
                        <input
                          placeholder="John"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="firstName"
                          name="firstName"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="lastName"
                          className="inline-block mb-1 font-medium"
                        >
                          Last name
                        </label>
                        <input
                          placeholder="Doe"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="lastName"
                          name="lastName"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          E-mail
                        </label>
                        <input
                          placeholder="john.doe@example.org"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div className="mt-4 mb-2 sm:mb-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                          Subscribe
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 sm:text-sm">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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

            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
              {card.map((cards) => (
                <div
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
          <div className="">
            <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-6 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300  tracking-widest">
              My Skils
            </h1>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[FreeMode, Pagination, Autoplay, Pagination, Navigation]}
              className="mySwiper "
            >
              {images.map((item, index) => (
                <SwiperSlide>
                  <img
                    src={item.img}
                    alt="icons"
                    className={`lg:w-3/4 lg-h-3/4   ${item.cls} `}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <Project />
      </main>
    </>
  );
}
export default Home;
