import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { usersSlice } from "./users.slice";
import { useEffect } from "react";
import { fetchUser } from "./model/fetch-user";
import { UserId } from "./types";

export function UserInfo() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id = "" } = useParams<{id: UserId}>();
  const isPending = useAppSelector(usersSlice.selectors.selectIsFetchUserPending);

  const user = useAppSelector((state)  =>
    usersSlice.selectors.selectUserId(state, id)
  );

  useEffect(() => {
    dispatch(fetchUser(id))
  }, [dispatch, id])

  const handleBackButtonClick = () => { 
    navigate("..", {
      relative: "path"
    })
  };

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
    </div>
  );
}