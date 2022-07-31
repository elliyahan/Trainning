import './App.css';
import FunList from './FunList';
import Test from './Test/Test';
import { useState } from 'react';
import LangBox from './LangBox';
import langs from './db/langs.json';

function App() {

  const [num, setNum] = useState(0);

  const plus = () => {
    setNum(number => number + 1);
  }

  const minus = () => {
    setNum(number => number - 1);
  }

  const [name, setName] = useState('미니');

  const changeName = () => {
    setName((name ==='미니') ? '미키' : '미니');
  }

  const [isOn, setIsOn] = useState(false);

  const showFun = () => {
    setIsOn(isOn => !isOn);
  }

  const dbLang = langs;

  const [onOff, setOnOff] = useState(false);

  const showList = () => {
    setOnOff(onOff => !onOff);
  }

  /* let number = 0;
  const plus = () => {
    number = number + 1;
    console.log(number);
    document.querySelector('h2').innerText=number;
  }

  const minus = () => {
    number = number - 1;
    console.log(number);
    document.querySelector('h2').innerText=number;
  } */

  return (
    <div className="App">
      <h1 className='fun-logo' onClick={showFun}> FUN </h1>
      <div className={isOn ? `fun-box on` : `fun-box off`}>
        <FunList />
      </div>
      
      <Test />

      <div className="count-box">
        <h2>{num}</h2>
        <button onClick={plus}>1씩 증가</button>
        <button onClick={minus}>1씩 감소</button>
      </div>

      <div>
        <h2>{name}</h2>
        <button onClick={changeName}>변경</button>
      </div>

      <div className='lang-box'>
        <button className='lang-ko' onClick={showList}>KR</button>
        <ul className={onOff ? `lang-list on` : `lang-list off`}>
          {
            dbLang.map((lang) => {
              return (
              <LangBox lang={lang.lang} key={lang.id} />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
