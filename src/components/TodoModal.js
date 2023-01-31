import { useState, useContext } from "react";
import { Modal, Input, Typography } from "antd";
import { AuthContext } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const TodoModal = ({ open, setOpen }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const [todoName, setTodoName] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const handleOnchangeDesc = (e) => {
    setTodoDesc(e.target.value);
  };

  const handleOnchangeName = (e) => {
    setTodoName(e.target.value);
  };

  const handleOk = async () => {
    // console.log("The modal will be closed after two seconds");
    setConfirmLoading(true);
    const docRef = await addDoc(collection(db, "todo"), {
      uid: user.uid,
      todo_name: todoName,
      todo_desc: todoDesc,
      created_At: serverTimestamp()
    });
    setConfirmLoading(false);
    setOpen(false);
    console.log("docRef", docRef);
    setTodoName("");
    setTodoDesc("");
  };
  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setOpen(false);
  };
  console.log(user.uid);
  return (
    <>
      <Modal
        title="New Todo"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Typography.Title level={5}>Name</Typography.Title>
        <Input
          placeholder="Enter Todo Name"
          value={todoName}
          onChange={handleOnchangeName}
        />
        <Typography.Title level={5}>Description</Typography.Title>
        <Input.TextArea
          placeholder="Enter Description"
          rows={3}
          value={todoDesc}
          onChange={handleOnchangeDesc}
        />
      </Modal>
    </>
  );
};

export default TodoModal;
