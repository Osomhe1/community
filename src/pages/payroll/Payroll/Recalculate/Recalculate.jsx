import { Fragment, useState } from "react";
import { BsTicketDetailed } from "react-icons/bs";
import PayrollCard from "../../../../components/payroll_components/PayrollCard";
import ExpandedDrawerWithButton from "../../../../components/modals/ExpandedDrawerWithButton";
import FormDrawer from "../../../../components/payroll_components/FormDrawer";
import { CgAttribution } from "react-icons/cg";
export default function Recalculate() {
  const [open, setOpen] = useState({status: false, id: null})
    const iconSize = "5vh";
    const iconColor = "#344860"
    const listData = [
        {title: "Individual", icon: <BsTicketDetailed size={iconSize} color={iconColor} />},
        {title: "Attributes", icon: <CgAttribution size={iconSize} color={iconColor} />},
        {title: "General", icon: <BsTicketDetailed size={iconSize} color={iconColor} />},
        {title: "Upload Excel", icon: <BsTicketDetailed size={iconSize} color={iconColor} />}
    ]


    //drawer functions
    const handleOpenDrawer = (id) => {
      setOpen({...open, status: true, id});
    };
    const handleCloseDrawer = () => {
      setOpen({...open, status: false});
    };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-6 my-3">
        {listData.map((item, index) => {
          return (
            <Fragment key={index}>
              <div onClick={()=>handleOpenDrawer(index)}>
              <PayrollCard icon={item.icon} title={item.title}/>
              </div>
            </Fragment>
          );
        })}
      </div>

      <ExpandedDrawerWithButton
        isOpen={open.status}
        onClose={handleCloseDrawer}
        maxWidth={"60rem"}
      >
        <FormDrawer>
          <p>
            {
              open.id===0? <div >Individual</div>: open.id===1? <div >Attributes</div>: open.id===2? <div >General</div>: open.id===3? <div >Upload Excel</div>:null
            }
          </p>
        </FormDrawer>
      </ExpandedDrawerWithButton>
    </>
  )
}
