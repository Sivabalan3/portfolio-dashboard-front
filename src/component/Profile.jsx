import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCloudUploadAlt } from "react-icons/fa";
import { BASE_URL } from "../store/constant";
import {
  ProfileuploadImage,
  getAllUsers,
  ProfileUpdate,
} from "../store/api/userApiSlice";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data: users } = useSelector((state) => state.users.getAllUsers);
  const [userDetails, setUserDetails] = useState(null);

  const [image, setImage] = useState("");
  const [username, setuserame] = useState("");
  const [gender, setgender] = useState();
  const [email, setemail] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  console.log(username, gender, email, birthdate, imageUrl);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUserData = new FormData();
      updatedUserData.append("username", username);
      updatedUserData.append("email", email);
      updatedUserData.append("gender", gender);
      updatedUserData.append("birthdate", birthdate);
      updatedUserData.append("image", image);

      const { data } = await dispatch(
        ProfileUpdate({
          userId: userInfo._id,
          updatedUserData: updatedUserData,
        })
      ).unwrap();
      // navigate("/Admindashboard/project-card");
      if (data.error) {
        console.log("error");
      } else {
        // navigate('/Admindashboard/project-card');
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
      const res = await dispatch(ProfileuploadImage(formData)).unwrap();
      setImage(res.image);
      setImageUrl(res.image);
    } catch (error) {
      console.log(error);
    }
  };
  const fileInputRef = useRef();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    console.log("Profile image Url", imageUrl);
  }, [imageUrl]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && users) {
      const user = users.filter((user) => user._id === userInfo._id);
      setUserDetails(user[0]);
    }
  }, [userInfo, users]);
  useEffect(() => {
    if (userDetails) {
      setuserame(userDetails.username);
      setemail(userDetails.email);
      setgender(userDetails.gender);
      setImage(userDetails.image);
      setbirthdate(
        userDetails.birthdate &&
          new Date(userDetails.birthdate).toISOString().split("T")[0]
      );
    }
  }, [userDetails]);

  return (
    <>
      <section className="py-10 my-auto dark:bg-gray-900 bg-white">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
              <h1 className="text-center lg:text-3xl md:text-2xl sm:text-xl xs:text-xl  font-extrabold mb-2 dark:text-white">
                {username+"\t"}Profile
              </h1>
              <h2 className="text-center text-grey text-sm mb-4 dark:text-gray-400">
                Create Profile
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="w-full rounded-sm bg-[url()] bg-cover bg-center bg-no-repeat items-center">
                  {image ? (
                    <div className="mx-auto flex justify-center w-[241px] h-[241px] bg-blue-300/20 rounded-full  bg-cover bg-center bg-no-repeat">
                      <div className=" w-[241px] h-[241px]">
                        <img
                          className=" w-[241px] h-[241px] rounded-full absolute"
                          src={BASE_URL + image}
                          alt=""
                        />
                        <div className=" w-[241px] h-[241px] group hover:bg-gray-200  border-4 hover:border-sky-500 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                          <FaCloudUploadAlt
                            className="hidden group-hover:block w-14 h-14 text-green-500"
                            onClick={handleIconClick}
                          ></FaCloudUploadAlt>
                          <input
                            ref={fileInputRef}
                            hidden
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={uploadFileHandler}
                            className={!image ? "hidden" : " hidden  w-12 "}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative mx-auto flex justify-center w-[241px] h-[241px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat">
                      <div className="flex h-full w-full ">
                        <img
                          src={BASE_URL + imageUrl}
                          alt="please upload image"
                          className=" w-[241px] h-[241px] relative object-cover overflow-hidden"
                        />
                        <input
                          hidden
                          required
                          id="upload_profile"
                          type="file"
                          name="image"
                          accept="image/*"
                          onChange={uploadFileHandler}
                          className={!image ? "hidden" : "text-white  "}
                        />

                        <label
                          htmlFor="upload_profile"
                          className=" cursor-pointer absolute mt-[90px] ml-[90px]"
                        >
                          <svg
                            data-slot="icon"
                            className="w-16 h-16 text-amber-500 hover:text-purple-500"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label className="mb-2 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setuserame(e.target.value)}
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label className=" dark:text-gray-300">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="email"
                    />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">Gender</h3>
                    <select
                      value={gender}
                      onChange={(e) => setgender(e.target.value)}
                      className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    >
                      <option>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">Date Of Birth</h3>
                    <input
                      type="date"
                      value={birthdate}
                      onChange={(e) => setbirthdate(e.target.value)}
                      className="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                </div>
                <div className="w-full rounded-lg bg-indigo-500 hover:bg-indigo-600  mt-4 text-white text-lg font-semibold">
                  <button type="submit" className="w-full p-4">
                   Update All
                  </button>
                </div>
              </form>

              {/* <div>
                {userDetails ? (
                  <div>
                    <h1>{userDetails.username}</h1>
                    <p>{userDetails.email}</p>
                    <p>{userDetails.birthdate}</p>
                  
                  </div>
                ) : (
                  <p>Loading profile...</p>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
