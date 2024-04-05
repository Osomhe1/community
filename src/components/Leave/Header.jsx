import PropTypes from 'prop-types'
import { Fragment} from "react";
import { IoIosArrowForward } from "react-icons/io";
import './leave.css'
import { Button } from '@nextui-org/react';
// import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function Header({apply}) {
  return (
    <Fragment>
      <section>
        <div className="flex justify-between items-center">
              <div>
                <h2 className="font-helvetica font-bold text-3xl">
                  Leave
                </h2>
                <div >
                  {/* <Breadcrumbs 
                itemClasses={{
                  item: "text-[rgba(39,44,51,.5)] data-[current=true]:text-[rgba(39,44,51,.35)]",
                  separator: "text-[rgba(39,44,51,.5)]",
                }}
                >
                <BreadcrumbItem className="breadcrumb">Self services</BreadcrumbItem>
                <BreadcrumbItem className="breadcrumb text-[rgba(39,44,51,.5)]">Leave</BreadcrumbItem>
              </Breadcrumbs> */}
                  <span className="text-gray-400 uppercase text-xs flex items-center gap-1 font-helvetica">Self service <IoIosArrowForward className="text-md" /> Leave</span>
                </div>
              </div>
                 <Button className="bg-[#00BCC2] hover:bg-[#00979C] transition-all text-xs rounded-[4px] text-white font-medium px-4 py-2 font-helvetica shadow" onClick={apply}>
              APPLY
              </Button>
              
        </div>
      </section>
    </Fragment>
  );
}

Header.propTypes={
apply:PropTypes.func
}
