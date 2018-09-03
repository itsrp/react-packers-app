import React from 'react';
import { Col, Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const CustomerForm = (props) => {

    const {
        customer,
        onTextUpdate
    } = props;

    const FieldGroup = ({ id, label, help, ...props }) => {
        return (
            <FormGroup controlId={id}>
                <Col componentClass={ControlLabel} sm={2}>
                    <ControlLabel>{label}</ControlLabel>
                </Col>
                <Col sm={8}>
                    <FormControl {...props} />
                </Col>
            </FormGroup>
        );
    }

    const onSaveHandler = () => {
        alert('ON SAVE');
    };

    return (
        <div>
            <label>Customer Add/Edit</label>
            <Form horizontal>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Name"
                    placeholder="Enter Full name"
                    value={customer.name}
                    onChange={onTextUpdate}
                    name="name"
                />
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Mobile"
                    placeholder="Enter Mobile"
                    value={customer.mobile}
                    onChange={onTextUpdate}
                    name="mobile"
                />
                <FormGroup controlId="formControlsTextarea">
                    <Col componentClass={ControlLabel} sm={2}>
                        <ControlLabel>Address</ControlLabel>
                    </Col>
                    <Col sm={8}>
                        <FormControl componentClass="textarea" 
                        placeholder="Enter full address" 
                        value={customer.address}
                        onChange={onTextUpdate}
                        name="address"
                        />
                        
                    </Col>
                </FormGroup>

                <Col componentClass={ControlLabel} sm={2}>

                </Col>
                <Col componentClass={ControlLabel} sm={8}>
                    <Button onClick={onSaveHandler}>Submit</Button>
                    <LinkContainer to='/customer/search'><Button>Cancel</Button></LinkContainer>
                </Col>
            </Form>
        </div>
    );
};

export default CustomerForm;