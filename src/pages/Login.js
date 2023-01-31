import { auth, db } from "../firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Space, Button, Typography, Row, Col } from "antd";

const Login = () => {
  // const { user, setUser } = useContext(AuthContext);
  const handleLoginWithGG = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        const additionalInfo = getAdditionalUserInfo(result);
        if (additionalInfo.isNewUser) {
          addDoc(collection(db, "users"), {
            id: result.user.uid,
            email: result.user.email,
            phtoURL: result.user.photoURL,
            displayName: result.user.displayName
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLoginWithFB = () => {
    console.log("not done yet");
  };

  return (
    <Row style={{ height: "100%" }}>
      <Col span={12}>
        <div style={{ position: "relative", height: "100%" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0
            }}
            src="https://images.unsplash.com/photo-1674507218650-edc7eae7848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
      </Col>
      <Col
        span={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Space direction="vertical" align="center">
          <Typography.Title type="success">To-do App</Typography.Title>
          <Typography.Title level={5}>Welcome to Todo App</Typography.Title>
        </Space>
        <Space direction="vertical" align="center">
          <Button onClick={handleLoginWithGG}>Sign In with Google</Button>
          <Button onClick={handleLoginWithFB}>Sign In with Facebook</Button>
        </Space>
      </Col>
    </Row>
  );
};

export default Login;
