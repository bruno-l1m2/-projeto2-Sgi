import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Product from "./pages/Product";
import Login from "./pages/Login";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Home" component={Home} />
                <Route path="/Company" component={Company} />
                <Route path="/Product" component={Product} />
                <Route exact path="/" component={Login} />
            </Switch>              
        </BrowserRouter>
    );
};

export default Router;
