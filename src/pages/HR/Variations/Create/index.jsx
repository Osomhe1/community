import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import PageHeader from "../../../../components/payroll_components/PageHeader";

const Create = () => {
  return (
    <>
      <div className="py-4">
        <div className="shadow-sm w-full">
          <PageHeader
            header_text={"Create New Variation"}
            btnAvailable={false}
          />
          <form action="" className="p-4">
            <div className="grid md:grid-cols-2 col-span-3 gap-4 my-4">
              <div className="">
                <Select
                  variant="bordered"
                  label="Variation Type"
                  className=""
                  labelPlacement="outside"
                  value={''}
                >
                  <SelectItem value={"Annual"}>Annual</SelectItem>
                  <SelectItem value={"First Appointment"}>First Appointment</SelectItem>
                  <SelectItem value={"Promotion"}>Promotion</SelectItem>
                  <SelectItem value={"License/certification"}>License/certification</SelectItem>
                  <SelectItem value={"Certification"}>Certification</SelectItem>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 col-span-3 gap-4 my-4">
              <div className="">
                <Input
                  type="date"
                  label="Default Payment Percent"
                  variant="bordered"
                  placeholder="Payment percentage"
                  labelPlacement="outside"
                />
              </div>
            </div>
            <div className="flex justify-en space-x-3">
              {/* <Button size="md" className={"bg-red-500 text-white"}>
            Close
          </Button> */}

              <Button size="md" className="bg-[#00bcc2] text-white">
                Create Variation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
