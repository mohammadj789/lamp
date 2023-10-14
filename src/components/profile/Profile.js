import React from "react";
import { InfoHeader } from "../PlayList/InfoHeader";
import { ProfileTopSong } from "./ProfileTopSong";
import { CardRow } from "./CardRow";

const Profile = () => {
  return (
    <div className="h-full overflow-auto sm:pb-16">
      <InfoHeader
        type={"artist"}
        image={"girl.jpg"}
        status={"Verified"}
        title={"Travis Scott"}
        listener={"123,23,01"}
        span
      />
      <ProfileTopSong title={"Popular"} />
      {/* <div className="p-3 grid w-full max-w-5xl gap-6 grid-cols-[repeat(6,1fr)] lg:grid-cols-[repeat(5,1fr)]  md:grid-cols-[repeat(4,1fr)] grid-flow-col sm:grid-cols-[repeat(3,1fr)] "> */}
      <CardRow title={"Favorites"} data={[0, 0, 0, 0, 0, 0]} />
    </div>
  );
};

export default Profile;
