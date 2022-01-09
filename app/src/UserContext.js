import React from "react";

export const LoginContext = React.createContext();

//custom hooks to update the title

const useDocumentUser = (name) => {
  React.useEffect(() => {
    document.title = name ? `Welcome ${name}` : "Login to Ekart";
  }, [name]);
};

export const LoginProvider = ({ children }) => {
  const [user, setUser] = React.useState({ name: "", auth: false });
  useDocumentUser(user.name);

  const login = (name) => {
    setUser(() => ({ name: name, auth: true }));
  };

  const logout = () => {
    setUser(() => ({ name: "", auth: false }));
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
