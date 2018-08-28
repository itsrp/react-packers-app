import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import CustomerSearch from "./customer-search";
import CustomerAdd from "./customer-add";

const CustomerMain = (props) => {
    return(
        <main>
            <Switch>
                <Route path="/customer/search" component={CustomerSearch} />
                <Route path="/customer/add" component={CustomerAdd} />
                <Redirect to="/" />
            </Switch>
        </main>
    );
};

export default CustomerMain;