/* eslint-disable no-unused-vars */
import { Fragment } from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import PropType from "prop-types"
import "./pageHeader.css"
import { Link } from "react-router-dom"
export default function PageHeader({header_text, breadCrumb_data, buttonProp, btnAvailable}) {
 
  return (
    <Fragment>
        <div className="flex justify-between flex-wrap my-2">
            <div className="rounded-lg">  
              <h2 className="header_h2">{header_text}</h2>
              <Breadcrumbs
                itemClasses={{
                  item: "text-[rgba(39,44,51,.5)] data-[current=true]:text-[rgba(39,44,51,.35)]",
                  separator: "text-[rgba(39,44,51,.5)]",
                }}
              >
                {
                    breadCrumb_data?.map((item, index)=>{
                        return(
                            <BreadcrumbItem key={index} className="breadcrumb">
                              <Link to={item?.path } className='hover:text-[rgba(39,44,51,.5)]'>
                                {item.name}
                              </Link>
                            </BreadcrumbItem>
                        )
                    })
                }
              </Breadcrumbs>
            </div>
            <div className="my-auto flex flex-wrap">
                {
                    buttonProp?.length?
                    buttonProp?.map((item, index)=>{
                        return(
                    <button key={index} className="header_btnStyle bg-[#00bcc2] rounded text-white font-semibold py-[10px] leading-[19.5px] mx-2 my-1 md:my-0 px-[16px] uppercase" onClick={()=>item.fn(item?.fnParameter)}>
                        {item?.button_text}
                    </button>
                        )
                    }):null
                }
            </div>
          </div>
    </Fragment>
  )
}

PageHeader.propTypes = {
    header_text: PropType.string,
    button_text: PropType.string,
    breadCrumb_data: PropType.array,
    buttonProp: PropType.array,
    btnAvailable: PropType.bool,
}
