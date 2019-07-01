import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'antd';
import Header from '../components/Header';
import TrackingSteps from '../components/TrackingSteps';
import AddressForm from '../components/AddressForm';



export default class Address extends Component {
  render() {
    return (
      <div>
        <Header/>
        <br/>
        <div className="container" style={{marginTop: "100px"}}>
            <Row justify="center" type="flex">
              <TrackingSteps/>
            </Row>
            <Row type="flex" justify="center">
            <Col span={24}>
            <h1 style={{textAlign:"center", marginTop: "20px", fontFamily: "cursive", fontWeight: "400"}}>Add Address</h1>
            </Col>

            <Col span="20"> <AddressForm /></Col>
            </Row>
            <img src="fruits.jpeg" height="1000px" width="100%"/>
        </div>
      </div>
    );
  }
}
