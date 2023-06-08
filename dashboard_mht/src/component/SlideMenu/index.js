import React, { useEffect, useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { MdDashboard } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { FaPeopleCarry } from 'react-icons/fa';
import { MdPersonalVideo } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

const { SubMenu } = Menu;
// const { DownOutlined } = Icons;

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    navigate(item.key);
  };

  const staffMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="/Staff/Add">Add Staff</Menu.Item>
      <Menu.Item key="/Staff/Delete">Delete Staff</Menu.Item>
    </Menu>
  );

  const employeeMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="/Employee/Add">Add Employee</Menu.Item>
      <Menu.Item key="/Employee/Delete">Delete Employee</Menu.Item>
    </Menu>
  );

  const personalMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="/Personal/Add">Add Personal</Menu.Item>
      <Menu.Item key="/Personal/Delete">Delete Personal</Menu.Item>
    </Menu>
  );

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={handleMenuClick}
        selectedKeys={[selectedKeys]}
      >
        <Menu.Item key="/">
          <MdDashboard />
          <span>DashBoard</span>
        </Menu.Item>
        <SubMenu
          key="/Staff"
          title={
            <span>
              <BsPeopleFill />
              <span>Staff</span>
            </span>
          }
        >
          <Menu.ItemGroup key="/Staff" title="Staff">
            <Menu.Item key="/Staff/Add">Add Staff</Menu.Item>
            <Menu.Item key="/Staff/Delete">Delete Staff</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="/Employee"
          title={
            <span>
              <FaPeopleCarry />
              <span>Employee</span>
            </span>
          }
        >
          <Menu.ItemGroup key="/Employee" title="Employee">
            <Menu.Item key="/Employee/Add">Add Employee</Menu.Item>
            <Menu.Item key="/Employee/Delete">Delete Employee</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="/Personal"
          title={
            <span>
              <MdPersonalVideo />
              <span>Personal</span>
            </span>
          }
        >
          <Menu.ItemGroup key="/Personal" title="Personal">
            <Menu.Item key="/Personal/Add">Add Personal</Menu.Item>
            <Menu.Item key="/Personal/Delete">Delete Personal</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default SideMenu;
