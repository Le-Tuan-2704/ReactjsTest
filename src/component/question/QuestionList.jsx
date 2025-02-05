import React, { useState } from "react";
import { Button, Typography, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import QuestionForm from "./QuestionForm";

const { Title } = Typography;

const QuestionList = () => {
  const [questions, setQuestions] = useState([
    { title: "", score: "", type: "", options: [{ content: "", explanation: "", isCorrect: false }] }
  ]);

  const handleChange = (index, field, value, optionIndex, optionField) => {
    setQuestions((prev) => {
      const newQuestions = [...prev];
      if (field === "options") {
        newQuestions[index].options[optionIndex][optionField] = value;
      } else if (field === "addOption") {
        newQuestions[index].options.push({ content: "", explanation: "", isCorrect: false });
      } else {
        newQuestions[index][field] = value;
      }
      return [...newQuestions];
    });
  };

  const addQuestion = () => {
    setQuestions([...questions, { title: "", score: "", type: "", options: [{ content: "", explanation: "", isCorrect: false }] }]);
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        Danh sách câu hỏi
      </Title>
      <Space direction="vertical" style={{ width: "100%" }}>
        {questions.map((question, index) => (
          <QuestionForm
            key={index}
            question={question}
            onChange={(field, value, optionIndex, optionField) => handleChange(index, field, value, optionIndex, optionField)}
            onRemove={() => removeQuestion(index)}
          />
        ))}
      </Space>
      <Button type="primary" icon={<PlusOutlined />} onClick={addQuestion} block style={{ marginTop: 16 }}>
        Thêm câu hỏi
      </Button>

      <pre className="mt-4 bg-gray-200 p-4">{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
};

export default QuestionList;
