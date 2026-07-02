import { useNavigate, useParams } from "react-router-dom";
import { usersSlice } from "./users.slice";
import { UserId } from "./types";
import { deleteUser } from "./model/delete-user";
import { useAppDispatch, useAppSelector } from "../shared/redux";

export function UserInfo() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id = "" } = useParams<{id: UserId}>();
  
  const isPending = useAppSelector(usersSlice.selectors.selectIsFetchUserPending);
  const isPendingDelete = useAppSelector(usersSlice.selectors.selectIsDeleteUserPending);
  const user = useAppSelector((state) => usersSlice.selectors.selectUserId(state, id));

  const handleBackButtonClick = () => { 
    navigate("..", { relative: "path" })
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteUser(id)).then(() => navigate("..", { relative: "path" }))
  }

  if (isPending || !user) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleBackButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md"
      >
        Back
      </button>
      <h2 className="text-3xl">{user.name}</h2>
      <p className="text-xl">{user.description}</p>
      <button 
        disabled={isPendingDelete}
        onClick={handleDeleteButtonClick}
      >Remove</button>
    </div>
  );
}