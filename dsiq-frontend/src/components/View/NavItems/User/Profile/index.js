import React from "react";
import BG from "../../../../../assets/img/profile.jpg";
import Heading from "../../heading";

const Profile = () => {
  return (
    <div>
      <Heading image={BG} heading={"Your Profile"} />
    </div>
  );
};

export default Profile;
