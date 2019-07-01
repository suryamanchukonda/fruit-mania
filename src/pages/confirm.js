import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import Header from '../components/Header';
import TrackingSteps from '../components/TrackingSteps';
import AddressForm from '../components/AddressForm';
import { Radio } from 'antd';
import $ from 'jquery';

const RadioGroup = Radio.Group;


export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            address: false
        }
    }
    componentDidMount() {
        var user_token = localStorage.getItem("token");
        // console.log(user_token)
        $.ajax({
            url: "http://127.0.0.1:8000/api/user-address",
            type: 'GET',
            headers: { "Authorization": "token " + localStorage.getItem('token') },
            success: function (data) {
                console.log(data, data.length)
                this.setState({ data: data })
                // console.log(data)
            }.bind(this),
            error(data) {
                // message.error(data['responseJSON']['error'])
            }
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container" style={{marginTop: "150px"}}>
                    <Row justify="center" type="flex">
                        <TrackingSteps />
                    </Row>
                    <Row>
                    <div className="title">
                        <p></p>
                        <h2> Select delivery address </h2>
                        <p></p>
                    </div>
                    <div className="confirm-card-div">
                        <div className="confirm-card">
                            <h1> <span className="confirm-card-spaces">Dragon fruit</span><span>2kg</span></h1>
                            <h1> <span className="confirm-card-spaces">Dragon fruit</span><span>2kg</span></h1>
                            <h1> <span className="confirm-card-spaces">Dragon fruit</span><span>2kg</span></h1>
                            <h1> <span className="confirm-card-spaces">Dragon fruit</span><span>2kg</span></h1>
                            <h1><span className="confirm-card-total">Total</span><span>Rs. 580/-</span></h1>
                        </div>
                        <div className="confirm-card-solid">
                          {/* <img className="address_image" src="./images/add_address.svg" alt="my image" onClick={this.myfunction} />
                          <h1 className="new_address_text"> Add a new Address </h1> */}
                          <h1> <span className="confirm-card-spaces">Name</span><span>2kg</span></h1>
                          <h1> <span className="confirm-card-spaces">Address</span><span>2kg</span></h1>
                          <h1> <span className="confirm-card-spaces">Mail id</span><span>2kg</span></h1>
                          <h1> <span className="confirm-card-spaces">Ph.no.</span><span>2kg</span></h1>
                          <div>
                            <a className="edit_confirm"> <h1>EDIT</h1> </a>
                            <a className="icon_confirm"> <h1>| </h1></a>
                            <a className="delete_confirm"> <h1>DELETE</h1> </a>
                          </div>
                        </div>
                    </div>
                    </Row>
                    <Row type="flex" className="row_margin" gutter={12}>
                        <Col span={6} className="address_radio">
                        <div>
                            <RadioGroup >
                                <Radio className ="address_radio" value={1}>Address 1</Radio>
                                <Radio className ="address_radio" value={2}>Address 2</Radio>
                                <Radio className ="address_radio" value={3}>Address 3</Radio>
                                <Radio className ="address_radio" value={4}>Address 4</Radio>
                            </RadioGroup>
                        </div>
                        </Col>
                        <Col span={15}>
                        <div>
                            <Button className="address">Submit address</Button>
                                <Button className="address_new">
                                    <img src="./images/add_address.svg" alt="my image" onClick={this.myfunction} />
                                Add a New Address</Button>
                        </div>
                        </Col>
                        <Col span={24}>
                            <div className="title">
                                <p></p>
                                <h2> Add a new Address </h2>
                                <p></p>
                            </div>
                            <div>
                                <AddressForm/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
