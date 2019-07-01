import React, { Component } from 'react';
import { Row, Col, Tabs, Button, Checkbox, message } from 'antd';
import Header from '../components/Header';
import TrackingSteps from '../components/TrackingSteps';
import PackageView from '../components/PackageView';
import TimePackageView from '../components/TimePackageView';
import $ from 'jquery';
import {filter} from 'lodash'
import Classes from '../css/packages.css';
import Modal from '../components/modal/Modal';
import LoginPage from '../pages/welcome';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


const PackageItem = (props) => (
  <Col md={6} xs={24}>
    <div className="package-item">
      <img src="/images/fruit_img.png" />
      <br />
      <p> {props.name} : {props.quantity} kgs</p>
    </div>
  </Col>
);

window.onload = () => {
  document.getElementById('left-button').onclick =  () => {
    this.scrollLeft(document.getElementById('content'), -300, 1000);   
  };
}

window.onload = () => {
  document.getElementById('right-button').onclick = () => {
    this.scrollLeft(document.getElementById('content'), 300, 1000);   
  }
}

var scrollLeft = (element, change, duration) => {
  var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;
      
      console.log(start)
      
    var animateScroll = () => {        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = (t, b, c, d) => {
t /= d/2;
if (t < 1) return c/2*t*t + b;
t--;
return -c/2 * (t*(t-2) - 1) + b;
};

export default class Welcome extends Component {

  constructor() {
    super();
    this.state = { 
      data: false,
      packageitem: false,
      default_package_id: 0,
      tab: 'price',
      show: false
    }
    this.verifySubmit = this.verifySubmit.bind(this)
    this.tabSelect = this.tabSelect.bind(this)
  }

  showModal = e => {
    this.setState({
      show: true
    });
  };

  onClose = e => {
    this.setState({
      show: false
    });
  };

  verifySubmit = (e) => {
    e.preventDefault()
    this.setState({
      'packageitem': true,
      'default_package_id': parseInt(e.target.id)
    })
  }

  tabSelect = (e) =>{
    // e.preventDefault()
    this.setState({'packageitem': false})
    if(e === "2" ){
      this.setState({ tab: 'time'})
    }
    else if(e === "1"){
      this.setState({ tab: 'price' })
    }
    else{
      this.setState({ tab: 'weight' })
    }
  }
  componentDidMount() {
    var user_token = localStorage.getItem("token");
    // console.log(user_token)
    $.ajax({
      url: "http://127.0.0.1:8000/api/fruits",
      type: 'GET',
      // headers: { "Authorization": "token "+localStorage.getItem('token') },
      success: function (data) {
        this.setState({ data: data })
        console.log(data)
      }.bind(this),
      error(data){
        message.error(data['responseJSON']['error'])
      }
    });
  }

  render() {
    var click_package_data = filter(this.state.data.package, { 'id': this.state.default_package_id });
    if (click_package_data.length >= 1){
      var fruits = click_package_data[0]['fruits']
      var package_price = click_package_data[0]['discount_price']
    }
    else{
      fruits = []
    }
    var price_data = filter(this.state.data.package, { 'type': 'price' });
    var time_data = filter(this.state.data.package, { 'type': 'time' });
    var delivery = 80;
    if(this.state.tab === "price"){
      var price_text = "Best for first time fruitmania customer or customers with a defined budget Price package lets you choose your favourite assortment of fruits for a fixed price Choose from a plethora of juicy fruits at value price"
    }
    else if(this.state.tab === "time"){
      price_text = "Time package unlocks the madness of fruitmania. Ideal for the fruit lover who can do away with the hassle of picking tasty, fresh fruits at your lock grocery store every week. Just choose your favourite fruits and let fruit mania deliver them you every week or every other week."
    }
    else{
      price_text = ""
    }
    return (
      <div>
        <Header/>
        <div className="container" style={{marginTop: "150px"}}>
            <Row justify="center" type="flex">
                  <TrackingSteps />
            </Row>
            <br />
            <p className="package-desc">{price_text}</p>
            <br />

            <a href="#" id="left_button" className="previous round">&#8249;</a>

            <Tabs defaultActiveKey="1" onChange={this.tabSelect} className="main-tabs">
              <TabPane tab="PRICE" key="1" className="tab-item" >
                <Row gutter={32}>
                  {price_data && price_data.map((item, i) =>
                    <PackageView title={item.title} price={item.discount_price} fruits={item.fruits} id={item.id} key={i} submit={this.verifySubmit}/>
                  )}
                </Row>
                <br />
                {this.state.packageitem ?
                  (<Col span={24}>
                    <Row gutter={6}>
                      {fruits.map((item, i) =>
                      <PackageItem name={item.name} quantity={item.quantity} key={i}/>
                      )}
                    </Row>
                  </Col>)
                :"" }
              </TabPane>
              <TabPane tab="TIME" key="2" className="tab-item">
                <Row gutter={32}>
                  {time_data && time_data.map((item, i) =>
                    <TimePackageView title={item.title} price={item.discount_price} fruits={item.fruits} id={item.id} key={i}/>
                  )}
                </Row>
              </TabPane>
              <TabPane tab="WEIGHT" key="3" className="tab-item">
                <Row type="flex" justify="center">
                <Col span={24} className="comming-soon">
                  <h1>

                Comming Soon...
                  </h1>
                </Col>
                </Row>
              </TabPane>
            </Tabs>
            <a href="#" id="right-button" className="next round">&#8250;</a>
            {this.state.packageitem ?
            (<Row gutter={16} type="flex" justify="space-between" align="middle">
              <Col className="price-bar" sm={20} xs={24}>
                <div className="item-price"><span>Item Total</span> <span>Rs. {package_price}/-</span></div>
                <div className="item-price"><span>Delivery</span> <span>Rs. {delivery}/-</span></div>
                <div className="item-price"><span>Total</span> <span>Rs. {package_price + delivery}/-</span></div>
              </Col>
              <Button className="proceed-btn" sm={4} xs={24}>
                Happy! Proceed
              </Button>
            </Row>): ""}
        </div>
        <button 
          onClick={e => {this.showModal()}}
          > show Modal 
        </button>
        <Modal onclose={this.onClose.bind(this)} show={this.state.show}>
              <LoginPage/>
              <h1>Hey</h1>
        </Modal>
      </div>
    );
  }
}
