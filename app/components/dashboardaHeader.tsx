"use client"

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";
import { setTab } from "../../redux/slices/tabSlice";
import Link from "next/link";

const DashboardHeader = () => {
    const dispatch = useAppDispatch();
    const isCollapsed = useAppSelector((state) => state.sidebarReducer.isCollapsed);
    const selectedTab = useAppSelector((state) => state.tabReducer.selectedTab);
    const loggedInUSer = useAppSelector((state) => state.userReducer.user);
    const currentItemId = useAppSelector((state) => state.ViewItemReducer.currentItemId);

    useEffect(() => {
        console.log("isColllapsed",isCollapsed);
        console.log("selectedTab",selectedTab);
        console.log("loggedInUSer........", loggedInUSer);
        console.log("currentItemId........", currentItemId);
        
    }, [isCollapsed, selectedTab, currentItemId])

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
                        {loggedInUSer?.role === "admin" && (
                            <button 
                                onClick={() => dispatch(setTab("Members"))}
                                className={`${selectedTab === "Members" ? "border-b-2 border-black" : ""} px-2`}
                            >
                                Members
                            </button>
                        )}
                    </ul>
                </div>
            </div>
            <div className="right flex items-center">
                <img className="size-10 rounded-full border-2 border-[#d4d5d6]" src={loggedInUSer?.profilePic} />
                <h3 className="pr-8 pl-3">{loggedInUSer?.firstName} {loggedInUSer?.lastName}</h3>
            </div>
        </div>
    )
};

export default DashboardHeader;