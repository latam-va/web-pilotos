import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileComponent = ({ user }: any) => {
  return (
      <div className="flex ml-20 items-center justify-center w-full h-fit min-h-screen bg-zinc-200">
          <ProfileCard user={user} />
      </div>
  )
};

export default ProfileComponent;
