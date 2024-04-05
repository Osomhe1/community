/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

import { Fragment, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Divider, Progress } from "rsuite";
import { MdDelete, MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose, IoMdCheckmarkCircle } from "react-icons/io";
import {
  Avatar,
  Badge,
  Button,
  CircularProgress,
  Tooltip,
} from "@nextui-org/react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Attachments = ({ setInformation,setSelectedTab }) => {
  const fileInputRef = useRef(null);
  const [percent, setPercent] = useState(30);
  const [isUploading, setisUploading] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#52c41a" : "#3385ff";


  const uploadAttachment=(files)=>{
  // setisUploading(true)
   setInformation((information)=>{
  return {...information,attachments:files}
  })
  // setSelectedTab(0)
  console.log(attachments);
  }
  const onFileSelect = (e) => {
    const files = e.target.files;
    if (files.length == 0) return;
    for (let i = 0; i < files.length; i++) {
      if (!attachments.some((e) => e.name == files[i].name)) {
        setAttachments((previousAttachments) => [
          ...previousAttachments,
          { name: files[i].name, imageUrl: URL.createObjectURL(files[i]) },
        ]);
      }
    }
 
    uploadAttachment(files)
  };

  const onDragOver=(event)=>{
  event.preventDefault()
  setIsDragging(true)
  event.dataTransfer.dropEffect='copy'
  }
  const onDragLeave=(event)=>{
  event.preventDefault()
  setIsDragging(false)
  }
  const onDrop=(event)=>{
  event.preventDefault()
  setIsDragging(false)
  const files=event.dataTransfer.files
     for (let i = 1; i < files.length; i++) {
      if (!attachments.some((e) => e.name == files[i].name)) {
        setAttachments((previousAttachments) => [
          ...previousAttachments,
          { name: files[i].name, imageUrl: URL.createObjectURL(files[i]) },
        ]);
      }
    }

     uploadAttachment(files)
  }


  const handleDeleteAttachment=(i)=>{
   setAttachments((previousAttachments) => previousAttachments.filter((_, index)=>index!==i));
  }

  return (
    <Fragment>
      <div className="w-full shadow p-8 bg-white rounded">
        {/* <h1 className="my-4 font-helvetica">Upload documents</h1> */}
        <div
          className={`${
            isUploading || (isDragging && "bg-slate-50 border-blue-400")
          } border-2 border-dashed rounded-xl p-4 min-h-[15rem]`}
          onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}
        >
          {/* Before upload */}
          {!isUploading ? (
            <div>
              {isDragging ? (
                <div className="flex flex-col justify-center items-center h-[12rem]">
                  <div className="inline-block p-4 my-5 rounded-full bg-slate-100 animate-bounce">
                    <IoCloudUploadOutline color="blue" size={32} />
                  </div>
                  <p className="text-blue-400 font-medium cursor-pointer">
                    {" "}
                    Drop file(s) here{" "}
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="inline-block p-4 my-5 rounded-full bg-slate-100">
                      <IoCloudUploadOutline color="gray" size={32} />
                    </div>
                    <p>
                      <span className="text-blue-400 font-medium cursor-pointer">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-gray-300">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                  <Divider>OR</Divider>
                  <div className=" flex justify-center mb-4">
                    <Button
                      onClick={() => fileInputRef.current.click()}
                      size="sm"
                      color="primary"
                      className="rounded-md text-white shadow font-medium"
                    >
                      Browse Files
                    </Button>
                    <input
                      type="file"
                      multiple
                      ref={fileInputRef}
                      hidden
                      name=""
                      id=""
                      onChange={onFileSelect}
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* When uploading */}
              <BsFileEarmarkPdfFill
                size={35}
                className="text-red-500 mx-auto my-4"
              />
              <p
                className={`w-[${percent}%] text-end text-gray-400 text-xs m-0`}
              >
                {percent}%
              </p>
              <Progress.Line
                percent={percent}
                strokeColor={color}
                status={status}
                strokeWidth={6}
                showInfo={false}
              />
              <div className="flex flex-col justify-center items-center my-4">
                <span className="font-semibold text-md tracking-[2px]">
                  Uploading Document...
                </span>
                <span className="text-xs text-gray-400">
                  [Name of the document]
                </span>
              </div>
            </div>
          )}
        </div>
        {/* {!isUploading ? (
          <div>
            <div className="my-4 flex flex-wrap gap-4">
              {attachments.map((attachment, index) => (
                <Tooltip
                  placement={"top"}
                  content={attachment.name}
                  color="primary"
                  key={index}
                >
                  <div className="cursor-pointer relative">
                    {attachment.name.toLowerCase().endsWith(".png") ||
                      attachment.name.toLowerCase().endsWith(".jpeg") ||
                      (attachment.name.toLowerCase().endsWith(".jpg") && (
                        <Avatar
                          size="lg"
                          radius="sm"
                          src={attachment.imageUrl}
                        />
                      ))}
                    {attachment.name.toLowerCase().endsWith(".pdf") && (
                      <div className="p-[14px] bg-slate-100 rounded-md">
                        <BsFileEarmarkPdfFill
                          size={30}
                          className="text-red-500"
                        />
                      </div>
                    )}
                        <IoIosClose
                        color="blue"
                    size={20}
                    className="cursor-pointer hover:bg-slate-100 rounded-full font-thin absolute top-0 right-0"
                    onClick={() => handleDeleteAttachment(index)}
                  />
                  </div>
                </Tooltip>
              ))}
            </div>
            <Button
              onClick={uploadAttachment}
              color="primary"
              className="rounded-md text-white shadow font-medium w-full my-4"
            >
              Upload
            </Button>
          </div>
        ) : (
          <div className="mt-6">
            Displaying the downloaded files
            <div className="flex gap-4 items-center">
              <h4 className="text-md font-medium text-gray-600">
                Uploaded Files
              </h4>
              <Badge content={3} color="primary" />
            </div>
            <div className=" flex flex-col gap-4">
                  when downloading
              {[1, 2].map((_, i) => (
                <div
                  className="flex justify-between items-center border-b p-2"
                  key={i}
                >
                  <div className="flex items-center gap-2">
                    <BsFileEarmarkPdfFill
                      size={35}
                      className="text-red-500 mx-auto my-4"
                    />
                    <div>
                      <p className="font-semibold m-0">Name of document.pdf</p>
                      <p className="text-gray-400 text-xs m-0">
                        {" "}
                        11 Sept. 2023 12:24pm 13MB
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CircularProgress
                      aria-label="Loading..."
                      size="md"
                      value={percent}
                      color={color}
                      showValueLabel={true}
                    />
                    <IoIosClose
                      size={25}
                      className="cursor-pointer hover:bg-slate-100"
                    />
                  </div>
                </div>
              ))}

              If not downloading
              <div className="flex justify-between items-center border-b p-2">
                <div className="flex items-center gap-2">
                  <span className="p-2  bg-green-200 rounded-full">
                    <IoMdCheckmarkCircle
                      size={25}
                      className="text-green-500 mx-auto"
                    />
                  </span>
                  <div>
                    <p className="font-semibold m-0">Name of document.pdf</p>
                    <p className="text-gray-400 text-xs m-0">
                      {" "}
                      11 Sept. 2023 12:24pm 13MB
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <MdDelete size={25} className="text-red-500 cursor-pointer" />
                  <MdOutlineFileDownload size={25} />
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
      {isUploading && (
        <div className=" flex justify-center">
          <Button
            color="primary"
            onClick={() => setisUploading(false)}
            className="rounded-md text-white shadow font-medium"
          >
            Upload another Document
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default Attachments;
