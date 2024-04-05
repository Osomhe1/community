/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Camera, Send } from "lucide-react";
import { CiCircleRemove } from "react-icons/ci";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import API from "../../../../services/AxiosInstance";
import { useStateManager } from "react-select";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import { addAttachment } from "../../../../API/post";
// import { useState } from "react";



const CreatePostWithFormatter = ({desc, setDesc, setFile, file }) => {
  // const {userData} = useCurrentUser()

  // const [file, setFile] = useState(null)


  // const upload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     // console.log(formData, file)
  //     // const res = await addAttachment(formData)

  //     axios({
  //       method: "post",
  //       url: "http://lamp3.ncaa.gov.ng/attachment/addFile",
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data", "token": userData?.token },
  //     })
  //       .then(function (response) {
  //         //handle success
  //         console.log(response);
  //       })
  //       .catch(function (response) {
  //         //handle error
  //         console.log(response);
  //       });

  //     // console.log(res?.data)
  //     // return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const quillRef = useRef(null);


  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };



  useEffect(() => {
    // Access the Quill instance
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      if (editor) {
        // Set the height of the editor
        editor.root.style.minHeight = '150px'; // Adjust the height as needed
      }
    }
  }, []);




  return (
    <div className="flex flex-col rounded-md  space-y-3  bg-white dark:bg-cardDarkColor">
      <div className="flex justify-between ">

        <div className=" space-x-6 flex"></div>
      </div>

      <div>
        <div className="flex items-center bg-xinputLight rounded">
          <ReactQuill
            theme="snow"
            ref={quillRef}
            // style={{ height: '100%' }}
            value={desc}
            placeholder="Write Something Here..."
            onChange={setDesc}
            className="flex-1 border-none"
            modules={quillModules}
          />
        </div>
      </div>

      {/* <div>
        {file && (
          <div className="relative w-20 h-20">
            <img className="w-20 h-20" alt="" src={URL.createObjectURL(file)} />
            <CiCircleRemove
              size={22}
              strokeWidth={2.4}
              className="text-red-400 absolute -right-4 top-0 cursor-pointer"
              onClick={()=>setFile(null)}
            />
          </div>
        )}
      </div> */}

      {/* <div className="pt-3 flex justify-between flex-wrap cursor-pointer">
        <label
          htmlFor="img2"
          className="px-6 py-2 rounded outline-none border inset-0  flex space-x-2 items-center cursor-pointer"
        >
          <Camera size={15} />
          <span className="font-semibold text-sm">Image</span>
        </label>
       
      </div> */}

      {/* <input
        type="file"
        className="hidden"
        accept=".jpg, .jpeg, .png, .gif"
        id="img2"
        onChange={(e) => setFile(e.target.files[0])}
      /> */}

     
    </div>
  );
};

export default CreatePostWithFormatter;
