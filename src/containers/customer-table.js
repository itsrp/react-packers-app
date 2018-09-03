import {connect} from 'react-redux';
import { fetchCustomers } from '../actions/customer-actions';
import CustomerTable from '../components/customer/customer-table';

const mapStateToProps = (state) => {
    return {
        customers: state.customers
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        onFetchCustomers: () => {
            dispatch(fetchCustomers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTable);