/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import { TbBuildingMonument } from "react-icons/tb";
import { MdOutlinePending } from "react-icons/md";
import { MdOutlineApproval } from "react-icons/md";
import PropTypes from "prop-types";

export default function OverviewCards({memos, setSelected}) {
  const navigate = useNavigate({});
  const handleSelect = (val) => {
    setSelected(val)
  };


  const memoData = [
    {
      name: "All Memo",
      key: "all",
      icon: MdOutlineReviews,
      total: memos?.length ?? 0,
      b_color: 'bg-amber-100',
      t_color: 'text-amber-600'
    },
    {
        name: "Draft Memos",
        key: "draft",
      icon: TbBuildingMonument,
      total: memos?.filter(memo=>memo?.created_by==='me' && memo?.status==='draft').length ?? 0,
      b_color: 'bg-cyan-100',
      t_color: 'text-cyan-600'
    },
    {
        name: "Approval Memos",
        key: "approval",
        icon: MdOutlineApproval,
        total: memos?.filter(memo=>memo?.created_by !== 'me').length ?? 0,
        b_color: 'bg-amber-100',
      t_color: 'text-amber-600'
      },
      {
        name: "Pending Memo",
        key: "pending",
        icon: MdOutlinePending,
        total: memos?.filter(memo=>memo?.created_by==='me' && memo?.status==='pending')?.length,
        b_color: 'bg-cyan-100',
      t_color: 'text-cyan-600'
      },
  ]


  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 my-3">
        {memoData?.map((item, index) => {
          return (
            <div
              key={index}
              className="py-4 shadow-sm -top border border-[1px] border-[#dfe2e6] bg-white shadow flex rounded-t-[0.5rem] items-center justify-between px-4 gap-3 cursor-pointer"
              onClick={() => handleSelect(item?.key)}
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

OverviewCards.propTypes = {
  memos: PropTypes.array,
}