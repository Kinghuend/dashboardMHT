import { Card, Space, Statistic, Table, Typography } from "antd";
import {SiToptal, SiVirustotal} from "react-icons/si";
import {GiMoneyStack} from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { BsPersonBadge } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from 'react';
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";

function DashBoard() {
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashBoardCard icon = {<SiVirustotal/>} title={"Total Staff"} value = {100}/>
          <DashBoardCard icon = {<FaDollarSign/>} title={"Salary Total"} value = {100}/>
          <DashBoardCard icon = {<SiToptal/>} title={"Total Staff1"} value = {100}/>
          <DashBoardCard icon = {<BsPersonBadge/>} title={"Total Staff2"} value = {100}/>
        </Space>
        <Space>
          <RecentOrder/>
        </Space>
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
function RecentOrder() {
  const [dataSource, setDataSource] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() =>{
    setLoading(true)
    getOrders().then(res=>{
      setDataSource(res.products.splice(0,3))
      setLoading(false)
    })
  },[])
  return(
  <>
  <Typography.Text>Recent Order</Typography.Text>
  <Table columns={[
    {
      title: "Title",
      dataIndex :"title"
    },
    {
      title: "Quantity",
      dataIndex :"quantity"
    },
    {
      title: "Price",
      dataIndex :"discountedPrice"
    },
  ]}
  loading={loading}
  dataSource={dataSource}
  pagination={false}
  ></Table>
  </>
  )
}
export default DashBoard;
