/* eslint-disable react/prop-types */
// import {  formatDistance } from "date-fns";

// import Avatar from "../../../components/Avatar";
import { Avatar } from "@nextui-org/react";
import CommentReply from "./CommentReply";
// import { IoReloadOutline } from "react-icons/io5";

import TimeAgo from "./TimeAgo";
// import { subDays } from "date-fns";
// import moment from "moment";

const Comment = ({ data, withReply }) => {

  const filePrefix = "http://lamp3.ncaa.gov.ng/pub/"
  return (
    <div className="">

      {/* initial */}
      {/* <div className="flex justify-between px-9 pl-14  pb-1">
        <div className="flex gap-x-5 ">
          <div>
            <span className="rounded-full flex items-center relative"> */}
              {/* <Avatar big image={"/assets/images/profiles/avatar-07.jpg" || data?.FILE_NAME}/> */}
              {/* <img
                    src="/assets/images/profiles/avatar-07.jpg"
                    alt="User"
                    className="rounded-full w-[2.5rem] h-[2.5rem]"
                  /> */}

              {/* {data?.FILE_NAME?.includes("http") ? (
                <Avatar
                  size="sm"
                  src={data?.FILE_NAME || ""}
                  title={data?.LAST_NAME + " " + data?.FIRST_NAME}
                />
              ) : (
                <Avatar
                  size="sm"
                  name={data?.FIRST_NAME?.trim()[0]}
                  className="text-xs"
                  title={data?.LAST_NAME + " " + data?.FIRST_NAME}
                />
              )}
            </span>
          </div> */}
          {/* <div className="flex flex-col text-sm space-y-1">
            <span className="font-bold text-gray-500/90 text-sm">
              {data?.LAST_NAME +
                " " +
                data?.FIRST_NAME +
                " " +
                (data?.OTHER_NAMES || "")}
            </span> */}
            {/* <div className=" space-y-3">
              <span>{data?.MESSAGE}</span>

              <div className=" text-mainColor flex gap-x-8"> */}

                {/* reply */}

                {/* important!!! */}
                {/* <div className=" cursor-pointer"><span>{data?.LIKES_COUNT > 0 && data?.LIKES_COUNT } Like</span></div> */}

                {/* <div className=" cursor-pointer"><span>Reply</span></div> */}
                {/* <div className=" cursor-pointer"><span>Translate</span></div> */}

              {/* </div>
            </div>
          </div>
        </div> */}

        {/* <div className="block min-w-20">
          <span className="text-mainColor text-xs md:text-sm">
            <TimeAgo timestamp={data?.DATE_POSTED} />
          </span>
        </div>
      </div> */}









      {/* latest */}
      <div className="flex justify-between px-9 pl-14  py-2">

        <div className="flex gap-x-5 ">
          <div>
            <span className="rounded-full flex items-center relative">
              {/* <Avatar big image={"/assets/images/profiles/avatar-07.jpg" || data?.FILE_NAME}/> */}
              {/* <img
                    src="/assets/images/profiles/avatar-07.jpg"
                    alt="User"
                    className="rounded-full w-[2.5rem] h-[2.5rem]"
                  /> */}

              {
              // data?.FILE_NAME?.includes("http") ? (
              data?.FILE_NAME  ? (
                <Avatar
                  size="sm"
                  src={ filePrefix + data?.FILE_NAME || ""}
                  title={data?.LAST_NAME + " " + data?.FIRST_NAME}
                />
              ) : (
                <Avatar
                  size="sm"
                  name={data?.FIRST_NAME?.trim()[0]}
                  className="text-xs"
                  title={data?.LAST_NAME + " " + data?.FIRST_NAME}
                />
              )}
            </span>
          </div>

          <div className="flex flex-col gap-y-[0.1rem]">
              <div className="flex flex-col text-sm space-y-2 bg-gray-100 rounded-t-xl px-3 py-2 rounded-br-xl">
                <span className="font-bold text-gray-500/90 text-sm">
                  {data?.LAST_NAME +
                    " " +
                    data?.FIRST_NAME +
                    " " +
                    (data?.OTHER_NAMES || "")}
                </span>
                <div className=" space-y-2">
                  <span>{data?.MESSAGE}</span>

                  {/* <div className=" text-mainColor flex gap-x-8">
                  
                  </div> */}
                </div>
              </div>

              <div className="block min-w-20">
                <span className="text-mainColor text-xs md:text-sm">
                  <TimeAgo timestamp={data?.DATE_POSTED} />
                </span>
              </div>
          </div>

        </div>

        {/* <div className="block min-w-20">
          <span className="text-mainColor text-xs md:text-sm">
            <TimeAgo timestamp={data?.DATE_POSTED} />
          </span>
        </div> */}
      </div>

      {/* comment reply */}
      <div>
        {withReply && (
          <>
            <CommentReply
              name={"Sufiya Elija"}
              image={"/assets/images/profiles/avatar-05.jpg"}
            />
            <CommentReply
              name={"Sofaj Eliyya"}
              image={"/assets/images/profiles/avatar-08.jpg"}
            />
          </>
        )}
      </div>

      {/* {
            withReply &&  (
              <div className="grid place-items-center text-mainColor my-2 mb-4 ">
                <div className="flex gap-3 items-center cursor-pointer bg-xinputLight px-3 py-2 rounded-lg">
                  <IoReloadOutline/>
                  <span>Load More Replies</span>
                </div>
              </div>

            )
          } */}
    </div>
  );
};

export default Comment;
