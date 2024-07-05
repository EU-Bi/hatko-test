"use client";
import Modal from "@/app/components/Modal";
import Profile from "@/app/components/Profile";
import { ProfileProps } from "@/app/interfaces/PostPageIntefaces";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  const [profile, setProfile] = useState<ProfileProps>({
    name: "",
    email: "",
    companyInfo: "",
  });

  useEffect(() => {
    const decodedToken = jwtDecode(localStorage.getItem("token")!);
    axios
      .get(`http://localhost:4000/auth/profile/${decodedToken.id}`)
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      });
  }, []);

  return (
    <div className="flex flex-col h-full items-center w-4/5 justify-between border-t min border-gray-200 bg-white px-4 py-3 sm:px-6">
      <Profile profile={profile} />
      <button
        onClick={toggleModal}
        className="
        my-4
        flex w-32
        justify-center rounded-md 
        bg-indigo-600 px-3 py-1.5 text-sm 
        font-semibold leading-6 text-white shadow-sm
       hover:bg-indigo-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2
       focus-visible:outline-indigo-600"
      >
        Edit profile
      </button>
      <Modal
        open={open}
        setOpen={setOpen}
        setProfile={setProfile}
        profile={profile}
      />
    </div>
  );
};

export default ProfilePage;
