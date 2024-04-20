import React from 'react'
import { Button, Tooltip,Tag } from "antd";
import { useDispatch,useSelector } from "react-redux";
function Status() {
    const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
    <div className="flex flex-wrap gap-x-4 gap-y-8">
                <div className="px-3 py-6 h-[200px]  w-[250px] rounded-xl bg-white p-10 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 rounded-xl bg-blue-400 p-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="mt-4 font-medium">Sessions</p>
                  <p className="mt-2 text-xl font-medium">
                    23.4k
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokListrokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </p>
                  <span className="text-xs text-gray-400">+4.9%</span>
                </div>

                <div className="px-3 py-6 h-[200px]  w-[250px] rounded-xl bg-white p-10 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 rounded-xl bg-rose-400 p-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Tag color="red" className="mt-4 font-medium">{userInfo?.isAdmin?"ADMIN":"USER"}</Tag>
                  <p className="mt-2 text-xl font-medium">
                    {userInfo?.email }
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokListrokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </p>
                  <span className="text-xs text-gray-400">+4.9%</span>
                </div>

                <div className="px-3 py-6 h-[200px]  w-[250px] rounded-xl bg-white p-10 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 rounded-xl bg-blue-50 p-4 text-blue-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="mt-4 font-medium">Sessions</p>
                  <p className="mt-2 text-xl font-medium">
                    23.4k
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokListrokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </p>
                  <span className="text-xs text-gray-400">+4.9%</span>
                </div>

                <div className="px-3 py-6 h-[200px]  w-[250px] rounded-xl bg-white p-10 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 rounded-xl bg-blue-50 p-4 text-blue-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="mt-4 font-medium">Sessions</p>
                  <p className="mt-2 text-xl font-medium">
                    23.4k
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokListrokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </p>
                  <span className="text-xs text-gray-400">+4.9%</span>
                </div>

                {/* <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div>
                <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div>
                <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div> */}
              </div>
    </>
  )
}

export default Status