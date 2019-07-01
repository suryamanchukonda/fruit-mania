import React, { Component } from 'react';
import { Modal, Row, Col, Form, Icon, Input, Button, message } from 'antd';
import $ from 'jquery'; 

const FormItem = Form.Item;

const LoginForm = (props) => (
  <div className="auth-form">
    <Form onSubmit={props.submit}>
      <FormItem>
        <Input type="number" placeholder="Mobile Number" onChange={props.change}/>
      </FormItem>
      <FormItem>
        <Input type="password" placeholder="Password" onChange={props.passchange}/>
      </FormItem>
      <FormItem>
        <Button htmlType="submit" className="auth-submit-btn">
          LOGIN
        </Button>
        <span>
          <Icon type="google" />
          <Icon type="facebook" />
        </span>
      </FormItem>
    </Form>
  </div>
);

const RegisterForm = (props) => (
  <div className="auth-form">
    <Form onSubmit={props.submit}>
      <FormItem>
        <Input type="number" placeholder="Mobile Number" onChange={props.change}/>
      </FormItem>
      <FormItem>
        <Input type="password" placeholder="Password" onChange={props.passchange}/>
      </FormItem>
      <FormItem>
        <Button htmlType="submit" className="auth-submit-btn">
          REGISTER
        </Button>
        <span>
          <Icon type="google" />
          <Icon type="facebook" />
        </span>
      </FormItem>
    </Form>
  </div>
);

const OtpForm = (props) =>(
  <div>
    <Modal
      title="Enter the otp"
      visible={props.visible}
      onOk={props.ok}
      onCancel={props.cancel}
      footer={[
        <Button key="submit" type="primary" onClick={props.otpsubmit}>
          Submit
            </Button>,
      ]}
      >
      <FormItem>
        <Input type="number" placeholder="enter otp" onChange={props.otpchange}/>
      </FormItem>
    </Modal>
  </div>
);

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      number: 0,
      password: "",
      visible: false,
      otp:0
    };
    this.onNumberChange = this.onNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.otpChange = this.otpChange.bind(this)
    this.otpSubmit = this.otpSubmit.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault();
    var url = 'http://127.0.0.1:8000/api/registration'
    if(this.state.login){
      url = 'http://127.0.0.1:8000/api/users'
    }
    if(this.state.number.toString().length === 10 && this.state.password.length > 5){
      var data = { 'mobile': this.state.number, 'password': this.state.password}
      $.post(url, data,function(data){
        if (this.state.login) {
          localStorage.setItem("token", data['token']);
          this.props.history.push('/packages')
        }
        else{
          this.setState({
            visible: true,
          });
        }
      }.bind(this), 'json')
        .fail(function (data) {
          console.log(data)
          message.error(data.responseJSON["error"])
        })
    }
    else{
      if (this.state.number.toString().length !== 10){
        message.error('enter a valid number')
      }
      else{
        message.error('Password should be more than 5 characters')
      }
    }
  };

  otpChange = (e) => {
    console.log(e.target.value)
    this.setState({
      otp: e.target.value,
    });
  }

  otpSubmit = (e) => {
    e.preventDefault()
    var data = { 'otp': this.state.otp, 'mobile': this.state.number}
    $.ajax({
      url: 'http://127.0.0.1:8000/api/otp',
      data: data,
      "method": "POST",
      'dataType': 'json',
      success: function (data) {
        console.log(data)
        localStorage.setItem("token", data['token']);
        this.props.history.push('/packages')
        // return <Redirect to='/packages' />
      }.bind(this),
      error: function (xhr, status, err) {
        message.error(xhr.responseJSON["error"])
      }.bind(this)
    });
  }
  
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  onNumberChange(event) {
    this.setState({ number: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <Row className="welcome">
        <Col sm={12} xs={24} className="auth-block">
          <div className="logo-block">
            <img src="/images/welcome_logo.png" />
          </div>
          <div className="auth-forms">
            <Row type="flex" justify="center">
              <Button className="auth-btn" onClick={() => this.setState({login: false})} >Register</Button>
              <Button className="auth-btn" onClick={() => this.setState({login: true})}>Login</Button>
            </Row>
            <br />
            <Row type="flex" justify="center">
              <Col sm={20} xs={24}>
                {this.state.login ? (
                  <LoginForm submit={this.handleSubmit} change={this.onNumberChange} passchange={this.onPasswordChange} />
                ) : (
                    <RegisterForm submit={this.handleSubmit} change={this.onNumberChange} passchange={this.onPasswordChange} />
                )}
              </Col>
            </Row>
            {this.state.visible} ? (<OtpForm visible={this.state.visible} ok={this.handleOk} cancel={this.handleCancel} otpchange={this.otpChange} otpsubmit={this.otpSubmit}/>) : ""
          </div>
        </Col>
        <Col sm={12} xs={24} className="banner" />
      </Row>
    );
  }
}
