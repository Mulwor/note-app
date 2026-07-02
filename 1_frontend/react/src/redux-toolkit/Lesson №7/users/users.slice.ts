import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserId, UsersState } from "./types";

export const initialUsersList: User[] = Array.from(
  { length: 3000 },
  (_, index) => ({
    id: `user${index + 11}`,
    name: `User ${index + 11}`,
    description: `Description for User ${index + 11}`,
  })
);

const initialUsersState: UsersState = {
  entities: {},
  ids: [],
  selectedUserId: undefined,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  selectors: {
    selectSelectedUserId: (state) => state.selectedUserId,
    selectSortedUsers: createSelector(
      (state: UsersState) => state.ids,
      (state: UsersState) => state.entities,
      (_: UsersState, sort: "asc" | "desc") => sort,
      (ids, entities, sort) =>
        ids
          .map((id) => entities[id])
          .sort((a, b) => {
            if (sort === "asc") {
              return a.name.localeCompare(b.name);
            } else {
              return b.name.localeCompare(a.name);
            }
          })
    ),
  },
  reducers: {
    selected: (state, action) => {
      state.selectedUserId = action.payload.userId;
    },
    remove: (state) => {
      state.selectedUserId = undefined
    },
    stored: (state, action: PayloadAction<{users: User[]}>) => {
      const { users } = action.payload;
      state.entities = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {} as Record<UserId, User>);
      state.ids = users.map((user) => user.id);
    }
  }
})