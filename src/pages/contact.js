import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'antd';
import Header from '../components/Header';
import TrackingSteps from '../components/TrackingSteps';
import ContactForm from '../components/ContactForm';



export default class Address extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container" style={{marginTop: "130px"}}>
          <Row justify="center" type="flex">
            <TrackingSteps />
          </Row>
          <Row type="flex" justify="center">
          <Col span={24}>
          <h1 style={{textAlign:"center"}}>CONTACT US</h1>
          </Col>
          <Col span="20"> <ContactForm /></Col>
          </Row>
        </div>
      </div>
    );
  }
}
