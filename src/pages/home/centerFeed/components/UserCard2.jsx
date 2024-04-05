/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
// import { BsBalloonHeart, BsCake2 } from "react-icons/bs";
import { PiBalloonFill } from "react-icons/pi";

const UserCard2 = ({ openDrawer, user, setCurUser }) => {
  const openWishDrawer = () => {
    setCurUser(user);
    // openDrawer()
  };

  // DATE_OF_BIRTH: "1975-01-20"
  // DEPARTMENT_NAME: "INFORMATION, COMMUNICATION & TECHNOLOGY (ICT)"
  // DESIGNATION_NAME: " ASST. GENERAL MANAGER(ICT)"
  // FILE_NAME: "AFOLABI-MONSURAT-ADEWUNMI-P.626.JPG"
  // FIRST_NAME: "MONSURAT"
  // LAST_NAME: "AFOLABI"
  // STAFF_ID: 1702

  const filePrefix = "http://lamp3.ncaa.gov.ng/pub/";

  return (
    <div className=" h-[370px] w-[300px]  relative bg-white">
      <Card
        // isFooterBlurred
        className="h-[370px] w-[300px]   bg-white p-0"
      >
        <CardBody className="bg-blue-500 flex  px-0 py-0 items-center justify-center">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={
              user?.FILE_NAME
                ? filePrefix + user?.FILE_NAME
                : "/assets/images/placeholder.jpg" ||
                  "/assets/images/placeholder.jpg"
            }
            // src={user?.FILE_NAME?.includes('https') ? user?.FILE_NAME  :  "/assets/images/placeholder.jpg" ||   "/assets/images/placeholder.jpg"}
          />

          {/* "/assets/images/profiles/avatar-08.jpg" || "/assets/images/placeholder.jpg" */}
        </CardBody>
        <CardFooter className="absolute bg-white bottom-0 z-10  py-3 ">
          <div className="flex flex-col gap-y-3 w-full">
            <div className="flex flex-grow gap-2 flex-1 items-center">
              <div className="rounded-full bg-red-400/60 text-white w-12 h-12 flex items-center justify-center gap-0">
                <PiBalloonFill
                  size={22}
                  className="text-red-500    -rotate-45"
                />
                <PiBalloonFill size={22} className="text-red-500  rotate-45" />
              </div>
              {/* <BsBalloonHeart className="rounded-full w-10 h-11 bg-black/20 text-white" /> */}
              <div className="flex flex-col justify-start items-start">
                <p className="text-tiny ">
                  {user?.LAST_NAME + " " + user?.FIRST_NAME}
                </p>
                <p className="text-tiny text-gray-500/80  text-start">
                  {user?.DESIGNATION_NAME}
                </p>
              </div>
            </div>
            <Button
              fullWidth
              color="primary"
              className="bg-blue-500"
              radius="full"
              size="md"
              onClick={openWishDrawer}
            >
              Wish Happy Birthday
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserCard2;
