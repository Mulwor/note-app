import React from "react";
import "./App.css";
import Cookies from "universal-cookie";
import { Auth } from "./PedroTech/components/Auth";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = React.useState(cookies.get("auth-token"));
  const [room, setRoom] = React.useState(null);

  const roomInputRef = React.useRef(null);

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <div>Chat</div>
      ) : (
        <div className="room">
          <label>Enter room: </label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>Enter to chat</button>
        </div>
      )}
    </div>
  );
}

export default App;
