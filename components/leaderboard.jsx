import React, { useEffect, useState }  from "react";


const Leaderboard = (prop) => {
    const [highScores, setHighScores] = useState(['','','','','','','','','',''])
    const leaders = [];

    useEffect(() => {
        fetch("/api")
          .then((response) => response.json())
          .then((res) => setHighScores(res));
      }, [prop.restart]);
      
      for (let i = 0; i < highScores.length; i++){
        leaders.push(<li>{highScores[i].name}  --   {highScores[i].score}</li>)
      };
    
    return (
        <div id="leaderboard">
        <h2>LEADERBOARD</h2>
           <ol>
            {leaders}
           </ol>
        </div>
    )
}


export default Leaderboard;

