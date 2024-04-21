import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../store/constant";
import {
  uploadProjectImage,
  createProject,
} from "../store/projectstores/projectSlice";
function ProjectCreatehtmlForm() {
  // const {
  //   name,
  //   subtitle,
  //   language,
  //   startdate,
  //   enddate,
  //   description,
  //   livesite,
  //   githuburl,
  // } = req.fields;
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ subtitle,  setsubtitle] = useState("");
  const [language, setlanguage] = useState("");
  const [ startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [githuburl,setgithuburl]=useState("");
  const [livesite,setlivesite]=useState("");

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const projectData = new FormData();

      projectData.append("image", image);
      projectData.append("name", name);
      projectData.append("description", description);
      projectData.append("subtitle", subtitle);
      projectData.append("language", language);
      projectData.append("startdate", startdate);
      projectData.append("enddate", enddate);
      projectData.append("githuburl",githuburl);
      projectData.append("livesite",livesite);

      const { data } = await dispatch(createProject(projectData)).unwrap();

      if (data.error) {
        console.log("error");
      } else {
        // navigate("/");
        console.log("else");
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await dispatch(uploadProjectImage(formData)).unwrap();
      setImage(res.image);
      setImageUrl(res.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("image Url", imageUrl);
  }, [imageUrl]);

  return (
    <>
      <div className="bg-white border-4 rounded-lg shadow relative m-10 dark:bg-[#182235]">
        <div className="p-6 space-y-6">
          {imageUrl && (
            <div className="text-center">
              <img
                src={BASE_URL + imageUrl}
                alt="productssss"
                className="block mx-auto max-h-[200px]"
              />
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="dark:bg-gray-800 dark:text-white flex flex-col items-center justify-center w-full h-64 border-4 border-blue-500 border-dashed rounded-xl cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-white"
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
                  <p className="mb-2 text-sm text-gray-500 dark:text-white">
                    <span class="font-semibold dark:text-white">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-white">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                {image ? image.name : "Upload Image"}
                <input
                  id="dropzone-file"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={uploadFileHandler}
                  className={!image ? "hidden" : "text-white"}
                />
              </label>
            </div>
            <div className="grid grid-cols-6 gap-6 mt-4">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                 Title
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="dark:bg-gray-800 dark:text-white shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-white">
                  SubTitle
                </label>
                <input
                  value={subtitle}
                  onChange={(e) => setsubtitle(e.target.value)}
                  type="text"
                  name="subtitle"
                  className="dark:bg-gray-800 dark:text-white shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-white">
                 StartDate
                </label>
                <input
                  value={startdate}
                  onChange={(e) => setstartdate(e.target.value)}
                  type="date"
                  name="startdate"
                  className="dark:bg-gray-800 dark:text-white shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-white">
                EndDate
                </label>
                <input
                  value={enddate}
                  onChange={(e) => setenddate(e.target.value)}
                  type="date"
                  name="enddate"
                  className="dark:bg-gray-800 dark:text-white shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-white">
                Language's
                </label>
                <input
                  type="text"
                  value={language}
                  onChange={(e) => setlanguage(e.target.value)}
                  name="language"
              
                  className="dark:bg-gray-800 dark:text-white shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$2300"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="githuburl"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  GithubUrl
                </label>
                <input
                  value={githuburl}
                  onChange={(e) => setgithuburl(e.target.value)}
                  type="text"
                  name="githuburl"
                  className="dark:bg-gray-800 dark:text-white shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                htmlFor="livesite"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                 LiveSite
                </label>
                <input
                  value={livesite}
                  onChange={(e) => setlivesite(e.target.value)}
                  type="text"
                  name="livesite"
                  className="dark:bg-gray-800 dark:text-white shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-white">
                  Decription
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  rows="6"
                  className="dark:bg-gray-800 dark:text-white bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Details"
                ></textarea>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200 rounded-b">
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

export default ProjectCreatehtmlForm;
