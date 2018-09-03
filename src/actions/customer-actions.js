export const fetchCustomers = () => {
    return {
        type: 'FETCH_CUSTOMERS'
    }
};
onFetchCustomersSuccess

export const onFetchCustomersSuccess = (customers) => {
    return {
        type: 'FETCH_CUSTOMERS_SUCCESS',
        data: customers
    }
};