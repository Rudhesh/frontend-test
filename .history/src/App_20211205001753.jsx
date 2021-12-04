import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from '@mui/material';
import axios from 'axios';
import './App.css';
import doors from './json/Doors.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenBox } from './slice';
import AlertBox from './components/AlertBox.jsx';
const App = () => {
  const [login, setLogin] = useState(false);
  async function eatChocolate(input) {
    getChocolate();

    let payload = { day: input };
    let res = await axios.post('http://localhost:5001/eat/chocolate', payload);

    let data = res.data;
    // alert('Chocolate is finished');
    setLogin(true);
    console.log(data);
  }
  const { t } = useTranslation();
  // return <Typography>{t('happyHolidays')}</Typography>;

  // const [isOpen, setIsOpen] = useState([]);
  // const [openBox, setOpenBox] = useState([]);
  // const [submitToStorage, setSubmitToStorage] = useState([]);

  const { openBox } = useSelector((state) => state.slice);
  const dispatch = useDispatch();
  console.log({ openBox });

  function checkDoorToOpen(inputDate) {
    const doorDate = new Date(inputDate);
    const today = new Date();
    // console.log(today);
    // console.log(doorDate);
    let payload = { day: inputDate };

    async function chocolate() {
      let res = await axios.post('http://localhost:5001/open/chocolate', payload);
      let data = res.data;
      console.log(data);
    }

    let d = new Date();
    let date = d.getDate();
    console.log({ inputDate });
    console.log(date);
    console.log(inputDate);
    // date >= inputDate
    //   ? chocolate() && openDoor(inputDate) && getChocolate()
    //   : alert('Not allowed to open yet, wait a few days');

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

  console.log({ openBox });

  const convertDayToDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    return day;
  };

  const resetDoors = () => {
    setOpenBox([]);
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="calendar">
            {doors.map((door, i) => {
              return (
                <div key={i}>
                  {openBox.some((selected) => selected && selected.day === door.id) ? (
                    <div className="dooropen">
                      <div>
                        <div className="doorBox" onClick={() => eatChocolate(door.id)}>
                          <img src={door.img} />
                          {/* <Button className="grab">Grab it!!!</Button> */}
                        </div>
                        {!login ? <div></div> : <AlertBox login={login} setLogin={setLogin} />}
                      </div>
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

          <button onClick={() => resetDoors()}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
