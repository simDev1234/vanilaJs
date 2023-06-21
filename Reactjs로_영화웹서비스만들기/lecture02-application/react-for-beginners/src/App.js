import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []); // 아무것도 적용하지 않으면 단 한 번만 적용
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); // keyword가 변할 때마다 효과 적용

  return (
    <div>
      <input
        type="text"
        placeholder="Search Here"
        onChange={onChange}
        value={keyword}
      />
      <h2>{counter}</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
