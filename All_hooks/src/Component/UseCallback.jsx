import { useCallback, useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [countone, setcountone] = useState(0);
  const [countTwo, setcountTwo] = useState(0);

  const memorizecallbackOne = useCallback(
    () => setcountone((prev) => prev + 1),
    [countone]
  );

  const memorizecallbackTwo = useCallback(
    () => setcountTwo((prev) => prev + 1),
    [countTwo]
  );

  return (
    <div>
      <Child text={"Button one"} onClick={memorizecallbackOne}></Child>
      <Child text={"Button Two"} onClick={memorizecallbackTwo}></Child>
      <br />
      {countone}

      {countTwo}
    </div>
  );
};

export default UseCallback;
