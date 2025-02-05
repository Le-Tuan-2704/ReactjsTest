import "//unpkg.com/mathlive";
import { useState } from "react";

const MathEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <math-field 
        onInput={evt => setValue(evt.target.value)}
      >
        {value}
      </math-field>
      <p>Value: {value}</p>
    </div>
  );
};

export default MathEditor;
