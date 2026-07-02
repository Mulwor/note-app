export type UserId = string;

export type User = {
  id: UserId;
  name: string;
  description: string;
};

export type UsersState = {
  entities: Record<UserId, User>;
  ids: UserId[];
  selectedUserId: UserId | undefined;
};

export type UserSelectedAction = {
  type: "userSelected";
  payload: {
    userId: UserId;
  };
};

export type UserRemoveSelectedAction = {
  type: "userRemoveSelected";
};

export type UsersStoredAction = {
  type: "usersStored";
  payload: {
    users: User[];
  };
};

export type Action = UserSelectedAction | UserRemoveSelectedAction | UsersStoredAction;