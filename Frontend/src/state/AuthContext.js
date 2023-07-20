import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
//最初のユーザー状態を定義
const initialState = {
  // user: null,
  user: {
    _id: "641ad7e008ae49dc8e42054d",
    username: "inagawa",
    email: "inagawa@test.com",
    password: "abcdef",
    profilePicture: "",
    coverPicture: "",
    followers: "",
    followings: "",
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

//状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
