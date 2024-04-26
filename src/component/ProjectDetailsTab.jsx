import React,{useState} from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaLink } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdAutoDelete } from "react-icons/md";
import {
  deleteProject,
  updateProject,
  createReview
} from "../store/projectstores/projectSlice";
import { BASE_URL } from "../store/constant";
function ProjectDetailsTab() {
  const { id } = useParams();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const projects = useSelector((state) => state.projects.getProjects.data);

  const navigate = useNavigate();
  const project = projects.find((project) => project._id === id);

  const handleUpdateNavigate = () => {
    if(userInfo.isAdmin){

      navigate(`project/update/${project._id}`);
      // dispatch(updateProject({ projectId: id}));
    }else{
      navigate(`project/update/${project._id}`);
    }
  };
  const handleDelete = (projectId) => {
    dispatch(deleteProject(id));
  };

  const submitReview = async (e) => {
    e.preventDefault();
  
    try {
      await dispatch(createReview({
        
        projectId: id, // replace with your actual project id
        rating: rating,
        comment: comment
      })).unwrap();
  
      alert("Review created successfully");
    } catch (err) {
      console.log(err.message);
    }
  };
  
  
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {project ? (
          <div>
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-contain"
                    src={BASE_URL + project.image}
                    alt="Product Image"
                  />
                </div>
                <div className="flex -mx-2 mb-4 justify-around">
                  <div className="">
                    <Link
                      to={project.githuburl}
                      target="blank"
                      className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                    >
                      <svg
                        className="w-4 h-4 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Github Repository
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      to={project.livesite}
                      target="blank"
                      className="text-white  bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                    >
                      <FaLink className="w-4 h-4 me-4" />
                      View Live Site
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-sky-500  mb-2">
                  Title : {project.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Sub Title : {project.subtitle}
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Start Date :
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {project.startdate}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      End Date :
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {project.enddate}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    language:
                  </span>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-600 dark:text-gray-300">
                      {project.language}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Project Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
                {userInfo && userInfo.isAdmin && (
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Actions :
                    </span>
                    <div className="flex items-center mt-2">
                      <button
                        type="button"
                        onClick={handleUpdateNavigate}
                        className="text-purple-700 flex hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                      >
                        <GrDocumentUpdate className="w-[20px] h-[20px] me-2 text-white" />{" "}
                        Update
                      </button>

                      <button
                        type="button"
                        onClick={handleDelete}
                        className="text-red-700 flex hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        <MdAutoDelete className="w-[20px] h-[20px] me-2 hover:text-white" />{" "}
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* // <!-- Comment Form --> */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                    Post a comment
                  </h2>
                </div>

                {/* <!-- Card --> */}
                <div className="mt-5 p-4  bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-900 dark:border-neutral-700">
                <form onSubmit={submitReview}>
                    
                    <div className="my-2">
                    <label htmlFor="rating" className="block text-xl mb-2">
                      Rating
                    </label>
  
                    <select
                      id="rating"
                      required
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="p-2 border rounded-lg xl:w-[40rem] text-black"
                    >
                      <option value="">Select</option>
                      <option value="1">Inferior</option>
                      <option value="2">Decent</option>
                      <option value="3">Great</option>
                      <option value="4">Excellent</option>
                      <option value="5">Exceptional</option>
                    </select>
                  </div>
                    
  
                      <div>
                        <label
                         
                          className="block mb-2 text-sm font-medium dark:text-white"
                        >
                          Comment
                        </label>
                        <div className="mt-1">
                          <textarea
                         
                         id="comment"
                         rows="3"
                         required
                         value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Leave your comment here..."
                          ></textarea>
                        </div>
                      </div>
  
                      <div className="mt-6 grid">
                        
                        <button
                          type="submit"
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                        
                Submit
                        </button>
                      </div>
                    </form>
                </div>
                {/* <!-- End Card --> */}
              </div>
            </div>
            {/* <!-- End Comment Form --> */}
          </div>
        ) : (
          <p>Project not found</p>
        )}
      </div>
     
    </div>
  );
}

export default ProjectDetailsTab;
