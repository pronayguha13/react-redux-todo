import React from "react";
import { Col, Row } from "antd";

import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <Row justify="space-between" align="middle" className={styles.container}>
      <Col span={4}>Logo</Col>
      <Col span={12}>Controller section</Col>
    </Row>
  );
};

export default Navbar;
