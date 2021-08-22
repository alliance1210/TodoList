import React, { useState } from 'react'
import Task from "./Task"
import Sidebar from "./Sidebar"
const Content = () => {
    const [selectedTab, setSelectedTab] = useState("INBOX");
    return (
        <div className="content">
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Task selectedTab={selectedTab} />
        </div>
    )
}

export default Content