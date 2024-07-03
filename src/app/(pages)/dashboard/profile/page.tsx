import Profile from "@/app/components/Profile";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <Profile />
      <button
        className="
        my-4
      flex min-w-32
      justify-center rounded-md 
      bg-indigo-600 px-3 py-1.5 text-sm 
      font-semibold leading-6 text-white shadow-sm
    hover:bg-indigo-500 focus-visible:outline 
      focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-indigo-600"
      >
        Edit profile
      </button>
    </>
  );
};

export default ProfilePage;
