import React, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText((prevState) => !prevState);
  };
  return (
    <div>
      <h2>hello world</h2>
      {!changeText && <p>it good</p>}
      {changeText && <p>it is nice to see you</p>}
      <button onClick={changeTextHandler}>change text</button>
    </div>
  );
};

export default Greeting;
