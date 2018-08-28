import React from 'react';
import {Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const Menu = (props) => {
    const handleSelect = (k) => {
        console.log(k);
    };

    return (
        <Nav bsStyle="tabs" activeKey="1" onSelect={k => handleSelect(k)}>
            <LinkContainer to='/customer'>
                <NavItem eventKey="1" title="Item">
                    Customer
                </NavItem>
            </LinkContainer>
            <LinkContainer to='/order'>
                <NavItem eventKey="2" title="Item1">
                    Order
                </NavItem>
            </LinkContainer>
            <LinkContainer to='/report'>
                <NavItem eventKey="3">
                    Report
                </NavItem>
            </LinkContainer>
        </Nav>
    );
};

export default Menu;