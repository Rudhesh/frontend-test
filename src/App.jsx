import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from '@mui/material';
import axios from 'axios';
import './App.css';
import doors from './json/Doors.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setOpenBox } from './slice';
import AlertBox from './components/AlertBox.jsx';
const App = () => {
  const { openBox, login } = useSelector((state) => state.slice);
  const dispatch = useDispatch();
  async function eatChocolate(input) {
    getChocolate();

    let payload = { day: input };
    let res = await axios.post('http://localhost:5001/eat/chocolate', payload);

    let data = res.data;
    dispatch(setLogin(true));
    console.log(data);
  }

  console.log({ openBox });

  function checkDoorToOpen(inputDate) {
    const doorDate = new Date(inputDate);
    const today = new Date();
    let payload = { day: inputDate };

    async function chocolate() {
      let res = await axios.post('http://localhost:5001/open/chocolate', payload);
      let data = res.data;
    }

    let d = new Date();
    let date = d.getDate();

    if (date >= inputDate) {
      chocolate();
      getChocolate();
      openDoor(inputDate);
    } else {
      alert('Not allowed to open yet, wait a few days');
    }
  }

  function openDoor(doorDate) {
    getChocolate();
  }

  async function getChocolate() {
    const result = await axios('http://localhost:5001/chocolates');
    console.log('get: ', result.data);
    dispatch(setOpenBox(result.data));
  }

  const convertDayToDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    return day;
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div className="content">
          <Typography>{t('happyHolidays')}</Typography>;
          <div className="calendar">
            {doors.map((door, i) => {
              return (
                <div key={i}>
                  {openBox.some((selected) => selected && selected.day === door.id) ? (
                    <div className="dooropen">
                      <div className="doorBox">
                        <img src={door.img} />
                        <div onClick={() => eatChocolate(door.id)}>
                          <Button className="grab">Collect Gift</Button>
                        </div>
                      </div>
                      {!login ? <div></div> : <AlertBox login={login} />}
                    </div>
                  ) : (
                    <div className="door" onClick={() => checkDoorToOpen(door.id)}>
                      <p>{convertDayToDate(door.day)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
