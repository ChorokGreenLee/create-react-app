import React, {useState} from 'react';
import OddEvenResult from "./OddEvenResult";

const Counter = ({initialValue}) =>{
    // console.log(props);
    // const [count, setCount] = useState(props.initialValue); 매개변수를 props로 넘기는 방법
   const [count, setCount] = useState(initialValue); // 스프레드 연산자 중 디폴트값만 비구조화 할당받음

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count = {count}></OddEvenResult>
            {/*OER를 Counter컴포넌트의 자식요소로 배치 -> props로 count를 전달*/}
        </div>
    );
};

Counter.defaultProps = {
    initialValue: 0
};

export default Counter;
