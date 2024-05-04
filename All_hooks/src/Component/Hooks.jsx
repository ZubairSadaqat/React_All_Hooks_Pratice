import { useEffect, useState } from "react";

const Hooks = () => {
  const [state, setState] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emoji] = useState(["😀", "😁", "😂", "😃", "😍", "🤗", "😏"]);

  useEffect(() => {
    // Calculate the next index, wrapping around to 0 when it reaches the end of the array
    const nextIndex = (currentIndex + 1) % emoji.length;
    // Update the current index state
    setCurrentIndex(nextIndex);
    // Optionally, update the emoji state to reflect the change, if needed
    // setEmoji(emoji[nextIndex]);
  }, [state]);

  return (
    <div>
      <h1> Count: {state}</h1>

      <h2> On Ever render we get new emoji ${emoji[currentIndex]}</h2>
      <button
        onClick={() => {
          setState((prevCount) => prevCount + 1);
        }}
      >
        {" "}
        Click me{" "}
      </button>
    </div>
  );
};

export default Hooks;
