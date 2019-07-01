import React, { Component } from 'react';

import { Form, Row, Col, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const addressError = isFieldTouched('address') && getFieldError('address');
    const nameError = isFieldTouched('name') && getFieldError('name');
    const emailError = isFieldTouched('email') && getFieldError('email');
    const mobileError = isFieldTouched('mobile') && getFieldError('mobile');
    const pincodeError = isFieldTouched('pincode') && getFieldError('pincode');
    return (
      <Form onSubmit={this.handleSubmit} className="contact-form">
        <Row gutter={32}>
          <Col sm={12} xs={24}>
            <FormItem
              validateStatus={nameError ? 'error' : ''}
              help={nameError || ''}
              className="fm-input"
            >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your Name' }]
              })(<Input placeholder="Name" />)}
            </FormItem>
            <FormItem
              validateStatus={emailError ? 'error' : ''}
              help={emailError || ''}
              className="fm-input"
            >
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email' }]
              })(<Input placeholder="Email" />)}
            </FormItem>
            <FormItem
              validateStatus={mobileError ? 'error' : ''}
              help={mobileError || ''}
              className="fm-input"
            >
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Please input your mobile Number' }]
              })(<Input placeholder="Mobile" />)}
            </FormItem>
            <FormItem
              validateStatus={pincodeError ? 'error' : ''}
              help={pincodeError || ''}
              className="fm-input"
            >
              {getFieldDecorator('pincode', {
                rules: [{ required: true, message: 'Please input your Pincode' }]
              })(<Input placeholder="Pincode" />)}
            </FormItem>
          </Col>
          <Col sm={12} xs={24}>
            <FormItem
              validateStatus={addressError ? 'error' : ''}
              help={addressError || ''}
              className="input-address"
            >
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input your Address' }]
              })(<Input.TextArea placeholder="Enter your address Address"  />)}
            </FormItem>
          </Col>
        </Row>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
            className="save-btn"
          >
            SEND
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const ContactForm = Form.create()(HorizontalLoginForm);

export default ContactForm;
