import { useEffect, useRef } from "react";

const UseRef = () => {
  const countValue = useRef(0);
  const divRefrence = useRef();
  const inputRef = useRef();

  useEffect(() => {
    let divref = divRefrence.current;
    setTimeout(() => {
      divref.style.display = "flex";
      console.log(divref);
      inputRef.current.focus();
    }, 1500);
  }, []);
  return (
    <div>
      <h2> Use Ref for gating reference </h2>
      <h2> ref value is {countValue.current}</h2>
      <div style={{ display: "none" }} ref={divRefrence}>
        {" "}
        I will show up after render using use ref
      </div>

      <div> let if you want to get focus on page load</div>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter something ........"
      />
    </div>
  );
};

export default UseRef;
