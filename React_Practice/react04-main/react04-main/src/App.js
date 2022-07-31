import './App.css';
import FunList from './FunList';
import Test from './Test/Test';
import { useState } from 'react';

function App() {
  const [num,setNum] = useState(0);
  const [name,setName] = useState('미니');
  const [isOn , setIsOn] = useState(false);
  const plus = () => {
    setNum(number => number+1)
  }

  const minus = () =>{
    setNum(number => number-1)
  }
  
  const changeName = () => { 
      setName(name === '미니' ? '미키' : '미니')
  }

  const showFun = () => {
    setIsOn( isOn => !isOn ) 
  }
  return (
    <div className="App">
        <h1 className='fun-logo' onClick={showFun}> FUN </h1>
        <div className={isOn ? `fun-box on` : `fun-box off`}>
           <FunList />
        </div>
        <Test />
        <div className='count-box'>
            <h2>{num}</h2>
            <button onClick={plus}>1씩 증가</button>
            <button onClick={minus}>1씩 감소</button>
        </div>

        <div>
            <h2>{name}</h2>
            <button onClick={changeName}>불러봐</button>
        </div>
    </div>
  );
}

export default App;
