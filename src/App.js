import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    //처음 render할 떄 한번만 실행하고 그뒤론 다시 실행하지 않는 방법 필요 -> useEffect
    console.log("i run all the time"); //state가 바뀔때마다 항상 실행
    useEffect(() => {
        console.log("call the api ..."); //state가 바뀌어도 한번만 실행
    }, []);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
