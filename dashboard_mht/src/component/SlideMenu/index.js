import { Menu, Dropdown , Space } from "antd";
import { MdDashboard } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { MdPersonalVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
// import {
//     MdDashboard,
//     BsPeopleFill,
//     FaPeopleCarry,
//     MdPersonalVideo,
// } from "@ant-design/icons";
function SlideMenu() {
  const navigate = useNavigate();

  const item = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  // staffMenu
  const staffMenu = () => (
    <Dropdown
      menu={{
        item,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );

  return (
    <div className="SlideMenu">
      <Menu
        items={[
          {
            label: "DashBoard",
            icon: <MdDashboard />,
            key: "/",
          },
          {
            label: "Staff",
            icon: <BsPeopleFill />,
            key: "/Staff",
            submenu: staffMenu, // Thêm dropdown menu vào mục "Staff"
          },
          {
            label: "Employee",
            icon: <FaPeopleCarry />,
            key: "/Employee",
          },
          {
            label: "Personal",
            icon: <MdPersonalVideo />,
            key: "/Personal",
          },
        ]}
      />
    </div>
  );
}

export default SlideMenu;
