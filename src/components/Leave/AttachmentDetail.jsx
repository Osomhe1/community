/* eslint-disable no-unused-vars */
// import React from 'react'

import { Avatar, Badge, Card, CardBody, CircularProgress } from "@nextui-org/react"
import { BsFileEarmarkPdfFill } from "react-icons/bs"
// import { IoIosClose } from "react-icons/io"
import profile_1 from '../../../public/assets/images/profiles/avatar-01.jpg'
import profile_2 from '../../../public/assets/images/profiles/avatar-02.jpg'
import profile_3 from '../../../public/assets/images/profiles/avatar-03.jpg'
import profile_4 from '../../../public/assets/images/profiles/avatar-04.jpg'
import profile_5 from '../../../public/assets/images/profiles/avatar-05.jpg'
import profile_6 from '../../../public/assets/images/profiles/avatar-06.jpg'
import { MdDelete, MdOutlineFileDownload } from "react-icons/md"
import { IoIosClose, IoMdCheckmarkCircle } from "react-icons/io"
import { useState } from "react"

const AttachmentDetail = () => {
const [percent, setPercent] = useState(30);
const attachments=[
{
name:'Profile',
url:profile_1
},
{
name:'Profile',
url:profile_2
},
{
name:'Profile',
url:profile_3
},
{
name:'Profile',
url:profile_4
},
{
name:'Profile',
url:profile_5
},
{
name:'Profile',
url:profile_6
},
]
const pdfFile=[
{
name:'student_enrollment_form.pdf',
},
{
name:'web_development.pdf',
},
]

const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#52c41a" : "#3385ff";
  return (
    <div className="w-full">
    {/* <div className="my-4">
            {attachments.map((attachment, index) => (
              <Card key={index} className=" my-2 shadow w-full">
                <CardBody className="flex flex-row justify-between items-center gap-3 bg-white">
                  <div className="flex gap-2 items-center">
                    {attachment.url.toLowerCase().endsWith(".png") ||
                      attachment.url.toLowerCase().endsWith(".jpeg") ||
                      (attachment.url.toLowerCase().endsWith(".jpg") && (
                        <Avatar
                          src={attachment.url}
                        />
                      ))}
                    {attachment.url.toLowerCase().endsWith(".pdf") && (
                      <BsFileEarmarkPdfFill
                        size={30}
                        className="text-red-500"
                      />
                    )}
                    <div>
                      <div className="text-[#444] font-medium">
                        Name: {attachment.name}
                      </div>
                      <div>
                        {" "}
                        <span className="font-semibold">File:</span>{" "}
                        {attachment.name}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div> */}
                  {/* <IoIosClose
                    size={25}
                    className="cursor-pointer hover:bg-slate-100"
                    onClick={() => handleDeleteAttachment(index)}
                  /> */}

                   <div className="mt-6">
            <div className=" flex flex-col gap-4">
              {pdfFile.map((file, i) => (
                <div
                  className="flex justify-between items-center bg-white shadow p-2"
                  key={i}
                >
                  <div className="flex items-center gap-2">
                    <BsFileEarmarkPdfFill
                      size={35}
                      className="text-red-500 mx-auto"
                    />
                    <div>
                      <p className="font-medium m-0">{file.name}</p>
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
              <div className="flex justify-between items-center p-2 bg-white shadow">
                <div className="flex items-center gap-2">
                  {/* <span className="p-2  bg-green-200 rounded-full">
                    <IoMdCheckmarkCircle
                      size={25}
                      className="text-green-500 mx-auto"
                    />
                  </span> */}
                   <Avatar
                src="https://imageio.forbes.com/specials-images/imageserve/5c33a1a6a7ea4364f49fc5a6/0x0.jpg?format=jpg&crop=3960,3963,x18,y9,safe&height=416&width=416&fit=bounds"
                size="md"
              />
                  <div>
                    <p className="font-medium tracking-wide m-0">Mike_Adenuga.jpg</p>
                    <p className="text-gray-400 text-xs m-0">
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
          </div>
  )
}

export default AttachmentDetail