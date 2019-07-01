import React from 'react';
import { Col, Button, Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


export default (props) => (
  <Col md={8} xs={24}>
    <div className="package-card">
      <h1>{props.title}</h1>
      <hr />
      <p style={{textAlign:"center"}}>Your package consistutes</p>
      <div className="items">
        {props.fruits.map((item, i) =>
          <p className="list-item">
            <Checkbox checked onChange={onChange} key={i}>{item.name}</Checkbox>{' '}
          </p>
        )}
      </div>
      <Button onClick={props.submit} id={props.id} className="verify">Verify</Button>
    </div>
  </Col>
);
