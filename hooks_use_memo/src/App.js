import React, { memo, useState, useMemo } from 'react';

function calcNumber(count) {
    console.log("calcNumber重新计算");
    let total = 0;
    for (let i = 1; i <= count; i++) {
        total += i;
    }
    return total;
}

const MJKInfo = memo((props) => {
    console.log("HYInfo重新渲染");
    return (
        <h2>名字: {props.info.name} 年龄: {props.info.age}</h2>
    )
});

export default function App() {
    const [count, setCount] = useState(10);
    const [show, setShow] = useState(true);

    const total = useMemo(() => {
        return calcNumber(count);
    }, [count]);

    const info = useMemo(() => {
        return { name: "why", age: 18 };
    }, []);

    return (
        <div>
            <h2>计算数字的和: {total}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>

            <hr/>

            <MJKInfo info={info} />

            <hr/>

            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}