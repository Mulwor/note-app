import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  return (
    <>
      <h1>Login page</h1>
      <div>Мы пришли от страницы: {fromPage}</div>
    </>
  );
};
