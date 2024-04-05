/* eslint-disable no-unused-vars */
// import React from 'react'
// import women from '../../../../assets/images/women-on-laptops-around-table.jpg'
import women from '../../../public/assets/images/women-on-laptops-around-table.jpg'

import { useState } from "react";
import Drawer from "../Request&FormComponent/Drawer";
import Course from "./Course";
import { courses } from "./data";
import { Button, button } from "@nextui-org/react";
import { MdOutlineStar } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import SelectedCourse from './SelectedCourse';

const AvailableCourses = () => {
const [isOpen, setIsOpen] = useState(false)
const [selectedCourse, setSlectedCourse] = useState({})
const [selectedCategory, setselectedCategory] = useState('Popular')


const categories=['Popular','Technology','Business','Diploma']

  const handleClick=(course)=>{
  setIsOpen(true)
  setSlectedCourse(course)
  }

  return (
    <div className="font-poppins">
    <h1 className=" text-2xl md:text-[25px] font-semibold my-2">explore our courses</h1>
    <div
        className="rounded-md h-[14rem] sm:h-[16rem] md:h-[20rem]"
      >
      <img src={women} alt="" className='object-cover w-full h-full rounded-md' />
      </div>
    <div className="flex items-center gap-4 my-6">
    {categories.map(category=>(
    <Button className={`${selectedCategory==category?'bg-blue-500 text-white font-medium':'bg-white text-black'} px-3 py-1 rounded shadow-sm`} key={category} onClick={()=>setselectedCategory(category)}>{category}</Button>
    ))}
    </div>
    
      <div className="my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-0">
       {courses.map((course,i)=>(
       <div key={i} onClick={()=>handleClick(course)}>
          <Course course={course}/>
       </div>
          ))}
      </div>

      <Drawer sideBarNeeded={false} isOpen={isOpen} setIsOpen={setIsOpen} drawerWidth={'40rem'}>
   <SelectedCourse selectedCourse={selectedCourse}/>
      </Drawer>
    </div>
  );
};

export default AvailableCourses;
