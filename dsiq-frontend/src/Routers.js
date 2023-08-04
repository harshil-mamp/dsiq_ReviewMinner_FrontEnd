import React from "react";

import Home from "./components/Home";
import Login from './components/Login/index';

import { Route, Routes, Navigate } from "react-router-dom";


const Routers = () => {
    return (
        <div>
            <Routes>
            <Route index exact path="/" element={<Home />} />
                <Route index exact path="/login" element={<Login />} />

                {/* Temporary 404 component */}
                <Route path="*" element={<h1>Not Found</h1>} />

                {/* initially redirect to /login */}
                <Route path="/login" element={<Navigate replace to="/login" />} />
            </Routes>
        </div>
    )
}

export default Routers;