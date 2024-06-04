import {
  Airplay,
  BarChartBig,
  Bird,
  ExternalLink  ,
  FileVideo,
  Grid2X2,
  HomeIcon,
  Link,
  Search,
  Share2,
  ShoppingBag,
  SquareArrowOutUpRight,
  SquareArrowUpRight,
  User2,
} from "lucide-react";
import React from "react";
import { LabeledInput } from "../page";
import { Share } from "next/font/google";
import Image from "next/image";

function page() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <div className="h-full relative flex">
        <SideNavbar />
        <RenderContent />
      </div>
    </div>
  );
}
function RenderContent() {
  return (
    <div className="overflow-y-scroll w-full bg-slate-100 scroll-smooth -scroll-ms-3 pt-2 pb-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {/* header section  */}

        <div className="col-span-1 p-2">
          <label className="text-sm font-semibold text-slate-400 ">
            Card Title
          </label>
          <br />
          <div className="border rounded-md flex flex-col justify-between bg-white shadow-sm  aspect-video p-4">
            <LabeledInput
              label={"Generate video from any URL (Ex.Amazon)"}
              placeholder={"https://www.amazon.com"}
            />

            <span className="font-semibold text-black text-lg">Or</span>
            <br />
            <div className=" flex gap-4 justify-between">
              <button className="outline-violet-700 w-full border-violet-700 border-2 px-2 py-1 rounded-md text-violet-900 font-semibold bg-violet-300">
                Create from scratch
              </button>
              <button className="outline-violet-700 w-full border-violet-700 border-2 px-2 py-1 rounded-md text-violet-900 font-semibold bg-violet-300">
                Create from template
              </button>
            </div>
          </div>
        </div>

        {/* card 2  */}
        <div className="col-span-1 p-2 ">
          <label className="text-sm font-semibold text-slate-400 flex gap-2 ">
            Your Gallery <ExternalLink size={15} />
          </label>

          <div className="border rounded-md  flex flex-col justify-center gap-2  aspect-video   bg-white shadow-sm  p-4 flex items-center flex-col  ">
            <Bird size={60} className="text-slate-400" />
            <span className="text-center text-gray-400">No Video at <br/> Create one today</span>
          </div>
        </div>

        {/* card 3  */}

        <div className="col-span-1 p-2 ">
          <label className="text-sm font-semibold text-slate-400 flex gap-2 ">Usage <ExternalLink size={15}/></label>
        
          <div className="border rounded-md  aspect-video bg-white shadow-sm   flex justify-center  flex-col items-center  ">
            <div
              className=" w-40 aspect-square rounded-full m-6 border-[1.5rem]
            flex flex-col items-center justify-center
             border-sky-400 "
            >
              <h4 className="text-lg font-thin">Total</h4>
              <span className="text-lg font-bold">2,000</span>
            </div>

            <div className="flex gap-2 items-center">
              <span className="w-4 h-4  bg-sky-500" />
              <p>
                Credits left <span className="font-bold ">100%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* template  */}
      <div className="w-full">
        <h3 className="font-semibold flex gap-2 my-3  text-slate-600">
          Templates <ExternalLink size={15} />
        </h3>
        <div className="border rounded-md bg-white p-4 ">
          {/* search bar  */}
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="border w-min rounded-md  px-2 py-1 flex gap-2 ">
              <input
                className="font-semibold outline-none "
                placeholder="Search here"
              />
              <Search size={18} className="text-slate-500"/>
            </div>
            <div className=" flex gap-2 flex-col md:flex-row lg:flex-row items-center mt-2">
              <div className="border w-min rounded-md   px-2 py-1 flex gap-2 ">
                <select>
                  <option>All Usecases</option>
                  <option>All Usecases</option>
                  <option>All Usecases</option>
                </select>
              </div>
              <div className="border w-min rounded-md   px-2 py-1 flex gap-2 ">
                <select>
                  <option>Portrait</option>
                  <option>Portrait</option>
                  <option>Portrait</option>
                </select>
              </div>
            </div>
          </div>

          {/* grid view  */}
          <br />
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {[1, 2, 3, 4, 5, 67, 8, 9, 5, 5, 2, 2, 6, , 22, 2, 2, 5, 5].map(
              (data) => (
                <div key={data} className=" rounded-md col-span-1 hover:scale-95 hover:transition-transform">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1712026461359-b7ca4f236edd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    height={0}
                    width={150}
                    className="w-full   rounded-md"
                  />
                  <h6 className="font-semibold text-sm">Image motion video</h6>
                  <span className="text-sm text-slate-400">Image list</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
function SideNavbar() {
  return (
    <div className="w-16 h-full flex flex-col items-center gap-3  bg-gray-100 border-r border-r-slate-300">
      <hr />
      <TabIcon icon={<HomeIcon />} active={true} />
      <TabIcon icon={<ShoppingBag />} />
      <TabIcon icon={<FileVideo />} />
      <TabIcon icon={<Grid2X2 />} />
      <TabIcon icon={<BarChartBig />} />
    </div>
  );
}
function Header() {
  return (
    <div className=" bg-gray-100 border-b border-b-slate-300 px-3 py-2 flex justify-between items-center">
      <Airplay className="p-2 " size={40} />
      <div className="flex gap-2">
        <button className="bg-purple-500 px-3 py-1 rounded-md text-white">
          Create
        </button>
        <User2 className="bg-slate-200 rounded-md p-3" size={40} />
      </div>
    </div>
  );
}

function TabIcon({ icon, active }) {
  return (
    <div className={`${active && "bg-gray-200 text-blue-600"} p-2 rounded-md`}>
      {icon}
    </div>
  );
}
export default page;
