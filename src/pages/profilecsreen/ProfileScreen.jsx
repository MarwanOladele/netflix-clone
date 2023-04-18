import React from "react";
import { Nav } from "../../component/Index";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../.././firebase";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <div className="flex justify-center items-center h-[100vh] pb-[20vh] text-white bg-black">
      <Nav />
      <div className="md:w-[50%] w-[100%] p-5">
        <h1 className="text-[60px] font-semibold mb-[20px] border border-solid border-[#282c2d]">Edit Profile</h1>
        <div className="flex gap-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="h-[100px] w-[13%]"
          />
          <div className="w-[87%]">
            <h2 className="bg-[gray] p-[15px] text-[15px] pl-[20px]">{user.email}</h2>
            <div className="">
              <button
              className="px-[10px] py-[20px] w-[100%] outline-0 border-none mt-5 bg-[#e50914] text-white cursor-pointer font-bold"
                onClick={() => {
                  signOut(auth);
                  navigate("/");
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
