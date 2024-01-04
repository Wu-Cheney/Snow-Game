import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Board from './board.jsx';
import Leaderboard from './leaderboard.jsx';


const App = (prop) => {
    const [restart, setRestart] = useState(0)

    return (
        <div id="app">
            <h1>SNOW</h1>
            <Leaderboard restart={restart}/>
            <Board restart={restart} setRestart={setRestart}/>
        </div>
   ) 
}














const root = createRoot(document.querySelector('#root'));
root.render(<App />,);