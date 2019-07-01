import React from 'react';
import { Col, Button, Checkbox } from 'antd';


export default (props) => (
    <Col md={8} xs={24}>
        <div className="package-card">
            <div className="items">
                <h1 style={{ 'color':'#7b3210'}}>{props.title}</h1>
                <hr />
                {props.fruits.map((item, i) =>
                <p className="list-item" style={{ textAlign: "center" }} key={i}>
                        {item.name}
                </p>)}
                <Button type="flex" className="verify time_money">Rs. {props.price}/-</Button>
            </div>
            <Button className="verify" style={{ 'color': '#7b3210' }} id='{props.id}'>Subscribe</Button>
        </div>
    </Col>
);
