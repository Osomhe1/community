/* eslint-disable no-unused-vars */
import { ImFilePdf } from "react-icons/im";

import { BsFiletypeDoc } from "react-icons/bs";
import { BsFiletypeDocx } from "react-icons/bs";
import { GrDocumentCsv } from "react-icons/gr";
import { GrDocumentZip } from "react-icons/gr";
// import { GrDocumentWindows } from "react-icons/gr";

// import { useReactToPrint } from "react-to-print";
import { DownloadIcon, Search } from "lucide-react";
import { useLoadAnnouncement } from "../../../../lib/query/queryandMutation";
// import { Button } from "@nextui-org/react";

import { Fragment, useState } from "react";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import ReformateDate from "./ReformateDate";
import { MdCancel } from "react-icons/md";
import { Button } from "@nextui-org/react";
import moment from "moment";
import { format } from "date-fns";
// import AnnounceShimmer from "../AnnounceShimmer";

const Announcements = () => {
  const { userData } = useCurrentUser();
  const { data, isPending } = useLoadAnnouncement(userData?.data);
  const [searchTerm, setSearchTerm] = useState(null);
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // console.log(data);

  const onDocClick = (url, name) => {
    const pdfUrl = url;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = name; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeInp = () => {};


  return (
    <div className="space-y-5 mb-5">

           {
              data?.data?.data?.length > 0 &&
          <div className="bg-white rounded-xl py-5 overflow-clip shadow-sm ">
            <div className="px-9 text-gray-500 ">
              <div className="flex  items-center gap-x-4">

                
                <div
                  className={`flex gap-x-2  items-center h-10 border border-sidebarInpColor/10    rounded-full px-4 relative w-full `}
                >
                  <div className="mr-auto h-full  items-center  cursor-pointer ">
                    <button className="pl-3  outline-none rounded flex items-center justify-center">
                      {" "}
                      {searchTerm ? (
                        <MdCancel
                          onClick={closeInp}
                          className=" text-sidebarInptextColor text-center  absolute top-[0.75rem] left-4"
                          size={14}
                        />
                      ) : (
                        <Search
                          className=" text-gray-700 text-center  absolute top-[0.75rem] left-4"
                          size={14}
                        />
                      )}
                    </button>
                  </div>
                  <input
                    name=""
                    id=""
                    className={` outline-none border-none bg-transparent  px-2 w-full 
                  placeholder:text-[0.80rem]  transition-all duration-700 placeholder:text-sidebarInptextColor  text-gray-500`}
                    // onChange={handleUserFilter}
                    // onChange={(e) => handleChange(e)}
                    type="text"
                    // value={searchValue}
                    placeholder="Search..."
                  />
                </div>

                <div>
                  {/* <select
                    name=""
                    id=""
                    className="max-w-[12rem] bg-gray-300 cursor-pointer outline-none rounded-md p-2 px-3"
                  >
                    <option value="All Announcment">All Announcment</option>
                    <option value="Closing this month">Closing this month</option>
                    <option value="Closing next month">Closing next month</option>
                    <option value="New this week">New this week</option>
                    <option value="New this month">New this month</option>
                    <option value="Recently created announcements">
                      Recently created announcements
                    </option>
                    <option value="Recently modified announcements">
                      Recently modified announcements
                    </option>
                    <option value="Unread announcements">
                      Unread modified announcements
                    </option>
                  </select> */}
                </div>
                {/* <div>
                  <Button onClick={()=>setIsDrawerOpen(true)} color="primary">+ New Announcement</Button>
                </div> */}
              </div>
            </div>
          </div>
            }

      {/* <div className="bg-white rounded-xl py-4 overflow-clip shadow-sm">
        <div className="px-9 text-gray-500 ">
          <div className="mb-2">
            <span>Filter</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-6">
            <div>
              <select
                name=""
                id=""
                className="max-w-[12rem] bg-gray-300 cursor-pointer outline-none rounded-md p-2 px-3"
              >
                <option value="All Announcment">All Announcment</option>
                <option value="Closing this month">Closing this month</option>
                <option value="Closing next month">Closing next month</option>
                <option value="New this week">New this week</option>
                <option value="New this month">New this month</option>
                <option value="Recently created announcements">
                  Recently created announcements
                </option>
                <option value="Recently modified announcements">
                  Recently modified announcements
                </option>
                <option value="Unread announcements">
                  Unread modified announcements
                </option>
              </select>
            </div>

            <div>
              <select
                name=""
                id=""
                className="max-w-[13rem] bg-gray-300 cursor-pointer outline-none rounded-md p-2 px-3 "
              >
                <option value="All Announcment">Announcement Category</option>
                <option value="Closing this month">Start Date</option>
                <option value="Closing this month">End Date</option>
              </select>
            </div>
            <div>
              <select
                name=""
                id=""
                className="max-w-[15rem] bg-gray-300 cursor-pointer outline-none rounded-md p-2 px-3"
              >
                <option value="All Announcment">
                  Select an announcement type
                </option>
              </select>
            </div>
          </div>
        </div>
      </div> */}

      {/* <AnnounceShimmer/> */}

      {
      data?.data?.data?.length === 0 ? (
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/empty.png"
            className=" rounded-xl w-[50%]"
            alt=""
          />
        </div>
      ) : (
        data?.data?.data?.map((ann) => (
        // dt?.map((ann) => (
          <Fragment key={ann?.ANNOUNCEMENT_ID} >
            <div className="bg-white rounded-xl py-4 overflow-clip shadow-sm">
              <div className="py-1 pb-3 flex-col border-b ">
                    <div className="px-9 text-gray-500 flex justify-between gap-2 items-center">
                        <div className="flex flex-col gap-1">
                            {/* <span className=" text-medium text-gray-600 font-semibold ">Department Name</span> */}
                            <span className="text-xs">
                              {/* 2hr ago  */}
                            
                              {moment(new Date(ann?.DATE_CREATED)).endOf('day').fromNow()}



                            {/* {format(new Date(ann?.DATE_CREATED), "paa")} */}
                            {/* <TimeAgo timestamp={data?.CHAT_TIME}  /> */}
                        
                            {/* {format(new Date(data?.CHAT_TIME), 'paa')} */}

                            {/* <ChatTime timestamp={data?.CHAT_TIME}  /> */}
                            

                             </span> 
                             {/* {moment(ann?.DATE_CREATED)} */}
                        </div>
                        <Button variant="bordered" size="sm " className="text-gray-600">Mark as read</Button>
                    </div>
                </div>
              {!ann?.ANNOUNCEMENT_FILE ? (
                <div className="py-7">
                  <div className="px-9 text-gray-500">
                    <div>
                      <b>{ann?.SUBJECT}</b>
                    </div>
                    <span>{ann?.MESSAGE}</span>
                    <div className="flex gap-x-5 flex-wrap">
                      {ann?.START_DATE && (
                        <div className="mt-5 text-sm text-gray-400 flex gap-1 items-center border p-1 rounded">
                          <span>Start Date -</span>

                          <ReformateDate dateString={ann?.START_DATE} />
                        </div>
                      )}

                      {ann?.END_DATE && (
                        <div className="mt-5 ext-sm text-gray-400 flex gap-1 items-center border p-1 rounded">
                          <span>End Date -</span>
                          <ReformateDate dateString={ann?.END_DATE} />
                        </div>
                      )}
                    </div>

                    <div className="mt-5">
                      <span className="text-xs text-gray-400">
                        <ReformateDate dateString={ann?.DATE_CREATED} />
                      </span>
                    </div>
                  </div>
                </div>
              ) : ann?.ANNOUNCEMENT_FILE.includes("jpg") ||
                ann?.ANNOUNCEMENT_FILE.includes("jpeg") ||
                ann?.ANNOUNCEMENT_FILE.includes("png") ? (
                <div className="bg-white rounded-xl py-7 overflow-clip ">
                  <div className="px-9 text-gray-500 ">
                    <div className="mb-4">
                      <b>{ann?.SUBJECT}</b>
                    </div>

                    <div className="relative group">
                      <img
                        src={
                          ann?.ANNOUNCEMENT_FILE.includes("http")
                            ? ann?.ANNOUNCEMENT_FILE
                            : "/assets/images/shopevent/shop4.jpeg"
                        }
                        className="h-[300px] w-full object-cover object-top "
                        alt=""
                      />

                      <div className="z-4 hidden absolute group-hover:block bg-black h-full w-full top-0 opacity-20"></div>

                      <div
                        className="p-1  transition-all duration-200 rounded-full cursor-pointer lightbtn left-[45%] bottom-[50%]  z-10  hidden absolute group-hover:block shadow-lg"
                        onClick={() =>
                          onDocClick(
                            ann?.ANNOUNCEMENT_FILE.includes("http")
                              ? ann?.ANNOUNCEMENT_FILE
                              : "/assets/images/shopevent/shop4.jpeg",
                            ann?.ANNOUNCEMENT_FILE
                          )
                        }
                      >
                        <DownloadIcon
                          className=" z-2 p-1 text-white "
                          strokeWidth={2}
                          size={45}
                        />
                      </div>
                    </div>
                    <div className="py-3">
                      <span className=" text-[0.85rem]">{ann?.MESSAGE}</span>
                    </div>

                    <div className="flex gap-x-5 flex-wrap">
                      {ann?.START_DATE && (
                        <div className="mt-5 text-sm text-gray-400 flex gap-1 items-center border p-1 rounded">
                          <span>Start Date -</span>

                          <ReformateDate dateString={ann?.START_DATE} />
                        </div>
                      )}

                      {ann?.END_DATE && (
                        <div className="mt-5 ext-sm text-gray-400 flex gap-1 items-center border p-1 rounded">
                          <span>End Date -</span>
                          <ReformateDate dateString={ann?.END_DATE} />
                        </div>
                      )}
                    </div>

                    <div className="mt-5">
                      <span className="text-xs text-gray-400">
                        <ReformateDate dateString={ann?.DATE_CREATED} />
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                (ann?.ANNOUNCEMENT_FILE.includes("pdf") ||
                  ann?.ANNOUNCEMENT_FILE.includes("doc") ||
                  ann?.ANNOUNCEMENT_FILE.includes("csv") ||
                  ann?.ANNOUNCEMENT_FILE.includes("docx") ||
                  ann?.ANNOUNCEMENT_FILE.includes("zip")) && (
                  <div className="bg-white rounded-xl py-7 overflow-clip ">
                    <div className="px-9 text-gray-500">
                      <div>
                        <b>{ann?.SUBJECT}</b>
                      </div>
                      <span>{ann?.MESSAGE}</span>

                      <div className="flex gap-x-4 flex-wrap space-y-1 mt-5 items-center">
                        <div className="relative">
                          <div
                            onClick={() =>
                              onDocClick(
                                ann?.ANNOUNCEMENT_FILE.includes("http")
                                  ? ann?.ANNOUNCEMENT_FILE
                                  : "/assets/doc/doc1.pdf",
                                ann?.ANNOUNCEMENT_FILE
                              )
                            }
                            alt=""
                            className="border pt-3 px-3 shadow-sm group rounded-md flex-col justify-center gap-2  cursor-pointer"
                          >
                            <div className="flex gap-2 ">
                              {ann?.ANNOUNCEMENT_FILE.includes("pdf") ? (
                                <ImFilePdf size={25}   className="text-red-500" />
                              ) : ann?.ANNOUNCEMENT_FILE.includes("doc") ? (
                                <BsFiletypeDoc className="text-blue-500" />
                              ) : ann?.ANNOUNCEMENT_FILE.includes("docx") ? (
                                <BsFiletypeDocx className="text-blue-500" />
                              ) : ann?.ANNOUNCEMENT_FILE.includes("csv") ? (
                                <GrDocumentCsv className="text-blue-500" />
                              ) : (
                                ann?.ANNOUNCEMENT_FILE.includes("zip") && (
                                  <GrDocumentZip className="text-blue-500" />
                                )
                              )}

                              <span className="flex-1">{ann?.ANNOUNCEMENT_FILE}</span>
                            </div>
                            <div className=" flex items-end justify-end py-1 w-full">
                              <DownloadIcon
                                
                                className=" z-2 p-1  group-hover:text-black/40 group-hover:border-black/40 border rounded-full border-gray-300 text-gray-400/80 "
                                strokeWidth={2}
                                size={23}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-x-5 flex-wrap">
                        {ann?.START_DATE && (
                          <div className="mt-5 text-sm text-gray-400 flex gap-1 items-center border p-1 rounded">
                            <span>Start Date -</span>

                            <ReformateDate dateString={ann?.START_DATE} />
                          </div>
                        )}

                        {ann?.END_DATE && (
                          <div className="mt-5 ext-sm text-gray-400 flex gap-1 items-center border p-1 rounded">
                            <span>End Date -</span>
                            <ReformateDate dateString={ann?.END_DATE} />
                          </div>
                        )}
                      </div>

                      <div className="mt-5">
                        <span className="text-xs text-gray-400">
                          <ReformateDate dateString={ann?.DATE_CREATED} />
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </Fragment>
        ))
      )
      }
    </div>
  );
};

export default Announcements;
