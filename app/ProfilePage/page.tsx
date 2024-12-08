import Chat from "@/components/Chat";
import List from "@/components/List";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="profilePage flex flex-col lg:flex-row h-screen">
        {/* Details Section */}
        <div className="details flex-1 lg:flex-[3] overflow-y-scroll pb-8 p-4 lg:p-8">
          <div className="wrapper flex flex-col gap-5">
            <div className="title flex items-center justify-between">
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mt-2">
                User Information
              </h1>
              <button className="py-2 px-4 bg-[#fbd437] cursor-pointer mt-5 rounded-md text-sm md:text-base">
                Update Profile
              </button>
            </div>
            <div className="info flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span>Avatar:</span>
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
              </div>
              <span className="flex items-center gap-4">
                Username : <b>John Don</b>
              </span>
              <span className="flex items-center gap-4">
                E-mail : <b>johnbanegadon@gmail.com</b>
              </span>
            </div>
            <div className="title flex items-center justify-between">
              <h1 className="font-light text-xl md:text-2xl lg:text-3xl mt-2">
                My List
              </h1>
              <button className="py-2 px-4 bg-[#fbd437] cursor-pointer rounded-md text-sm md:text-base">
                Create New Post
              </button>
            </div>
            <List />
            <div className="title flex items-center justify-between">
              <h1 className="font-light text-xl md:text-2xl lg:text-3xl mt-2">
                Saved List
              </h1>
            </div>
            <List /> 
          </div>
        </div>

        {/* Chat Section */}
        <div className="chatContainer flex-1 lg:flex-[2] bg-[#fcf5f3] h-full">
          <div className="wrapper py-0 px-4 lg:px-8 h-full">
            <Chat />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
