import React from "react";

import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from "./components/Layout";


export function Collection_2() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={ <Homepage />}/>
                    <Route path="about" element={ <About />}/>
                    <Route path="posts" element={ <Blogpage />}/>
                    <Route path="*" element={ <Notfoundpage />}/>
                </Route>
            </Routes>
        </>
    )
}