import React from 'react';
import {Table} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

class CustomerTable extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onFetchCustomers();
    }

    getRow = () => {
        const customers = this.props.customers;
        return customers ? customers.map(customer => {
            return <tr key={customer.id}>
                <th>
                    {customer.id}
                </th>
                <th>
                    {customer.name}
                </th>
                <th>
                    <LinkContainer to={`/customer/form/${customer.id}`}>
                        <button>Edit</button>
                    </LinkContainer>
                </th>
            </tr>;
        }) : null;
    };

    render() {
        return <div>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Edit</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.getRow()}
                </tbody>
            </Table>;
        </div>
    }

}

export default CustomerTable;