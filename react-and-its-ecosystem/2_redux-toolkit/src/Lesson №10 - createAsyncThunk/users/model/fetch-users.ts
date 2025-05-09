import { createAppAsyncThunk } from "../../shared/redux";
import { usersSlice } from "../users.slice";

export const fetchUsers = createAppAsyncThunk(
  "users/fetchUsers", 
  async (_: { refetch?: boolean } = {}, thunkAPI) => 
    thunkAPI.extra.api.getUsers(), {
      condition(params, {getState}) {
        const isIdle = usersSlice.selectors.selectIsFetchUsersPending(getState());

        if (!params?.refetch && !isIdle) {
          return false;
        }

        return true;
      }
    });