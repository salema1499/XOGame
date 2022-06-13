import React from "react";
import {useHistory} from "react-router-dom";




function Home(){
  let history = useHistory();
  function handleClick() {
    history.push("/Play");
  }

    return(<div>
        <label>Enter Your First Player</label>
        <input type="text" placeholder="enter your first player"/>
        <label>Enter Your Second Player</label>
        <input type="text"  placeholder="enter your second player"/>
              <button onClick={handleClick}>Done..go to play</button> 
        
        </div>)
}

export default Home; 