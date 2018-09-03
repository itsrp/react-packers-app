import update from 'immutability-helper';
import { fetchCustomers } from './services/fetch-service';
const updateText = (state, actionData) => {
    return update(state, {
            [actionData.entityType]: {
                [actionData.fieldName]: {
                    $set: actionData.updatedText
                }
            }
    });
};

const updateCustomers = (state, customers) => {
    return update(state, {
        customers: {
            $set: customers
        }
    });
};

export default (state, action) => {
    if(action.type === 'ON_TEXT_CHANGE' ) {
        return updateText(state, action.data);
    } else if(action.type === 'FETCH_CUSTOMERS') {
        return fetchCustomers(state, action.data);
    } else if(action.type === 'FETCH_CUSTOMERS_SUCCESS') {
        return updateCustomers(state, action.data);
    }
    return state;
};