import React, { useEffect, useState } from "react";
import Player from "./player.jsx";
import Drop from "./drops.jsx";

const Board = (prop) => {
    const [gameState, setGameState] = useState('false')
    const [score, setScore] = useState(0);
    const [dropCount, setDropCount] = useState(1);
    const [leftPosition, moveLeftPosition] = useState(300);
    const [speed, setSpeed] = useState(500);
    const [user, setUser] = useState('')
   
    
    


    useEffect(()=> {
        let person = prompt('Please enter your name', '');
        if (person == null || person == '') {
            alert('PUT YOUR NAME IN! (╯°□°）╯︵ ┻━┻');
            person = prompt('Dont be an annoying person ༼つಠ益ಠ༽つ', '')
            if (person == null || person == ''){
                person = "༼つಠ益ಠ༽つ"
                setUser(person);
            }
          } else {
            setUser(person);
          }
    }, [])

    

    useEffect(() => {
        const keyDown = (event) => {
            setGameState('true');
        }

        document.addEventListener('keydown', keyDown);
        
        return function cleanup() {
            document.removeEventListener('keydown', keyDown);
        }
}, [gameState]);
    

    setTimeout(()=> {
        if (gameState === 'true'){
        setDropCount(dropCount + 3)
        if (speed > 200){setSpeed(speed - 3)}
        setScore(score + 5)}
    }, speed)

    let drops = [];
    
    for (let i = 0; i < dropCount; i++){
        
        drops.push(<Drop 
            setDropCount={setDropCount} 
            setRestart={prop.setRestart} 
            restart={prop.restart} 
            setGameState={setGameState} 
            gameState={gameState} 
            speed={speed} 
            leftPosition={leftPosition} 
            score={score} 
            setScore={setScore} 
            user={user}/>)
}


useEffect(()=> {
    setScore(0)
    console.log('inside prop gamestate useeffect', drops)
},[gameState])

    return (
        <div id="board">
            <h1 id="score">CURRENT SCORE: {score}</h1>
            {drops}
            <Player leftPosition={leftPosition} moveLeftPosition={moveLeftPosition}/>
        </div>
    )
}


export default Board;



