import React from "react";
import { Card, Form, Input, Checkbox, Button, Space, Typography, Divider } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const QuestionForm = ({ question, onChange, onRemove }) => {
  return (
    <Card
      title={<Title level={4} style={{ margin: 0 }}>Câu hỏi</Title>}
      extra={<Button danger icon={<DeleteOutlined />} onClick={onRemove}>Xoá</Button>}
      style={{ marginBottom: 16, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Form layout="vertical">
        <Form.Item label="Đề bài">
          <Input value={question.title} onChange={(e) => onChange("title", e.target.value)} />
        </Form.Item>
        <Space>
          <Form.Item label="Điểm">
            <Input type="number" value={question.score} onChange={(e) => onChange("score", e.target.value)} />
          </Form.Item>
          <Form.Item label="Dạng bài">
            <Input value={question.type} onChange={(e) => onChange("type", e.target.value)} />
          </Form.Item>
        </Space>

        <Divider />

        <Title level={5}>Options</Title>
        {question.options.map((option, index) => (
          <Space key={index} style={{ display: "flex", marginBottom: 8 }} align="baseline">
            <Input
              placeholder="Nội dung"
              value={option.content}
              onChange={(e) => onChange("options", e.target.value, index, "content")}
            />
            <Input
              placeholder="Giải thích"
              value={option.explanation}
              onChange={(e) => onChange("options", e.target.value, index, "explanation")}
            />
            <Checkbox
              checked={option.isCorrect}
              onChange={(e) => onChange("options", e.target.checked, index, "isCorrect")}
            >
              Đúng
            </Checkbox>
          </Space>
        ))}
        <Button type="dashed" icon={<PlusOutlined />} onClick={() => onChange("addOption")}>
          Thêm Option
        </Button>
      </Form>
    </Card>
  );
};

export default QuestionForm;
