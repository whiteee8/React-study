import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    console.log("i run all the time"); //state가 바뀔때마다 항상 실행
    useEffect(() => {
        console.log("i run only once"); //state가 바뀌어도 한번만 실행
    }, []);
    useEffect(() => {
        /*if (keyword !== "" && keyword.length > 5)
            console.log("search for", keyword);*/
        //두번째 인자인 keyword state가 바뀔때만 실행
        console.log("i run when 'keyword' changes");
    }, [keyword]);
    //console.log("search for", keyword); //counter가 바뀔때도 계속 실행되는 문제, keyword의 변화에만 실행돼야함
    useEffect(() => {
        console.log("i run when 'counter' changes");
    }, [counter]);
    useEffect(() => {
        console.log("i run when 'keyword' & 'counter' changes");
    }, [keyword, counter]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
