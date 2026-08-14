import { AppThunk } from "../../app/store";
import { UserId } from "../types";
import { usersSlice } from "../users.slice";
import { fetchUsers } from "./fetch-users";

export const deleteUser = 
  (userId: UserId): AppThunk<Promise<void>> => 
  async (dispatch, _, { api, router }) => {
    dispatch(usersSlice.actions.deleteUserPending());

    try {
      // ? Удаляем пользователя
      await api.deleteUser(userId);
      await router.navigate("/users");
      await dispatch(fetchUsers({refetch: true}))

      // ? После успешного удаления делаем deleteUserSuccess
      dispatch(usersSlice.actions.deleteUserSuccess({ userId }))
    } catch (e) {
      dispatch(usersSlice.actions.deleteUserFailed())
    }
}