import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Effect11 from './effect11';
import Effect12 from './effect12';
import Effect13 from './effect13';
import Effect14 from './effect14';
import Effect15 from './effect15';
import Effect16 from './effect16';

function Effect1() {
    return (
        <>
            <h3>
                ---
                <a href="/home">Home</a>
                ---
                <a href="/posts">Posts</a>
                ---
                <a href="/comments">Comments</a>
                ---
                <a href="/photos">Photos</a>
                ---
                <a href="/albums">Albums</a>
                ---
                <a href="/todos">Todos</a>
                ---
                <a href="/users">Users</a>
            </h3>
            <BrowserRouter>
                <Routes>
                    <Route path='/home'></Route>
                    <Route path='/posts' element={<Effect11 />}></Route>
                    <Route path='/comments' element={<Effect12 />}></Route>
                    <Route path='/photos' element={<Effect13 />}></Route>
                    <Route path='/albums' element={<Effect14 />}></Route>
                    <Route path='/todos' element={<Effect15 />}></Route>
                    <Route path='/users' element={<Effect16 />}></Route>
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default Effect1;