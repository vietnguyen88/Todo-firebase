import "./styles.css";
// import styled from "styled-components";

import User from "./components/User";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
// import AddButton from "./components/AddButton";
// import TodoDetail from "./pages/TodoDetail";
import { AuthProvider } from "./context/AuthContext";
// import { useLocation } from "react-router-dom";
import { Space } from "antd";
import Layout, { Header, Footer, Content } from "antd/es/layout/layout";

const AppLayout = () => (
  <>
    <Space direction="vertical" style={{}}>
      <Search />
      <TodoList />
    </Space>
  </>
);

export default function App() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { user } = useContext(AuthContext);

  // const TodoDetail = styled.div`
  //   flex: 3;
  // `;
  console.log("render");
  // console.log(location);

  return (
    <AuthProvider>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header>
            <User />
          </Header>
          <Content style={{ textAlign: "center", padding: "50px" }}>
            {" "}
            <AppLayout />
          </Content>
          <Footer>a</Footer>
        </Layout>
      </Space>
    </AuthProvider>
  );
}
