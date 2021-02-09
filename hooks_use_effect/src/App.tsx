import React, { useState, useEffect } from 'react'

export default function App() {

    const [count, setCount] = useState(0)
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        console.log("修改DOM", count);
        document.title = "123"
    });

    useEffect(() => {
        console.log("订阅一些事件");

        return () => {
            console.log("取消订阅事件")
        }
    }, [count])

    useEffect(() => {
        console.log("xxxx", count);
    }, []);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={(e) => setCount(count + 1)}>+1</button>

            <h2>{isLogin ? "mjk" : "未登录"}</h2>
            <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
        </div>
    )
}
