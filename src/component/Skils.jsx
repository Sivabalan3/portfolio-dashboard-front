import  React,{useEffect,useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import mongodb from '../myimgs/icons/mongodb.png';
import expressjs from '../myimgs/icons/expressjs.webp';
import reactjs from '../myimgs/icons/reactjs.png';
import node from "../myimgs/icons/nodejs.png";
import tailwind from '../myimgs/icons/tailwindcss.png'
import AOS from "aos";

function Skils(){
  const navigate =useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) navigate("/Admindashboard");
  });
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
      useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
   
    return(
    <>
<section>
  
    <div className="bg-white dark:bg-slate-900 dark:text-white py-8 overflow-y-hidden">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8" data-aos="flip-right" data-aos-duration="900">
        <p className=" text-sky-400 uppercase tracking-loose text-2xl py-1 font-bold">This Website Working Language</p>
        {/* <p className="text-xl md:text-xl leading-normal md:leading-relaxed mb-2 ps-1">Working Process</p> */}
        <p className=" dark:text-slate-100 md:text-base text-gray-800 mb-4 ">
        The MERN stack is a popular full-stack development framework consisting of MongoDB, Express.js, React.js, and Node.js. MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. Express.js is a back-end web application framework running on top of Node.js, which is a JavaScript runtime built on Chrome's V8 engine. React.js is a front-end library for building user interfaces. Together, these technologies provide a seamless way to build scalable and efficient web applications from front to back. The MERN stack leverages JavaScript on both the client and server side, promoting efficient and consistent coding practices.
        </p>
        <Link to="/pnf"
        className="bg-transparent mr-auto hover:bg-sky-500 text-sky-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-sky-400 hover:border-transparent">
        Explore Now</Link>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{right: "50%", border: "2px solid #60a5fa"}}></div>
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{left:" 50%", border:" 2px solid #60a5fa"}}></div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right" data-aos="flip-left" data-aos-duration="1000">
                {/* <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p> */}
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Mongodb </h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100" src={mongodb} alt='mongodb'></img>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1  w-5/12 px-1 py-4 text-left"data-aos="flip-right"data-aos-duration="1000">
                {/* <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p> */}
                <h4 className="mb-3 font-bold text-lg md:text-2xl">express js</h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 " src={expressjs} alt='expressjs'></img>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right" data-aos="flip-left"data-aos-duration="1000">
                {/* <p className="mb-3 text-base text-yellow-300"> 10 May, 2021</p> */}
                <h4 className="mb-3 font-bold text-lg md:text-2xl">React js</h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 " src={reactjs} alt='reactjs'></img>
              </div>
            </div>  

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>

              <div className="order-1  w-5/12 px-1 py-4"data-aos="flip-right"data-aos-duration="1000">
                {/* <p className="mb-3 text-base text-yellow-300">12 May, 2021</p> */}
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Node js</h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 " src={node} alt='nodejs'/>
          
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right" data-aos="flip-left"data-aos-duration="1000">
                {/* <p className="mb-3 text-base text-yellow-300"> 10 May, 2021</p> */}
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Tailwind Css</h4>
                <img className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 items-center" src={tailwind} alt='tailwindcss'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</>
    );
}
export default Skils;