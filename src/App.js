import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log("created"); //Hello 컴포넌트가 등장할때마다 새로 render
        return () => console.log("destroyed"); //Hello컴포넌트가 사라질때 실행되는 함수.
        //리턴에 함수를 넣어줌
    }, []);
    return <h1>Hello</h1>;
}
function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
