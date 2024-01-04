import React, { useEffect, useState }  from "react";


const Player = (prop) => {
    const styles = {
    left: prop.leftPosition + 'px'
}
    
useEffect(() => {
        const keyDown = (event) => {
            if (event.key === 'ArrowLeft' && prop.leftPosition > 0 ){
                prop.moveLeftPosition(prop.leftPosition - 50);
            }else if (event.key === 'ArrowRight' && prop.leftPosition < 750){
                prop.moveLeftPosition(prop.leftPosition + 50);
            }
        }

        document.addEventListener('keydown', keyDown);
        
        return function cleanup() {
            document.removeEventListener('keydown', keyDown);
        }
}, [prop.leftPosition]);
   
    
    return (
        <div style={styles}  id="player">

        </div>
    )
}


export default Player;