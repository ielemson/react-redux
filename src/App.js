import React from 'react';
import {Provider} from "react-redux"
import store from "./redux/store"
import logo from './logo.svg';
import './App.css';
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer"
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
function App() {
return (
<Provider store={store}>
<div className="App container">
<header >
<HeaderComponent/>
</header>
<img src={logo} className="App-logo" alt="logo" />

<div className="row App-link container-md" style={{minHeight:"80vh"}}>
<div className="col-md-12 col-lg-12 col-sm-12 mb-2 ">
<CakeContainer/>
</div>

<div className="col-md-12 col-lg-12 col-sm-12 mb-2">
<HooksCakeContainer/>
</div>
<div className="col-md-12 col-lg-12 col-sm-12">
<IceCreamContainer/>
</div>
<div className="col-md-12 col-lg-12 col-sm-12">
<NewCakeContainer/>
</div>
</div>

<FooterComponent/>
</div>
</Provider>
);
}

export default App;
