import { Card, Space, Statistic, Typography } from "antd";
import {SiToptal, SiVirustotal} from "react-icons/si";
import {GiMoneyStack} from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { BsPersonBadge } from "react-icons/bs";
function DashBoard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashBoardCard icon = {<SiVirustotal/>} title={"Total Staff"} value = {100}/>
        <DashBoardCard icon = {<FaDollarSign/>} title={"Salary Total"} value = {100}/>
        <DashBoardCard icon = {<SiToptal/>} title={"Total Staff1"} value = {100}/>
        <DashBoardCard icon = {<BsPersonBadge/>} title={"Total Staff2"} value = {100}/>
      </Space>

    </div>
  );
}
function DashBoardCard({icon, title, value}) {
  return (
    <Card>
    <Space direction="horizontal">
      {icon}
      <Statistic title={title} value={value}/>
    </Space>
  </Card>
  )
  
}
export default DashBoard;
