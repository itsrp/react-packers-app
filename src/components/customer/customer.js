import React from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import CustomerSideBar from "./customer-sidebar";
import CustomerMain from "./customer-main";

const Customer = (props) => {
    return(
        <Grid>
            <Row className="show-grid">
                <Col xs={3} md={2}>
                    <CustomerSideBar/>
                </Col>
                <Col xs={12} md={6}>
                    <CustomerMain/>
                </Col>
            </Row>
        </Grid>
    );
};

export default Customer;