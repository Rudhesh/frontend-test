import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import './AlertBox.css';
import { setLogin } from '../slice';
import santa from '../../public/img/santa-claus-transparent-6.png';

const AlertBox = ({ login }) => {
  const dispatch = useDispatch();
  function playAgain() {
    dispatch(setLogin(false));
    console.log({ login });
    return login;
  }
  return (
    <div>
      <div id="popup1" className="overlay">
        <div className="popup">
          <h2>Congratulations !!!!</h2>
          <img src={santa} className="photo swing" />
          <div className="content-1">Enjoy your Chocolates !!!</div>

          <Button id="play-again" onClick={playAgain}>
            Click to Eat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
