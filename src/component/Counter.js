import React, { useState, useEffect} from "react";

// Using react hook useState/useeffect for counts to display and update when button is clicked
function Counter() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [secondCount]);

  return (
    <div className="counts">
      <h1>This is counter</h1>
      {count}-{secondCount}
      <br />
      <button onClick={() => setSecondCount(secondCount + 1)}>      
          Increment Counts
      </button>
    </div>
  );
}
export default Counter;