/* eslint-disable no-unused-vars */
import { ImFilePdf } from "react-icons/im";

// import { BsFiletypeDoc } from "react-icons/bs";
// import { BsFiletypeDocx } from "react-icons/bs";
// import { GrDocumentCsv } from "react-icons/gr";
// import { GrDocumentZip } from "react-icons/gr";
// import { GrDocumentWindows } from "react-icons/gr";

// import { useReactToPrint } from "react-to-print";
import { DownloadIcon } from "lucide-react";

import { Button } from "@nextui-org/react";

import { useState } from "react";

import { useLoadAnnouncement } from "../../../lib/query/queryandMutation";
import AnnounceShimmer from "../../home/centerFeed/AnnounceShimmer";
import CreateAnnouDrawer from "./components/CreateAnnouDrawer";

const Announcement = () => {
  const { data, isPending } = useLoadAnnouncement();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  return (
    <div className="space-y-5 mb-5 grid lg:grid-cols-2  gap-x-6  sm:w-[80%] mx-auto lg:w-full">

      <div className="space-y-5 order-2 lg:order-1">
      <div className="bg-white rounded-xl py-4 overflow-clip shadow-sm">
          <div className="px-9 text-gray-500 ">
            <div className="flex flex-wrap gap-y-2 justify-between items-center gap-x-4">
              <div>
                <span className="text-lg font-bold">All Notices</span>
              </div>
              <div>
                <Button onClick={() => setIsDrawerOpen(true)} color="primary">
                  + New Announcement
                </Button>
              </div>
            </div>
          </div>
        </div>
        <AnnounceShimmer />

        <div className="bg-white rounded-xl py-7 overflow-clip shadow-sm">
          <div className="px-9 text-gray-500">
            <div>
              <b>Announcement!!</b>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ducimus accusamus iste optio officia iure, sequi facilis provident
              reprehenderit, voluptatum dignissimos veritatis enim facere magnam
              quos. Sequi possimus veritatis facilis. Praesentium odit
              temporibus saepe id nostrum eius accusantium dignissimos, fugit ut
              reiciendis illum excepturi ab eveniet asperiores minus doloribus
              sint.
            </span>
            <div className="mt-5">
              <span className="text-xs text-gray-400">15 Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl py-7 overflow-clip shadow-sm">
          <div className="px-9 text-gray-500">
            <div>
              <b>New Way Forward!</b>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ducimus accusamus iste optio officia iure, sequi facilis provident
              reprehenderit, voluptatum dignissimos veritatis enim facere magnam
              quos. Sequi possimus veritatis facilis. Praesentium odit
              temporibus saepe id nostrum eius accusantium dignissimos, fugit ut
              reiciendis illum excepturi ab eveniet asperiores minus doloribus
              sint.
            </span>

            <div className="flex gap-x-4 flex-wrap space-y-1 mt-5 items-center">
              <div className="relative">
                <div
                  onClick={() => onDocClick("assets/doc/doc1.pdf", "doc.pdf")}
                  alt=""
                  className="border py-2 shadow-sm rounded flex  items-center gap-1 px-2 cursor-pointer"
                >
                  <ImFilePdf className="text-red-500" />

                  <span>Recruitment File 202.pdf</span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <span className="text-xs text-gray-400">12 Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl py-7 overflow-clip shadow-sm">
          <div className="px-9 text-gray-500 ">
            <div className="mb-4">
              <b>Beware!!</b>
            </div>

            <div className="relative group">
              <img
                src="/assets/images/shopevent/shop4.jpeg"
                className="h-[500px] w-full"
                alt=""
              />

              <div className="z-4 hidden absolute group-hover:block bg-black h-full w-full top-0 opacity-20"></div>

              <div
                className="p-1  transition-all duration-200 rounded-full cursor-pointer lightbtn left-[45%] bottom-[50%]  z-10  hidden absolute group-hover:block shadow-lg"
                onClick={() =>
                  onDocClick("assets/images/shopevent/shop4.jpeg", "img.jpeg")
                }
              >
                <DownloadIcon
                  className=" z-2 p-1 text-white "
                  strokeWidth={2}
                  size={45}
                />
              </div>
            </div>

            <div className="mt-5">
              <span className="text-xs text-gray-400">15 Jan 2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 order-1 lg:order-2 !mb-5"> 
        <div className="bg-white rounded-xl py-4 overflow-clip shadow-sm">
          <div className="px-9 text-gray-500 ">
            <div className="flex flex-wrap gap-y-2 justify-between items-center gap-x-4">
           
            <div className="mb-2">
            <span className="text-lg font-bold">Filters</span>
            </div>

              <div>
                <select
                  name=""
                  id=""
                  className=" max-w-[8rem]  md:max-w-[12rem] bg-gray-300 cursor-pointer outline-none rounded-md p-2 px-3"
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
             
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl py-4 overflow-clip shadow-sm">
          <div className="px-9 text-gray-500 ">
            {/* <div className="mb-2">
              <span >Filter</span>
            </div> */}

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
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
        </div>
      </div>

      <CreateAnnouDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default Announcement;
