import React, { useEffect } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import { useStateValue } from "./StateProvider";
import { auth } from "./components/firebase";

export default function App() {
    const [{ user }, dispatch] = useStateValue();

    // Code which runs based on given condition
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser
                })
            } else {
                // user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null
                })
            }
        })

        return () => {
            // Any cleanup operation
            unsubscribe()
        }
    }, [])
    console.log(`user is ${user}`);
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    {/* Default Page */}
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}