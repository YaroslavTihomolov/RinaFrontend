import React from 'react';
import {Route, Switch} from "react-router-dom";
import MenuCategory from "../pages/MenuCategory";
import CategoryDishes from "../pages/CategoryDishes";
import {DishInfo} from "../pages/DishInfo";
import Pay from "../pages/Pay";
import Cart1 from "../pages/Cart1";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/restaurant">
                <MenuCategory/>
            </Route>
            <Route exact path="/restaurant/category/:id">
                <CategoryDishes/>
            </Route>
            <Route exact path="/restaurant/category/dish/:id">
                <DishInfo/>
            </Route>
            <Route exact path="/restaurant/cart">
                <Cart1/>
            </Route>
            <Route exact path="/restaurant/cart/pay">
                <Pay/>
            </Route>
        </Switch>
    );
};

export default AppRouter;