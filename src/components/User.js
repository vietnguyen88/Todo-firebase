import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Avatar, Button, Space, Typography } from "antd";

const User = () => {
  const { user } = useContext(AuthContext);

  return (
    <Space direction="horizontal" align="end">
      {/* <Img src={user && user.photoURL} alt="" /> */}
      <Avatar src={user && user.photoURL} />
      <Typography.Text type="success" level={5}>
        {user && user.displayName}
      </Typography.Text>
      <Button size="small" onClick={() => auth.signOut()}>
        Sign Out
      </Button>
    </Space>
  );
};

export default User;
