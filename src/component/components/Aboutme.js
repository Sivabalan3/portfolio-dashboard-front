import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import proimage from '../myimgs/jeeva logo.webp'
import {
    BiChevronsDown, BiLogoReact, 
    BiLogoJavascript,BiLogoGithub,  
    BiLogoGit,BiLogoHtml5, 
    BiLogoJava, BiLogoMicrosoft, 
    BiLogoTailwindCss, BiLogoBootstrap, BiSolidFileJson
} from 'react-icons/bi';
import Resum from "../myimgs/Resume.pdf";
import {SiOracle,SiMaterialdesign,SiAdobephotoshop,SiLinkedin,SiGithub,SiGmail,SiWhatsapp,SiInstagram} from 'react-icons/si'
import {GrDocker} from 'react-icons/gr';
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutme() {
    //if protected route  for useNavigate 
    const navigate=useNavigate();
    useEffect(() => {
        if (localStorage.getItem("userInfo")) navigate("/Admindashboard");
      });
    //READ MORE OPTIONS unorderlist
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
     
      //Disable Right Click Events
      useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        window.addEventListener('contextmenu', handleContextMenu);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <>
        

            <section className="bg-white dark:bg-slate-800 duration-300">
                <div className="container mx-auto py-4">
                    <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
                        <div className="col-span-5 md:col-span-3 px-2 duration-300">
                            <div data-aos="fade-up" data-aos-duration="2500" className="duration-300 text-slate-800 dark:bg-slate-900 dark:text-slate-300  rounded-lg p-6 h-full border  border-sky-500 shadow-2xl">
                                <div className="flex flex-col items-center">

                                    <img src={proimage} alt="profile" className="border-[2px] border-sky-400  cursor-none w-44 h-44 bg-gray-300 rounded-full mb-4 shrink-0"/>

                                    
                                    <h1 className="text-xl font-bold">Sivabalan M</h1>
                                    <p className=" text-amber-300">Front End  Developer</p>
                                    <div className="mt-6 flex flex-wrap md:gap-4 gap-2 justify-center">
                                        <a   href={Resum}
                                            download="Resume"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="relative inline-flex items-center justify-center p-4 px-4 py-1.5 overflow-hidden font-medium text-sky-300 transition duration-300 ease-out border-2 border-sky-400 rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-sky-400 group-hover:translate-y-0 ease">
                                                <BiChevronsDown className="w-7 h-7 text-slate-300" />
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-sky-400 transition-all duration-300 transform group-hover:translate-x-full ease" >Resume</span>
                                            <span className="relative invisible">Resume</span>
                                        </a>

                                        <a 
                                         href={Resum}
                                         download="Resume"
                                         target="_blank"
                                         rel="noreferrer"
                                        className="relative inline-flex items-center justify-center p-4 px-4 py-1.5 overflow-hidden font-medium text-sky-300 transition duration-300 ease-out border-2 border-sky-400 rounded-full shadow-md group">
                                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-sky-400 group-hover:translate-y-0 ease">
                                                <BiChevronsDown className="w-7 h-7 text-white" />
                                            </span>
                                            <span className="absolute flex items-center justify-center w-full h-full text-sky-400 transition-all duration-300 transform group-hover:translate-x-full ease">Contact</span>
                                            <span className="relative invisible">Contact</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="flex flex-col mt-5 items-center">
                                        <span className="text-sky-400 text-lg uppercase font-bold tracking-wider mb-2 underline underline-offset-4">Skills</span>
                                        <div className="flex flex-col space-y-1">
                                            <li className="inline-flex text-lg font-semibold "><BiLogoReact className="text-indigo-500 font-bold w-6 h-6 mx-px animate-spin delay-1000" />React js </li>
                                            <li className="inline-flex text-lg font-semibold"><BiLogoJavascript className="text-yellow-500 font-bold w-6 h-6 mx-px" />JavaScript</li>
                                            <li className="inline-flex text-lg font-semibold"><BiLogoHtml5 className="text-blue-500 font-bold w-6 h-6 mx-px" />HTML / CSS</li>
                                            <li className="inline-flex text-lg font-semibold"><GrDocker className=" text-sky-500 font-bold w-6 h-6 mx-px" />Docker</li>
                                            <li className="inline-flex text-lg font-semibold"><BiLogoTailwindCss className="text-sky-500 font-bold w-6 h-6 mx-px" />Tailwind Css</li>
                                            {(isShowMore && (
                                                <ul className="flex flex-col space-y-1 ">
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold"><BiLogoBootstrap className=" text-fuchsia-700 font-bold w-6 h-6 mx-px" />Bootstrab</li>
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold "><BiSolidFileJson className="text-purple-500 font-bold w-6 h-6 mx-px" />json</li>
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold"><SiOracle className="text-red-500 font-bold w-6 h-6 mx-px" />Oracle</li>
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold"><SiMaterialdesign className="text-sky-400 font-bold w-6 h-6 mx-px" />Material Ui</li>
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold"><BiLogoJava className="text-red-500 font-bold w-6 h-6 mx-px" />Java</li>
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold"><BiLogoGithub className="text-black dark:text-white font-bold w-6 h-6 mx-px" />GitHUb</li>
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold"><BiLogoGit className="text-rose-600 font-bold w-6 h-6 mx-px" />Git</li>
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold"><BiLogoMicrosoft className="text-sky-500  font-bold w-6 h-6 mx-px" />Microsotf Office</li>
                                                    <li className="dark:text-slate-300 text-slate-800 inline-flex text-lg font-semibold"><SiAdobephotoshop className="text-violet-500 font-bold w-6 h-6 mx-px" />Photoshop</li>
                                                </ul>
                                            ))}
                                            <button onClick={toggleReadMoreLess} className="relative inline-flex items-center justify-center p-3 px-3 py-1.5 overflow-hidden font-medium text-sky-400 transition duration-300 ease-out border-2 border-sky-400 rounded-full shadow-md group">
                                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-sky-400 group-hover:translate-y-0 ease">
                                                    <BiChevronsDown className="w-7 h-7 text-white" />
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-sky-400 transition-all duration-300 transform group-hover:translate-x-full ease">{isShowMore ? 'Read Less' : 'Read More'}</span>
                                                <span className="relative invisible">{isShowMore ? 'Read Less' : 'Read More'}</span>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-around text-center my-1 py-1">
                                    <span className="text-lg text-sky-400 -sky 4pp text-lgercase font-bold tracking-wider mb-2 underline underline-offset-4">Language</span>
                                    <ul clasName=" list-none">
                                        <li className="mb-2 text-lg font-semibold ">Tamil</li>
                                        <li className="mb-2 text-lg font-semibold ">English</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 md:col-span-9  px-2 ">
                            <div data-aos="fade-right" data-aos-duration="2000" className=" text-slate-800 rounded-lg p-6 duration-300 dark:bg-slate-900 dark:text-slate-300 border border-sky-500 shadow-2xl">
                                <h2 className="text-xl  font-bold mb-4 text-sky-400 underline underline-offset-4 tracking-wider">About Me</h2>
                                <p className="text-lg" data-aos="flip-left" data-aos-duration="1000" >Hi, I'm  front-end developer and React.js specialist, I am passionate about creating unique and intuitive user experiences through responsive web design and efficient code. With several years of experience in this field, I have honed my skills in building scalable, maintainable, and robust web applications using React, Redux, and other related technologies. Additionally, I am an photoshop designer and who can work well both independently and collaboratively in a fast-paced environment while prioritizing deadline-driven tasks. In my free time, I enjoy staying current with the latest React updates and exploring new programming concepts to enhance my knowledge and expertise.
                                </p>

                                <h3 className="font-semibold text-center mt-3 -mb-2 text-sky-400 underline underline-offset-4 tracking-wider ">
                                    Find me on
                                </h3>
                                <div className="flex justify-center items-center gap-6 my-6">
                                    <Link className="hover:scale-[2.2] text-slate-800 dark:text-slate-200 dark:hover:text-sky-400 text-xl" aria-label="Visit TrendyMinds LinkedIn" to="/pnf"
                                        ><SiLinkedin/>
                                    </Link>
                                    <Link className="hover:scale-[2.2] text-slate-800 dark:text-slate-200 dark:hover:text-sky-400 text-xl" aria-label="Visit TrendyMinds YouTube" to="/pnf"
                                        ><SiGithub/>
                                    </Link>
                                    <Link className="hover:scale-[2.2] text-slate-800 dark:text-slate-200 dark:hover:text-sky-400 text-xl" aria-label="Visit TrendyMinds Facebook" to="/pnf"
                                        ><SiGmail/>
                                  </Link>
                                    <Link className="hover:scale-[2.2] text-slate-800 dark:text-slate-200 dark:hover:text-sky-400 text-xl" aria-label="Visit TrendyMinds Instagram" to="/pnf"
                                        ><SiInstagram/>
                                    </Link>
                                    <Link className="hover:scale-[2.2] text-slate-800 dark:text-slate-200 dark:hover:text-sky-400 text-xl" aria-label="Visit TrendyMinds Twitter" to="/pnf"
                                        ><SiWhatsapp/>
                                    </Link>
                                </div>

                            <div className="">
                            
                                <h2 className=" text-xl font-bold mt-3 mb-4 text-sky-400 underline underline-offset-4 tracking-wider">Information</h2>
                                <div className="mb-4">
                                    <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col  text-lg dark:text-slate-200 text-slate-800">
                                        <h2><span className="font-semibold">Name : </span> Sivabalan M</h2>
                                        <h2><span className="font-semibold">Age :</span> 20</h2>
                                        <h2><span className="font-semibold">sex :</span> Male</h2>
                                        <h2><span className="font-semibold">Gmail :</span> siva*********@gmail.com</h2>
                                        <h2><span className="font-semibold">phone :</span> 99******34</h2>
                                        <h2><span className="font-semibold">Job Required :</span> React js Developer</h2>
                                    </div>
                                  
                                </div>
                                
                                <div className="">
                                    <div className="space-y-1  text-lg mb-4 flex-col  flex-shrink">
                                        <span className=" font-bold text-xl text-sky-400 underline underline-offset-4 tracking-wider">Education</span>
                                        
                                    </div>
                                    <div data-aos="fade-right" data-aos-duration="1000" className="text-slate-800 dark:text-slate-200 text-lg">

                                        <h1><span className="font-semibold">College :</span> Bharath*****Engineering College</h1>
                                        <h2><span className="font-semibold">Cource :</span> Computer Science & Engineering</h2>
                                        <h2><span className="font-semibold">Batch :</span> 2020 - 2024</h2>
                                        <h2><span className="font-semibold">School :</span> VM*****boys Government Higher Secondary School</h2>
                                    </div>
                                    </div>
                                </div>
                               </div>
                           </div>
                    </div>
                </div>

            </section>
            <section>
                

{/* <div class="grid grid-cols-2 md:grid-cols-4 gap-4 dark:bg-gray-900 px-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div> */}

            </section>
        </>
    );
}
export default Aboutme;