import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS

function KaTeXForm() {
  return (
    <div>
      <h2>Ví dụ với KaTeX trong React</h2>
      
      <p>
        Công thức toán học dạng inline: <InlineMath math="E = mc^2" />
      </p>

      <p>
        Công thức toán học dạng block:
        <BlockMath math="\int_0^\infty e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}" />
      </p>
    </div>
  );
}

export default KaTeXForm;
