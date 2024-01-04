import React, { useState }  from "react";


const Drop = (prop) => {
    const [dropTop, setDropTop] = useState(0);
    const [dropLeft, setDropLeft] = useState(Math.floor(Math.random() * 16) * 50)
    
    const dropStyle = {
        zIndex: "1",
        top: dropTop + 'px',
        left: dropLeft+ 'px'
    }

    const resetGame = () =>{
        prop.setRestart(Math.random());
        prop.setDropCount(0);
        
    }

    setTimeout(() => { 

        if (dropTop < 750 && prop.gameState === 'true'){
        setDropTop(dropTop + 50)}}, prop.speed)

    
    if (prop.leftPosition === dropLeft && dropTop === 700 && prop.gameState === 'true'){
        prop.setGameState('false')
            
        setTimeout(() =>{
                
        fetch("/api/gameover", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                      },
                body: JSON.stringify({name: prop.user, score: prop.score})})
                .then((response) => response.json())
                
            if(confirm("GAME OVER! Play again?")){
                    resetGame();
                    }
             },prop.speed/2)    
        }

    return (
        <div style={dropStyle}  className="drop">
        </div>
    )
}


export default Drop;


