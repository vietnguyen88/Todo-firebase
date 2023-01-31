import { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
// import { AuthContext } from "../context/AuthContext";

const Wrapper = styled.div``;

const TodoDetail = () => {
  // const { user } = useContext(AuthContext);
  const { todoId } = useParams();
  return <Wrapper>Todo detail {todoId}</Wrapper>;
};

export default TodoDetail;
