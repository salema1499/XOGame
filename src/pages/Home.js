import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import img from "../assets/images/xo.jpg";


function Home() {
  let history = useHistory();
  function handleClick() {
    history.push({
      pathname:'/Play',
      state:{
        playyerone :player1,
        playyertwo :player2
      }
    });
    


  }

const [player1, setPlayer1] = useState('');
const [player2, setPlayer2] = useState('');

  return (
    <div>
      <img src={img} className="img" alt="" />
      <div className="form">
        <div className="formone">
          <h3>
            <label><h3>Enter Your First Player (o):</h3></label>
          </h3>

          <input  type="text" placeholder="enter your first player" id="firstName"  onChange={(t)=>{setPlayer1(t.target.value)
          }}/>
        </div>
        <div className="formtwo">
          <h3>
            <label><h3>Enter Your Second Player(x) :</h3></label>
          </h3>
          <input type="text" placeholder="enter your second player" id="secondName"  onChange={(t)=>{setPlayer2(t.target.value)}}/>
        </div>
      </div>
      <div className="formbuttom">
        <button  className="backButton2"  id="btn" onClick={handleClick}  disabled={!(player1 && player2)}>
          Done..go to play  <i class='fab fa-pushed'></i>
        </button>
      </div>

      
    </div>
  );
}

export default Home;
