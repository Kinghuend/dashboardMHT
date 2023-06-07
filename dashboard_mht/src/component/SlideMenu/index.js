import { Menu } from "antd"
import { MdDashboard } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import {FaPeopleCarry} from 'react-icons/fa';
import {MdPersonalVideo} from 'react-icons/md';
import { useNavigate } from "react-router-dom";


function SlideMenu() {
    const navigate = useNavigate()
    return<div className="SlideMenu">
        <Menu
        onClick={(item)=>{
            //item.key
            navigate(item.key);
        }}
        items={[
            {
                label: "DashBoard",
                icon: <MdDashboard/>,
                key: '/',
            },
            {
                label: "Staff",
                icon: <BsPeopleFill/>,
                key: '/staff',
            },
            {
                label: "Employee",
                icon: <FaPeopleCarry/>,
                key: '/employee',
            },
            {
                label: "Personal",
                icon: <MdPersonalVideo/>,
                key: '/personal',
            }
        ]}></Menu>
    </div>
}
export default SlideMenu