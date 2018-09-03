import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import CustomerSearch from "./customer-search";
import CustomerForm from "../../containers/customer-form";

const CustomerMain = (props) => {
    return(
        <main>
            <Switch>
                <Route path="/customer/search" component={CustomerSearch} />
                <Route path="/customer/form/:id?" component={CustomerForm} />
                <Redirect to="/" />
            </Switch>
        </main>
    );
};

export default CustomerMain;