/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import { DatePicker } from "antd";
import Label from "../../../components/forms/FormElements/Label";
import Input from "../../../components/forms/FormElements/Input";

const PromotionForm = ({newPromotion, setNewPromotion,}) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPromotion.first_name == ""||newPromotion.last_name == ""||newPromotion.promoted_from == ""||newPromotion.promoted_to == ""||newPromotion.promotion_date == ""||newPromotion.promotion_reason == "") {
      alert("Every input in this field must be filled");
    } 
    else{
      console.log(newPromotion);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
     <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="duration">
                 First Name
                </Label>            
      <Input
            type="text"
            className='w-full md:col-span-2'
            value={newPromotion.first_name}
            onChange={(e) => {
              setNewPromotion((prev) => {
                return { ...prev, first_name: e.target.value };
              });
            }}
          />
              </div>
     <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="duration">
                 Last Name
                </Label>            
      <Input
            type="text"
            className='w-full md:col-span-2'
             value={newPromotion.last_name}
            onChange={(e) => {
              setNewPromotion((prev) => {
                return { ...prev, last_name: e.target.value };
              });
            }}
          />
              </div>
     <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="duration">
                 Promotion From
                </Label>            
      <Input
            type="text"
            className='w-full md:col-span-2'
            value={newPromotion.promoted_from}
            onChange={(e) => {
              setNewPromotion((prev) => {
                return { ...prev, promoted_from: e.target.value };
              });
            }}
          />
              </div>
     <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="duration">
                 Promotion To
                </Label>            
      <Input
            type="text"
            className='w-full md:col-span-2'
            value={newPromotion.promoted_to}
            onChange={(e) => {
              setNewPromotion((prev) => {
                return { ...prev, promoted_to: e.target.value };
              });
            }}
          />
              </div>

     <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="duration">
                 Promotion For
                </Label>            
      <Input
            type="text"
            className='w-full md:col-span-2'
            value={newPromotion.promoted_reason}
            onChange={(e) => {
              setNewPromotion((prev) => {
                return { ...prev, promoted_reason: e.target.value };
              });
            }}
          />
              </div>
     <div className="my-4 grid grid-cols-1 md:grid-cols-3 items-center gap-1 border-b pb-4">
                <Label htmlFor="duration">
                 Promotion Date
                </Label>            
     <div className='w-full md:col-span-2'>
      <DatePicker
              onChange={(e) => {
                setNewPromotion((prev) => {
                  return { ...prev, promotion_date: e.$d };
                });
              }}
              className=" w-full border outline-none focus:border-transparent my-1 h-10 rounded-md focus:outline-none"
            />
     </div>
              </div>
    

      <div className="flex justify-end mt-4">
       <Button
          type="submit"
          size="sm"
            color="primary"
            className='text-white rounded font-helvetica'
          >
            Submit
          </Button>
      </div>
    </form>
  );
};

export default PromotionForm;
