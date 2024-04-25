import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./error.css";
import "./styles/loder.css";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../store/projectstores/projectSlice";
import { BASE_URL } from "../store/constant";
import { FaArrowRight } from "react-icons/fa6";
import { Dropdown, Button, Result, Skeleton } from "antd";

function Project() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: projects,
    loading,
    error,
  } = useSelector((state) => state.projects.getProjects);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (loading) {
      setShowSkeleton(true);
      setTimeout(() => {
        setShowSkeleton(false);
      }, 3000); // 3 seconds
    }
  }, [loading]);

  // console.log("hdhfdf",projects.image)
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const items = [
    {
      key: "1",
      label: <button>Delete</button>,
    },
    {
      key: "2",
      label: <button>Update</button>,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  if (showSkeleton) {
    return (
      <div className="cube">
        <div className="cube_item cube_x"></div>
        <div className="cube_item cube_y"></div>
        <div className="cube_item cube_y"></div>
        <div className="cube_item cube_x"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }
  return (
    <>
      <section className="text-gray-600 body-font dark:bg-gray-900 bg-white pt-6 duration-300 md-mt-32">
        <h1 className="text-2xl sm:text-4xl text-sky-400 text-center py-11 pr-6 font-extrabold underline underline-offset-2  decoration-slate-300  tracking-widest">
          My Projects
        </h1>

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/project/${project._id}`}>
                <img
                  className="rounded-t-lg"
                  src={BASE_URL + project.image}
                  alt="images"
                />
              </Link>
              <div className="p-5">
                <Link to={`/project/${project._id}`}>
                  <h5 className="hover:text-blue-700 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Tittle : {project.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  to={`/project/${project._id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <FaArrowRight className="w-4 h-4 ms-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Project;
