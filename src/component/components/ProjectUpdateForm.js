import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../store/constant";
import {
  getProjectById,
  uploadProjectImage,
  updateProject,
} from "../store/projectstores/projectSlice";
import { frameData } from "framer-motion";
function ProjectUpdateForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.getProjects.data);
  const project = projects.find((project) => project._id === id);
  console.log("projectById", project);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    subtitle: "",
    language: "",
    startdate: "",
    enddate: "",
    githuburl: "",
    livesite: "",
  });

  useEffect(() => {
    if (project) {
      setFormData(project);
    }
  }, [project]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    const uploadData = new FormData();
    uploadData.append("image", file);

    try {
      const res = await dispatch(uploadProjectImage(uploadData)).unwrap();
      setImage(res.image);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProject({ projectId: id, formData }));
    setFormData("")
  };

  return (
    <>
     

      <div className="bg-white border-4 rounded-lg shadow relative m-10">
        <h1 className="text-center font-extrabold">Update Project Details</h1>
        <div className="p-6 space-y-6">
          {image ? (
            <div className="text-center">
              <img
                src={BASE_URL + image}
                alt="projects"
                className="block mx-auto max-h-[200px]"
              />
            </div>
          ) : (
            <div className="text-center">
              <img
                src={BASE_URL + formData.image}
                alt="projectsss"
                className="block mx-auto max-h-[200px]"
              />
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-4 border-blue-500 border-dashed rounded-xl cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                {image ? image.name : "Upload Image"}
                <input
                  id="dropzone-file"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={!image ? "hidden" : "text-white"}
                />
              </label>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  subTitle
                </label>
                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  StartDate
                </label>
                <input
                  type="date"
                  name="startdate"
                  value={formData.startdate}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  EndDate
                </label>
                <input
                  type="date"
                  name="enddate"
                  value={formData.enddate}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Language's
                </label>
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$2300"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="githuburl"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  GithubUrl
                </label>
                <input
                  type="text"
                  name="githuburl"
                  value={formData.githuburl}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  for="livesite"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  LiveSite
                </label>
                <input
                  type="text"
                  name="livesite"
                  value={formData.livesite}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Decription
                </label>
                <textarea
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Details"
                ></textarea>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProjectUpdateForm;
