/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect, useMemo } from "react";
import {
  // Input,
  Button,
  // Select,
  SelectItem,
  Checkbox,
  Tooltip,
} from "@nextui-org/react";

import Separator from "../../../../../components/payroll_components/Separator";
import { MdOutlineAttachment } from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";
import ReactQuill from "react-quill";
import { Chip } from "@nextui-org/react";
import { Select } from "antd";
import Input from "../../../../../components/forms/FormElements/Input";
import Label from "../../../../../components/forms/FormElements/Label";
import { showSuccess } from "../../../../../utils/messagePopup.js";

export default function Form({ handleCloseDrawer }) {
  const [memo_body, setMemo_body] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [multipleRecipient, setMultipleRecipient] = useState(0);
  const [attachments, setAttachments] = useState([]);
  const [recipients, setRecipients] = useState([]);

  const quillRef = useRef(null);

  const recipientOptions = [
    { label: "CEO", value: "ceo" },
    { label: "HR", value: "HR" },
    { label: "Product Manager", value: "product manager" },
    { label: "COO", value: "COO" },
    { label: "CTO", value: "CTO" },
  ];

  //attachment icon
  const attachmentIcon = {
    icon: attachments?.length ? IoDocumentAttachOutline : MdOutlineAttachment,
  };

  const quillModules = {
    // Add any custom modules if needed
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
        editor.root.style.height = "150px"; // Adjust the height as needed
        // editor.root.style.overflowY = "auto";
      }
    }
  }, []);

  // handle pick attachment file
  const handleChooseFile = (e) => {
    const file = e.target.files[0];
    setAttachments([...attachments, file]);
  };

  const handleClose = (fruitToRemove) => {
    setAttachments(
      attachments.filter((attachment) => attachment !== fruitToRemove)
    );
  };

  const handleSelectionChange = (value) => {
    console.log(value);
    setRecipients();
  };

  const handleSaveAsDraft = (e) => {
    e.preventDefault();
    const data = { subject, memo_body, recipients };
    localStorage.setItem(`DRAFT_MEMO`, JSON.stringify(data));
    setSubject("");
    setRecipients([]);
    setMemo_body("");
    handleCloseDrawer();
    showSuccess("Memo saved as draft");
  };

  const handleSubmitMemo = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(to, subject, memo_body);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      <div>
        <form className="mb-">
          {/* <div className="_compose_from my-2">
            <Input type="text" variant="underlined" label="From" />
          </div> */}
          
          <div className="_compose_to mb-4">
            <Label>From</Label>
            <Select
              placeholder="Search Recipient"
              onChange={setFrom}
              size={'large'}
              style={{
                width: 80,
              }}
              className="border-1 border-gray-300 rounded-md ms-3"
              defaultValue={'me'}
              variant="borderless"
              options={[
                {label: "Me", value: "Me"},
                {label: "Others", value: "Others"},
              ]}
            /><br />

            {
              from==='Others' && (
                <div className="mt-2">
                  <Input placeholder="Sender name"/>
                </div>
              )
            }

           
          </div>
          <div className="_compose_to mb-4">
            <Label>Recipient</Label>
            <Select
              mode="tags"
              size={"large"}
              placeholder="Search Recipient"
              onChange={setRecipients}
              className="border-1 border-gray-300 rounded-md"
              style={{
                width: "100%",
              }}
              variant="borderless"
              options={recipientOptions}
            />
            {/* <Select
            items={recipients}
              label="Recipients"
              // selectionMode={multipleRecipient ? "multiple" : "single"}
              selectionMode={'multiple'}
              variant="underlined"
              onChange={(e) => setTo(e.target.value)}
              classNames={{
                trigger: [
                  "outline-none",
                  "border-b-1",
                  "border-b-gray",
                  "shadow-none",
                ],
              }}
              renderValue={(items) => {
                return (
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Chip key={item+"___key"}>{item}</Chip>
                    ))}
                  </div>
                );
              }}
            >
              {(recipient) => (
                <SelectItem key={recipient} value={recipient}>
                  {recipient}
                </SelectItem>
              )}
            </Select> */}
            {/* {recipients.map((recipient) => (
              ))} */}

            {/* <div className="mt-2">
              <Checkbox
                isSelected={multipleRecipient}
                onValueChange={setMultipleRecipient}
              >
                Multiple Recipients?
              </Checkbox>
            </div> */}
          </div>
          <div className="_compose_subject my-2">
            <Label className="font-Roboto">Subject:</Label>
            <Input
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            {/* <Input
                type="text"
                variant={"bordered"}
                label="Subject"
                className="text-[rgb(33, 37, 41)] font-[400] h-[50px] text-[15px] leading-[2]"
                classNames={{
                  inputWrapper:
                    "outline-none border-b-[1px] shadow-none rounded-[0.375rem] bg-white",
                  label: "z-1",
                }}
              /> */}
            {/* <Input type="text" variant="underlined" label="From" /> */}
          </div>
          <div className="_compose_to">
            {/* {multipleRecipient ? ( */}
            {/* <Select
              label="Approvals"
              selectionMode={"multiple"}
              variant="underlined"
              onChange={(e) => setTo(e.target.value)}
              classNames={{
                trigger: [
                  "outline-none",
                  "border-b-2",
                  "border-b-gray",
                  "shadow-none",
                ],
              }}
            >
              {recipients.map((recipient) => (
                <SelectItem key={recipient} value={recipient}>
                  {recipient}
                </SelectItem>
              ))}
            </Select> */}
          </div>
          <div className="_compose_notes my-4">
            <Label htmlFor="notes">Notes</Label>
            <div className="flex flex-col rounded mt-2 mb-4">
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={memo_body}
                placeholder="Write Something Here..."
                onChange={setMemo_body}
                style={{ height: "500px" }}
                className="flex-1 border-none h-[280px] rounded-md w-full"
                modules={quillModules}
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {attachments.map((attachment, index) => (
              <Chip
                key={index}
                onClose={() => handleClose(attachment)}
                variant="flat"
              >
                <span className="text-blue-500">{attachment?.name}</span>(
                {Math.round(attachment?.size / 1000)}KB)
              </Chip>
            ))}
          </div>
          <div className="_compose_submit flex justify-between mt-3">
            <div className="attach my-auto">
              <button
                className={`header_btnStyle bg-[#fff] rounded text-[#00bcc2] border border-[#00bcc2] font-semibold py-[8px] leading-[19.5px mx-2 my-1 text-[0.7125rem] md:my-0 px-[16px] uppercase `}
                onClick={handleSaveAsDraft}
                type="submit"
              >
                Save as draft
              </button>
            </div>
            <button
              className={`header_btnStyle bg-[#00bcc2] rounded text-white font-semibold py-[8px] leading-[19.5px mx-2 my-1 text-[0.7125rem] md:my-0 px-[20px] uppercase `}
              onClick={handleSubmitMemo}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
