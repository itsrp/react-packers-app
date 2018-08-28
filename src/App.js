import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";
import Menu from "./components/menu";
import Body from "./components/body";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Menu/>
                <Body/>
            </div>
        );
    }
}

export default App;
