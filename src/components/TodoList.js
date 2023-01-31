// import { Link } from "react-router-dom";
import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase/config";
import { TodoContext } from "../context/TodoContext";

import { Table, Space, Popconfirm, Button } from "antd";

const columns = [
  {
    title: "Todo Name",
    dataIndex: "todo_name",
    key: "todo_name"
  },
  {
    title: "Todo Description",
    dataIndex: "todo_desc",
    key: "todo_desc"
  },
  {
    title: "Created At",
    dataIndex: "created_At",
    key: "created_At",
    render: (time) =>
      time ? time.toDate().toLocaleString("en-AU") : "progressing",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.created_At - b.created_At
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (text, record) => (
      <Space>
        <Popconfirm
          title="are you sure to edit?"
          //TODO: code edit function
          onConfirm={() => console.log(text)}
        >
          <Button type="primary">Edit</Button>
        </Popconfirm>
        <Popconfirm
          title="are you sure to delete?"
          //TODO: code delete function
          onConfirm={() => console.log(record)}
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      </Space>
    )
  }
];

const TodoList = () => {
  const { todoList } = useContext(TodoContext);
  // console.log(todoList, "todolist");
  return (
    <Space>
      <Table dataSource={todoList} columns={columns} rowKey="id" />
    </Space>
  );
};

export default TodoList;
