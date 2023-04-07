import "./App.css";
import WithoutRedux from "./Michael/Without Redux/Without";
import WithRedux from "./Michael/With Redux/With";
import Thunk from "./Michael/Thunk/With";

function App() {
  return (
    <>
      {/* <div align="center">Без редакса</div>
      <WithoutRedux />
      <div align="center">С использованием редакса</div>
      <WithRedux /> */}
      <div align="center">Thunk</div>
      <Thunk />
    </>
  );
}

export default App;
