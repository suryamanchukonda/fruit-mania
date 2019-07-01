import React from 'react';
import { Table } from 'antd';

const PackageDetails = ({text}) => (
  <div>
    <p>Package: Rs. {text}</p>
    <p>fruit a : 1kg</p>
    <p>fruit b : 3kgs</p>
    <p>fruit c : 2kg</p>
  </div>
)
const columns = [
  {
    title: 'Package',
    dataIndex: 'money',
    render: text => (<PackageDetails text={text} />)
  },
  {
    title: 'Payment',
    className: 'column-money',
    dataIndex: 'money'
  },
  {
    title: 'Tracking Details',
    dataIndex: 'address'
  }
];

const data = [
  {
    key: '1',
    payment: 'Pay On Delivery',
    money: '3000.00',
    address: 'New York No. 1 Lake Park'
  }
  
];

export default () => (
  <Table
    columns={columns}
    pagination={false}
    dataSource={data}
    bordered
    title={() => 'Order ID: FMA001'}
    footer={() => 'Order Status: Delivered'}
  />
);
