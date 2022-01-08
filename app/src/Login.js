import React from "react";
import { LoginContext } from "./UserContext";

function Login() {
    let {user,login,logout} = React.useContext(LoginContext);

    const [name,setName] = React.useState('')

  function userLogin()
  {
login(name);
console.log(user,"you are welcome" )
  }

    
  return (
    <div
      className="Login"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div
        className="Login_Header"
        style={{ background: "#2874f0", paddingBlock: "1em" }}
      >
        <h3
          style={{
            fontSize: "2em",
            color: "white",
          }}
        >
          Ekart Login 🛍️
        </h3>
        <p style={{ color: "white" }}>
          <i>Get access to your Orders, Wishlist and Recommendations</i>
        </p>
      </div>

      <div className="Login_Form" style={{ alignSelf: "center" }}>
        <div
          className="container"
          style={{
            width: "370px",
            height: "270px",
            borderRadius: "20px",
            padding: "30px",
            boxSizing: "border-box",
            background: "#ecf0f3",
            boxShadow: "14px 14px 20px #cbced1",
            marginBlock: "50px",
          }}
        >
          <div
            className="inputs"
            style={{
              textAlign: "left",
            }}
          >
            <label
              style={{
                display: "block",
                width: "100%",
                padding: 0,
                marginBottom: "4px",
                border: "none",
                outline: "none",
                boxSizing: "border-box",
              }}
            >
              Name
            </label>

            <input
              onChange={e => setName(e.target.value)  }
              placeholder="Enter your name"
              style={{
                display: "block",
                width: "100%",
                marginTop:10,
                padding: 10,
                borderRadius: 4,
                border: "none",
                outline: "none",
                background: "white",
                boxSizing: "border-box",
              }}
            />
            <label
              style={{
                display: "block",
                width: "100%",
                padding: 0,
                marginTop: 10,
                fontSize: 14,
                border: "none",
                outline: "none",
                boxSizing: "border-box",
              }}
            >
              PASSWORD
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              style={{
                display: "block",
                  marginTop:10,
                width: "100%",
                padding: 10,
                marginBottom: 10,
                borderRadius: 4,
                border: "none",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button type="submit"
            onClick={userLogin}
             style={{
                marginTop: '20px',
    background: '#1DA1F2',
    height: '40px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '900',
    boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white',
    marginLeft:100
    
            }}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
