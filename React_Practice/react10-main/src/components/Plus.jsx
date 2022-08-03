import React, { useCallback } from 'react';
import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  // 첫 번째 인자 : 함수, 두 번쩨 인자 : 디팬던시
  const plus = useCallback (
    () => {
      setValue(value + 1); 
    }, [value] // dependency
    )
  /* const plus = () => {
    setValue(value + 1);
  } */

  const resetPlus = useCallback(() => {
    setValue(0);
  },[])

    return (
        <div>
        <h1> 값 : {value} </h1>
        <button onClick={plus}>plus +</button>
        <button onClick={resetPlus}>Reset</button>
      </div>
    );
};

export default Counter;

/*
랜더링할 때마다 함수를 콜하면 전체 함수는 그 때마다 만들어짐 -> 메모리 낭비가 심합니다
useCallback은 똑같은 함수를 다시 생성하지 않고 dependency에 변화가 있을 때만 다시 불러줌
같은 함수를 한 번만 만들어주고 그것만 사용
Hook은 조건문 안에서는 사용할 수 없다.

veb Storage
Local Storage : key와 value의 쌍으로 데이터 저장하고 조회할 수 있는 저장소, 서버에 전달되지 않는다. 지우지 않는 이상 브라우저의 탭을 닫거나 다시 열어도 유지
Session Storage : key와 value의 쌍으로 데이터 저장하고 조회할 수 있는 저장소, 서버에 전달되지 않는다. 휘발성, 같은 탭에서만 데이터 유지

setItem Method - localStorage.setItem('name', 'Hong') 문자열 숫자 오브젝트 배열 다 가능함 키-value 구성
getItem Method - localStorage.getItem('name)

JSON.stringify 오브젝트, 객체, 배열 ...JSON문자열로 변환
JSON.parse 문자열을 다시 오브젝트 형태로 변환

localStorage.setItem('test', JSON.stringify({'test':12345}))
localStorage.getItem('test')
JSON.parse(localStorage.getItem('test'))

localStorage.removeItem('test') 아이템 삭제
localStorage.clear() 전체 삭제
*/