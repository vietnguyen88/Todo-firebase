import { Input, Space, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TodoModal from "./TodoModal";
import { useState } from "react";

const Search = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
    console.log(open);
  };
  return (
    <Space>
      <Input.Search placeholder="search" />
      <Button
        shape="round"
        type="primary"
        icon={<PlusOutlined />}
        onClick={showModal}
      >
        Add Todo
      </Button>
      <TodoModal open={open} showModal={showModal} setOpen={setOpen} />
    </Space>
  );
};

export default Search;
