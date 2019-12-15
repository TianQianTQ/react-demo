import React from 'react';
import logo from './logo.svg';
import { Button, Col, Row } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Button>Button</Button>
    </div>
  );
}

export default App;
