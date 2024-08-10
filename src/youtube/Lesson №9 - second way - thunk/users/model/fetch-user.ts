import { AppThunk } from "../../store";
import { UserId, usersSlice } from "../users.slice";

export const fetchUser = 
  (userId: UserId): AppThunk => 
  (dispatch, getState, { api }) => {
    const isPending = usersSlice.selectors.selectIsFetchUserPending(getState());
    
    if (isPending) {
      return;
    }

    dispatch(usersSlice.actions.fetchUsersPending());
    
    api
      .getUser(userId)
      .then((user) => {
        dispatch(usersSlice.actions.fetchUsersSuccess({ user }));
      })
      .catch(() => {
        dispatch(usersSlice.actions.fetchUsersFailed());
      })
}