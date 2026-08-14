import { Counters } from "./counters/counters";
import { UsersList } from "./users/users-list";

function App() {
  return (
    <div className="container p-5 flex flex-col gap-5">
      <Counters />
      <UsersList />
      <UsersList />
    </div>
  );
}

export default App;