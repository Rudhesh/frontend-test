import React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import './AlertBox.css';
import { setLogin } from '../slice';

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
          <h2>Invalid !!!!</h2>

          <div className="content-1">Details did not match!!</div>

          <Button id="play-again" onClick={playAgain}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
