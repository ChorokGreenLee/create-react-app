import logo from './logo.svg';
import './App.css';

import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {

  let name ="이초록";
  const style ={
    App: {
     // backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const counterProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    //initialValue:5
  };

  return (
    <Container>
      <div style={style.App}>
        <MyHeader/>
        <Counter {...counterProps}/>
        <h2 style={style.h2}>안녕 리액트 {name}</h2>
        <b style={style.bold_text} id="bold_text">react.js</b>
      </div>
    </Container>
  );
}

export default App;
