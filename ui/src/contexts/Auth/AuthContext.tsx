import * as React from "react";

type AuthCtx = {
  user: UserType,
  setUser: (param?: any) => void
}
export type UserType = {
  isLoggedIn?: boolean
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  isAdmin?: boolean,
  blocked?: boolean,
  createdAt?: string,
  updatedAt?: string,
};

const defaultUser = {
  isLoggedIn: false,
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  isAdmin: false,
  blocked: false,
  createdAt: "",
  updatedAt: "",
}

export const AuthContext = React.createContext<AuthCtx>({
  user: defaultUser,
  setUser: () => { }
});

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = React.useState(defaultUser)
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
} 