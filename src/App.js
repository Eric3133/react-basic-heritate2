import logo from './logo.svg';
import './App.css';
import { createContext, useContext } from 'react';

// app -> A -> B

//1 createContext 创建上下文对象
const MsgContext = createContext()

//2 在顶成  Provider 提供数据
//3 在底层 useContext 使用数据


function A () {
  return(
    <div>
      this is A conponent
      <B />
    </div>
  )
}

function B () {
  const msg = useContext(MsgContext)
  return(
    <div>
      this is B conponent, {msg}
    </div>
  )

}

function App() {
  const msg = "this is app msg"
  return (
    <div className="App">
      <MsgContext.Provider value={msg}>
        this is app
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
