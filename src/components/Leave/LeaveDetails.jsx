/* eslint-disable react/prop-types */

const LeaveDetails = ({currentView}) => {
 const formatDate = (date) => {
    const newDate = new Date(date);
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return dateFormatter.format(newDate);
  };

  const details = [
    { label: "Leave Type", value: currentView.type },
    { label: "Leave Start Date", value: formatDate(currentView.from) },
    { label: "Resumption Date", value: formatDate(currentView.to) },
    { label: "Reason", value: currentView.reason },
    { label: "No of days", value: currentView.duration+' days' },
  ];
  return (
      <div className="shadow border rounded p-4 bg-white w-full">
        {/* <h4 className="text-lg font-medium">Leave Details</h4> */}
        <ul className="flex flex-col gap-5 my-4">
          {details.map((detail, i) => (
            <li className="grid grid-cols-3 gap-4" key={i}>
              <p className="font-medium">{detail.label}</p>
              <span className="text-gray-400 col-span-2">{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default LeaveDetails;
