import React, { memo, useState, useCallback } from 'react';

const MJKButton = memo((props) => {
    console.log("MJKButton重新渲染: " + props.title);

    return (
        <button onClick={props.increment}>{props.title} +1</button>
    ) 
});


function App() {
    console.log("App重新渲染");

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    const increment1 = () => {
        console.log("执行increment1函数");
        setCount(count + 1);
    }
    
      const increment2 = useCallback(() => {
        console.log("执行increment2函数");
        setCount(count + 1);
      }, [count]);
    
      return (
        <div>
          <h2>HookCallback: {count}</h2>
          <MJKButton title="btn1" increment={increment1}/>
          <MJKButton title="btn2" increment={increment2}/>
    
          <button onClick={e => setShow(!show)}>show切换</button>
        </div>
      )
}

export default App;