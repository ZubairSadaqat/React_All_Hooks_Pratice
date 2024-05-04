import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutHook = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = " Hassan";
  }, []);

  useLayoutEffect(() => {
    // console.log("use Layout Effect ref value is " + inputRef.current);
    console.log(inputRef.current);
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} value={"zubair"} />
    </div>
  );
};

export default UseLayoutHook;
