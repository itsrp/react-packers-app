import { onFetchCustomersSuccess } from "../actions/customer-actions";

export const fetchCustomers = () => {
return (dispatch) => fetch('/customers')
                        .then((response)=>{ response.json()
                                                .then(json=>{
                                                dispatch(onFetchCustomersSuccess(json));
                                            });
                        })
                        .catch(err=>{
                            console.log("Got error!" + err);
                        });
};