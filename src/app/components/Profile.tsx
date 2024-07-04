import React from "react";
import { InterfaceProfile, ProfileProps } from "../interfaces/PostPageIntefaces";

const Profile = ({ profile }: InterfaceProfile) => {
  return (
    <div  className="w-full bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 w-full">
        <h3 className=" text-2xl text-gray-700 font-bold leading-6">
          User Profile
        </h3>
      </div>
      <div className="border-t border-gray-200  px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className=" w-full py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.name}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.email}
            </dd>
          </div>
          <div className=" py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Company info</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.companyInfo}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Profile;
