import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LoginContext } from "./UserContext";
import React from "react";
import Login from "./Login";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  const { user, login, logout } = React.useContext(LoginContext);
  function userLogout() {
    logout();
  }

  if (!user.auth) {
    return (
      <div className="App">
        <Login />
      </div>
    );
  } else {
    return (
      <>
        <div
          className="Login_Header"
          style={{
            background: "#2874f0",
            paddingInline: 30,
            paddingBlock: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              fontSize: "2.3em",
              color: "white",
              marginBlock: "0.5em",
            }}
          >
            Ekart 🛍️
          </h4>

          <h4
            style={{
              fontSize: "2em",
              color: "white",
              marginRight: 50,
              marginBlock: "0.5em",
            }}
          >
            Hello {user.name}
          </h4>

          <p
            style={{
              color: "white",
              fontWeight: 700,
            }}
            onClick={userLogout}
          >
            LOGOUT
          </p>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="product/:productId" element={<ProductDetail/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
