import React from "react";

import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';


export function Collection_1() {
    return (
        <>
            <header>
                <a href="/">Home</a>
                <a href="/posts">Blog</a>
                <a href="/about">About</a>
            </header>
            
            {/* note.md => Lesson #1*/}
            <Routes>
                <Route path="/" element={ <Homepage />}/>
                <Route path="/about" element={ <About />}/>
                <Route path="/posts" element={ <Blogpage />}/>
                <Route path="*" element={ <Notfoundpage />}/>
            </Routes>
        </>
    )
}