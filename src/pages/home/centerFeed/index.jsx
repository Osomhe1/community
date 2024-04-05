import { useState } from "react";
import CreatePost from "./CreatePost";
// import HorizontalBirthdayCard from "./components/HorizontalBirthdayCard";
import InfoTab from "./components/InfoTab";

import Announcements from "./components/Announcements";
import PostFeeds from "./PostFeeds";
// import AnnounceShimmer from "./AnnounceShimmer";

import NewsCatalogue from "./NewsCatalogue";

const CenterFeed = () => {
  const [stepper, setstepper] = useState(1);

  return (
    <div className="h-full flex col-span-2 flex-col justify-start  sz:col-span-1 order-1 space-y-5 overflow-hidden z-0">
      <InfoTab step={setstepper} />

      {stepper === 1 && (
        <div className="space-y-5">
          <CreatePost />

        
          <PostFeeds/>

          {/* <div className="space-y-5 overflow-x-clip  bg-transparent">
            <HorizontalBirthdayCard />
          </div> */}
        </div>
      )}

      {stepper === 2 && (
        <div className="space-y-5 flex flex-col">
          <Announcements />
        </div>
      )}


      {stepper === 3 && (
        <div className="space-y-5 flex flex-col">
         <NewsCatalogue/>
        </div>
      )}
    </div>
  );
};

export default CenterFeed;
