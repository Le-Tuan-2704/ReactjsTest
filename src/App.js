import './App.css';
import "antd/dist/reset.css";
import QuestionList from './component/question/QuestionList';

// import KaTeXForm from './component/KaTeXForm';
// import MathEditor from './component/MathEditor';
// import MathJaxForm from './component/MathJaxForm';

// import QuestionEditor from './component/QuestionEditor';

function App() {
  return (
    <div className="App">
      {/* <MathEditor />
      <hr/>
      <KaTeXForm /> */}

    {/* <QuestionEditor /> */}
    <h2 className="text-center mt-4">Danh sách câu hỏi</h2>
    <QuestionList />
    </div>
  );
}

export default App;
