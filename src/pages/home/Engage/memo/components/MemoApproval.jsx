/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button } from "@nextui-org/button";
import Separator from "../../../../../components/payroll_components/Separator";
import Label from "../../../../../components/forms/FormElements/Label";
import { Select } from "antd";
import { Tabs, Tab } from "@nextui-org/react";

export default function MemoApproval() {
  const [approvals, setApprovals] = useState([]);

  const approvalOptions = [
    { label: "CEO", value: "ceo" },
    { label: "HR", value: "HR" },
    { label: "Product Manager", value: "product manager" },
    { label: "COO", value: "COO" },
    { label: "CTO", value: "CTO" },
  ];

  return (
    <>
      <Tabs
        aria-label="Options"
        // selectedKey={selected}
        // onSelectionChange={setSelected}
        className="mt-4 flex justify-en"
        fullWidth
        variant="bordered"
        color="secondary"
        classNames={{
          base: "rounded",
        }}
        radius="sm"
      >
        <Tab key="approval" title="Approval">
          <div className="_compose_to mb-4">
            <Label>Approval</Label>
            <Select
              mode="tags"
              size={"large"}
              placeholder="Select Approvals"
              onChange={setApprovals}
              className="border-1 border-gray-300 rounded-md"
              style={{
                width: "100%",
              }}
              variant="borderless"
              options={approvalOptions}
            />
          </div>
          <div className="_compose_submit flex justify-between mt-3">
            <div className="attach my-auto">
              <button
                className={`header_btnStyle bg-[#fff] rounded text-[#00bcc2] border border-[#00bcc2] font-semibold py-[8px] leading-[19.5px mx-2 my-1 text-[0.7125rem] md:my-0 px-[16px] uppercase `}
                type="submit"
              >
                Save as draft
              </button>
            </div>
            <button
              className={`header_btnStyle bg-[#00bcc2] rounded text-white font-semibold py-[8px] leading-[19.5px mx-2 my-1 text-[0.7125rem] md:my-0 px-[20px] uppercase `}

            >
              Save
            </button>
          </div>
        </Tab>
        <Tab key="watcher" title="Watcher">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-5">
          <div className="_compose_to mb-4">
            <Label>Watcher</Label>
            <Select
              mode="tags"
              size={"large"}
              placeholder="Select who to be a watcher"
              onChange={setApprovals}
              className="border-1 border-gray-300 rounded-md"
              style={{
                width: "100%",
              }}
              variant="borderless"
              options={approvalOptions}
            />
          </div>
          <div className="_compose_submit flex justify-between mt-3">
            <div className="attach my-auto">
              <button
                className={`header_btnStyle bg-[#fff] rounded text-[#00bcc2] border border-[#00bcc2] font-semibold py-[8px] leading-[19.5px mx-2 my-1 text-[0.7125rem] md:my-0 px-[16px] uppercase `}
                type="submit"
              >
                Save as draft
              </button>
            </div>
            <button
              className={`header_btnStyle bg-[#00bcc2] rounded text-white font-semibold py-[8px] leading-[19.5px mx-2 my-1 text-[0.7125rem] md:my-0 px-[20px] uppercase `}

            >
              Save
            </button>
          </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
