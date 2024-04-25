import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/style.css";

import "./charts/ChartjsConfig";
import loadimg from "./myimgs/s logo2.webp";
// Import pages

import Headers from "./headerfile/header";
import Foter from "./headerfile/Foterpage";
const Home = lazy(() => import("./component/Home"));
const Aboutme = lazy(() => import("./component/Aboutme"));
const Login = lazy(() => import("./component/Loginform"));
const Skils = lazy(() => import("./component/Skils"));
const OrderTable = lazy(() => import("./component/OrderTable"));
const Pagenotfound = lazy(() => import("./component/Pagenotfound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Userform = lazy(() => import("./component/Userform"));
const Profile = lazy(() => import("./component/Profile"));
const Registerform = lazy(() => import("./component/Registerform"));
const ProjectCreateform = lazy(() => import("./component/ProjectCreateform"));
const AdminEdit = lazy(() => import("./component/AdminEditTable"));
const AdminProjectCard = lazy(() => import("./component/AdminProjectCard"));
const ProjectDetailsTab = lazy(() => import("./component/ProjectDetailsTab"));
const ProjectUpdateForm = lazy(() => import("./component/ProjectUpdateForm"));

function App() {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {userInfo ? "" : <Headers />}
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-screen  bg-slate-900">
            <img
              src={loadimg}
              alt="loder"
              className=" transform translate-x-60 w-60 h-60 brightness-110"
              data-aos="fade-left"
            ></img>
          </div>
        }
        fallbackMinDurationMs={3000}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/skils" element={<Skils />} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/project/:id" element={<ProjectDetailsTab />} />
          {/* <Route path="project/update/:id" element={<ProjectUpdateForm />} /> */}
          <Route path="project-create" element={<ProjectCreateform />} />
          <Route path="/register" element={<Registerform />} />
          <Route path="/userform" element={<Userform />} />

          {/* Outlet components */}
          <Route path="/Admindashboard" element={<Dashboard />}>
            <Route path="Admin-edit-table" element={<AdminEdit />} />
            <Route path="order-table" element={<OrderTable />} />
            <Route path="profile" element={<Profile />} />
            <Route path="project-card" element={<AdminProjectCard />} />
            <Route
              path="project-card/project/:id"
              element={<ProjectDetailsTab />}
            />
            <Route
              path="project-card/project/:id/project/update/:id"
              element={<ProjectUpdateForm />}
            />
            <Route path="project-create" element={<ProjectCreateform />} />
          </Route>
          
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Suspense>
      {userInfo ? "" : <Foter />}
    </>
  );
}

export default App;
