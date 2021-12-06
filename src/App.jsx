import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from '@mui/material';
import axios from 'axios';
import './App.css';
import doors from './components/Doors.jsx';
import { setLogin, setOpenBox } from './slice';
import AlertBox from './components/AlertBox.jsx';
import { useAppDispatch, useAppSelector } from './redux/redux.hooks';
const App = () => {
  const { openBox, login } = useAppSelector((state) => state.slice);

  const dispatch = useAppDispatch();

  async function eatChocolate(input) {
    getChocolate();

    let payload = { day: input };
    let res = await axios.post('http://localhost:5001/eat/chocolate', payload);

    let data = res.data;
    dispatch(setLogin(true));
  }

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
    } else {
      alert('Not allowed to open yet, wait a few days');
    }
  }

  async function getChocolate() {
    const result = await axios('http://localhost:5001/chocolates');
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
          <Typography
            style={{
              padding: 16,
              color: 'white',
              border: '2px dashed white',
              fontFamily: 'impact',
              textAlign: 'center',
            }}
            variant="h2"
          >
            {t('My Chocolate Calender 2021')}
          </Typography>

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
          <section>Test Result</section>
        </div>
      </div>
    </div>
  );
};

export default App;
