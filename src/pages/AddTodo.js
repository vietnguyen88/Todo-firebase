import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
const Wrapper = styled.div``;

const AddTodo = () => {
  const { user } = useContext(AuthContext);
  const [uid, setUid] = useState(user.uid);
  const [jobname, setJobName] = useState("");

  const handleOnchangeName = (e) => {
    setJobName(e.target.value);
  };

  const handleSave = async () => {
    const docRef = await addDoc(collection(db, "todo"), {
      uid: uid,
      job: jobname,
      createdAt: serverTimestamp()
    });
    setJobName("");
  };

  return (
    <Wrapper>
      <div>
        <label htmlFor="user">User ID: </label>
        <input
          type="text"
          id="user"
          value={user.uid}
          style={{ width: "300px" }}
          disabled
        />
      </div>
      <div>
        <label htmlFor="todoName">Job Name: </label>
        <input type="text" id="todoName" onChange={handleOnchangeName} />
      </div>
      <div>
        <label htmlFor="des">Description: </label>
        <textarea id="des" />
      </div>
      <div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </Wrapper>
  );
};

export default AddTodo;
