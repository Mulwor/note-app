import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./hook/useAuth";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <>
      <h1>Login page</h1>
      <div>Мы пришли от страницы: {fromPage}</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type = "submit">Login</button>
      </form>
    </>
  );
};
