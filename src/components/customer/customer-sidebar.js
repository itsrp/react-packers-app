import React from 'react';
import {Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const CustomerSideBar = (props) => {
    const handleSelect = () => {

    };

    return (
        <Nav stacked activeKey={1} onSelect={handleSelect}>
            <LinkContainer to='/customer/search'>
                <NavItem eventKey={1}>
                    Search
                </NavItem>
            </LinkContainer>
            <LinkContainer to='/customer/add'>
                <NavItem eventKey={2} title="Item">
                    Add
                </NavItem>
            </LinkContainer>
            <LinkContainer to='/customer/edit'>
                <NavItem eventKey={3} disabled>
                    Edit
                </NavItem>
            </LinkContainer>
        </Nav>
    );
};

export default CustomerSideBar;