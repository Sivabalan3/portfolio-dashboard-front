import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./error.css";
import "./styles/loder.css";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../store/projectstores/projectSlice";
import { BASE_URL } from "../store/constant";
import { HiDotsHorizontal } from "react-icons/hi";
import { Dropdown, Button, Result, Skeleton } from "antd";
import { FaArrowRight } from "react-icons/fa6";

function AdminProjectCard() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: projects,
    loading,
    error,
  } = useSelector((state) => state.projects.getProjects);




  // console.log("hdhfdf",projects.image)
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);


  if (loading) {
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
  const truncateDescription=(description, wordLimit)=> {
    const words = description.split(' ');
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return (
    <>
      <section className="text-gray-600 body-font dark:bg-gray-900 bg-white pt-6 duration-300 md-mt-32">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/project/${project._id}`}>
                <img
                  className="rounded-t-lg"
                  src={BASE_URL + project.image}
                  alt="images"
                  loading="lazy"
                />
              </Link>
              <div className="p-5">
                <Link to={`/project/${project._id}`}>
                  <h6 className=" mb-2 text-xl font-bold tracking-tight   text-purple-500">{project.subtitle}</h6>
                  <h5 className="hover:text-blue-700 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Tittle : {project.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {truncateDescription(project.description,50)} <span className="text-yellow-300">Read more</span>
                </p>
                <Link
                  to={`project/${project._id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
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

export default AdminProjectCard;
