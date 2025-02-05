import "//unpkg.com/mathlive";
import { useState } from "react";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS

const QuestionEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <math-field 
        onInput={evt => setValue(evt.target.value)}
      >
        {value}
      </math-field>
      <p>Value: {value}</p>
      <div>
            <h2>Ví dụ với KaTeX trong React</h2>
            
            <p>
              Công thức toán học dạng inline: <InlineMath math={value} />
            </p>
      
            <p>
              Công thức toán học dạng block:
              <BlockMath math={value} />
            </p>
          </div>
    </div>
  );
};

export default QuestionEditor;
