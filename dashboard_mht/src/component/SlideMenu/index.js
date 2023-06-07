import { Menu } from "antd"
import { MdDashboard } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { FaPeopleCarry} from 'react-icons/fa';
import { MdPersonalVideo} from 'react-icons/md';
import { useNavigate } from "react-router-dom";
// import {
//     MdDashboard,
//     BsPeopleFill,
//     FaPeopleCarry,
//     MdPersonalVideo,
// } from "@ant-design/icons";
function SlideMenu() {
    const navigate = useNavigate()
    return(
        <div className="SlideMenu">
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
                    key: '/Staff',
                },
                {
                    label: "Employee",
                    icon: <FaPeopleCarry/>,
                    key: '/Employee',
                },
                {
                    label: "Personal",
                    icon: <MdPersonalVideo/>,
                    key: '/Personal',
                }
            ]}></Menu>
        </div>
    )
}
export default SlideMenu