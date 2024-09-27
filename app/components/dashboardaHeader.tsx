"use client"

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";
import { setTab } from "../../redux/slices/tabSlice";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import axios from "axios";

const DashboardHeader = () => {
    const dispatch = useAppDispatch();
    const isCollapsed = useAppSelector((state) => state.sidebarReducer.isCollapsed);
    const selectedTab = useAppSelector((state) => state.tabReducer.selectedTab);
    const loggedInUser = useAppSelector((state) => state.userReducer.user);
    const currentItemId = useAppSelector((state) => state.ViewItemReducer.currentItemId);
    const router = useRouter();

    useEffect(() => {
        console.log("isColllapsed",isCollapsed);
        console.log("selectedTab",selectedTab);
        console.log("loggedInUser........", loggedInUser);
        console.log("currentItemId........", currentItemId);
        
    }, [isCollapsed, selectedTab, currentItemId])

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = async() => {
        try {
            console.log("Clicked LOGOUT");
            
            const response = await axios.post('http://localhost:3030/api/logout');
            if (response.status === 200) {
                router.push("/");
            }
        } catch (error) {
            console.error("Logout failed", error);
        }    
    };

    return(
        <div className="flex justify-between h-14 border-b-2 border-[#1e293b]">
            <div className="left flex items-center">
                <div className="logo w-[209px] flex justify-between items-center">
                    <div className="flex items-center h-full pl-4 pr-8">
                        <Link href={"/"}><h1>SPRINTER</h1></Link>
                    </div>
                    <button className="px-2" onClick={() => dispatch(toggleSidebar())}>
                    {isCollapsed ? '=' : 'x'}
                    </button>
                </div>

                <div className="flex flex-col pl-4 pt-[3px] border-l-2 h-full">
                    <h3 className="font-bold">Sample Project</h3>
                    <ul className="flex gap-4">
                        <button 
                            onClick={() => dispatch(setTab("Backlogs"))}
                            className={`${selectedTab === "Backlogs" ? "border-b-2 border-black" : ""} px-2`}
                        >
                            Backlogs
                        </button>
                        <button 
                            onClick={() => dispatch(setTab("Sprints"))}
                            className={`${selectedTab === "Sprints" ? "border-b-2 border-black" : ""} px-2`}
                        >
                            Sprints
                        </button>
                        <button 
                            onClick={() => dispatch(setTab("Reports"))}
                            className={`${selectedTab === "Reports" ? "border-b-2 border-black" : ""} px-2`}
                        >
                            Reports
                        </button>
                        <button 
                            onClick={() => dispatch(setTab("Chat"))}
                            className={`${selectedTab === "Chat" ? "border-b-2 border-black" : ""} px-2`}
                        >
                            Chat
                        </button>
                        {loggedInUser?.role === "admin" && (
                            <button 
                                onClick={() => dispatch(setTab("Members"))}
                                className={`${selectedTab === "Members" ? "border-b-2 border-black" : ""} px-2`}
                            >
                                Members
                            </button>
                        )}
                        <button 
                            onClick={() => dispatch(setTab("Feed"))}
                            className={`${selectedTab === "Feed" ? "border-b-2 border-black" : ""} px-2`}
                        >
                            Feed
                        </button>
                    </ul>
                </div>
            </div>
            {/* <div className="right flex items-center">
                <img className="size-10 rounded-full border-2 border-[#d4d5d6]" src={loggedInUser?.profilePic || "https://robohash.org/111.235.68.162.png"} />
                <h3 className="pr-8 pl-3">{loggedInUser?.firstName} {loggedInUser?.lastName}</h3>
            </div> */}
            <div className="right flex items-center relative">
                <div className="flex items-center" onClick={handleProfileClick}>
                    <img 
                        className="size-10 rounded-full border-2 border-[#d4d5d6] cursor-pointer"
                        src={loggedInUser?.profilePic || "https://robohash.org/111.235.68.162.png"} 
                        
                    />
                    <h3 className="pr-8 pl-3">{loggedInUser?.firstName} {loggedInUser?.lastName}</h3>
                </div>
                {isDropdownOpen && (
                    <div className="absolute top-full right-0 bg-white shadow-lg p-2 w-48 rounded-br-lg rounded-bl-lg">
                        <button className="block px-4 py-2 text-black" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
};

export default DashboardHeader;