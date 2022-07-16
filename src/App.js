import { useState } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("call an api"); //state가 바뀔때마다 이 콘솔이 계속 찍히는것처럼 이 부분에 어떤 코드가 들어오든 항상 실행됨
    //처음 render할 떄 한번만 실행하고 그뒤론 다시 실행하지 않는 방법 필요
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
