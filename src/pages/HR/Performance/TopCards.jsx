import { useNavigate } from "react-router-dom";
import { app_routes } from "../../../utils/app_routes";
import { MdOutlineReviews } from "react-icons/md";
import { GrActions } from "react-icons/gr";
import { TbBuildingMonument } from "react-icons/tb";
import { GiTeamIdea } from "react-icons/gi";

export default function TopCards() {
  const navigate = useNavigate({});
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 my-3">
        {[
          {
            name: "Review",
            path: app_routes.hrOperation.performance.review,
            icon: MdOutlineReviews,
            b_color: 'bg-cyan-100',
            t_color: 'text-cyan-600'
          },
          {
            name: "Take Action",
            path: app_routes.hrOperation.performance.take_action,
            icon: GrActions,
            b_color: 'bg-amber-100',
            t_color: 'text-amber-600'
          },
          {
            name: "Set Up",
            path: app_routes.hrOperation.performance.setup,
            icon: TbBuildingMonument,
            b_color: 'bg-cyan-100',
            t_color: 'text-cyan-600'
          },
          {
            name: "Teams mapping",
            path: app_routes.hrOperation.performance.team_mapping,
            icon: GiTeamIdea,
            b_color: 'bg-amber-100',
            t_color: 'text-amber-600'
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="py-4 cursor-pointer rounded shadow-sm -top border border-[#ededed] bg-white shadow flex flex-co items-center justify-between px-4 gap-3"
              onClick={() => handleNavigate(item?.path)}
              style={{
                boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                webkitBoxShadow: "0 1px 1px rgba(0,0,0,.2)",
              }}
            >
              <div
                className={`rounded-full ${item.b_color} w-[50px] h-[50px] flex justify-center items-center`}
              >
                <item.icon size={25} className={`!font-bold ${item.t_color}`} />
              </div>
              <span className="text-[0.95rem] text-neutral-900 font-semibold font-Exotic">
                {item?.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
