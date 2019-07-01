import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'antd';
import Header from '../components/Header';
import OrderView from '../components/orderView';



export default class Address extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container" style={{marginTop: "100px"}}>
          <Row type="flex" justify="center">
          <Col span={24}>
          <h1 style={{textAlign:"center"}}>Orders</h1>
          </Col>
          <Col span={20}>
            <OrderView />
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}
