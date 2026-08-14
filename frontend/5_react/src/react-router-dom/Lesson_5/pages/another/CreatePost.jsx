import { useNavigate } from "react-router-dom";
import { useAuth } from "../../autorization/hook/useAuth";

const Createpost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create a post</h1>
      {/*{ replace: true } - Без возможности вернутся назад */} 
      <button onClick={() => signout(() => navigate("/", { replace: true }))}> Разлогинится</button>
    </div>
  );
};

export { Createpost };
