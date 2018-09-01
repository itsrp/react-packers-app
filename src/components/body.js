import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Customer from "./customer/customer";
import Order from "./order";
import Report from "./report";

const Body = (props) => {
    return(
        <main>
            <Switch>
                <Route path="/" exact component={Customer} />
                <Route path="/customer" component={Customer} />
                <Route path="/order" component={Order} />
                <Route path="/report" component={Report} />
                <Redirect to="/" />
            </Switch>
        </main>
    );
};

export default Body;