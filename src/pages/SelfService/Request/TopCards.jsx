/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import { TbBuildingMonument } from "react-icons/tb";
import { MdOutlinePending } from "react-icons/md";
import { MdOutlineApproval } from "react-icons/md";
import { MdOutlineUpcoming } from "react-icons/md";
import PropTypes from "prop-types";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";

export default function OverviewCaTopCards({data}) {
  const navigate = useNavigate({});
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 lg:gap-6 my-3">
        {[
          // {
          //   name: "Upcoming Request",
          //   icon: MdOutlineUpcoming,
          //   total: 6,
            
          //   b_color: 'bg-cyan-100',
          //     t_color: 'text-cyan-600'
          // },
          
          {
              name: "Pending Request",
              icon: MdOutlinePendingActions,
              total: data?.filter(item=>item?.status==='Pending')?.length,
              b_color: 'bg-amber-100',
            t_color: 'text-amber-600'
            },
            {
                name: "Cancelled Request",
              icon: TbBuildingMonument,
              total: data?.filter(item=>item?.status==='Cancelled')?.length,
              
              b_color: 'bg-cyan-100',
              t_color: 'text-cyan-600'
            },
            {
              name: "Rejected Request",
              icon: MdOutlinePending,
              total: data?.filter(item=>item?.status==='Rejected')?.length,
              b_color: 'bg-amber-100',
              t_color: 'text-amber-600'
            },
            {
              name: "Completed Request",
              icon: MdIncompleteCircle,
              total: data?.filter(item=>item?.status==='completed')?.length,
              b_color: 'bg-cyan-100',
              t_color: 'text-cyan-600'
            },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="py-4 shadow-sm -top border border-[1px] border-[#dfe2e6] bg-white shadow flex rounded-t-[0.5rem] items-center justify-between px-4 gap-3"
              style={{
                boxShadow: "0 3px 3px -2px rgba(39,44,51,.1), 0 3px 4px 0 rgba(39,44,51,.04), 0 1px 8px 0 rgba(39,44,51,.02)"
              }}
            >
              <div className="flex gap-2 items-center">
                <div
                  className={`rounded-full ${item?.b_color} w-[50px] h-[50px] flex justify-center items-center`}
                >
                  <item.icon
                    size={25}
                    className={`!font-bold ${item.t_color}`}
                  />
                </div>
                <span className="text-[13px] text-[rgb(39, 44, 51)] font-[500] leading-[19.5px]">
                  {item?.name}
                </span>
              </div>
              <span className="text-[16px] leading-[19.5px] text-[rgba(39, 44, 51, 0.5)] font-[400] font-Roboto">
                  {item?.total}
                </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
