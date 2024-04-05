/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const formatDate = (date) => {
  const newDate = new Date(date);
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return dateFormatter.format(newDate);
};
export default function LeaveDetail({role}) {
  const details = [
    { label: "Leave Type", value: "Casual" },
    { label: "Leave Start Date", value: "Jan 26, 2024" },
    { label: "Resumption Date", value: "Feb 5, 2024" },
    { label: "Reason", value: "Personal" },
    { label: "No of days", value: "10 days" },
    { label: "Hand over", value: "John Fixit" },
    { label: "Status", value: "Approved"},
  ];

  return (
    <>
      <div className="shadow border rounded p-4 bg-white w-full">
        <h4 className="text-lg font-medium font-helvatica">Leave details</h4>
        <ul className="flex flex-col gap-5 my-4">
          {details.map((detail, i) => (
            <li className="grid grid-cols-3 gap-4" key={i}>
              <p className="font-medium">{detail.label}</p>
              <span className="text-gray-400 col-span-2">{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
      {
        role !== 'request' &&
        <div className="flex justify-between mt-3">
            <button className="header_btnStyle bg-red-500 rounded text-white font-semibold  mx-2 my-1 md:my-0 px-[13px] py-[7px] uppercase">Reject</button>

            <button className="header_btnStyle bg-[#00bcc2] rounded text-white font-semibold  mx-2 my-1 md:my-0 px-[13px] py-[7px] uppercase">Approve</button>
        </div>
      }
    </>
  );
}
