import {connect} from 'react-redux';
import CustomerForm from '../components/customer/customer-form';
import { updateText } from '../actions/common-actions';
import { fetchCustomers } from '../actions/customer-actions';

const mapStateToProps = (state) => {
    return {
        customer: state.customer
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        onTextUpdate: (event) => {
            dispatch(updateText('customer', event.target.name, event.target.value));
        },
        onFetchCustomers: () => {
            dispatch(fetchCustomers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);