import React from "react";
import { LoginContext } from "./UserContext";

function Login() {
    let {user,login,logout} = React.useContext(LoginContext);

    const [name,setName] = React.useState()
    const [number,setNumber] = React.useState()

  function userLogin()
  {
    if(name && number)
    {
      login(name);
    }
    else if(!name) {
      alert("Enter your name")
  }
  else
  {
       alert("Enter your number")
  }
 


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
              Phone Number
            </label>
            <input
              type="tel"
              onChange={e => setNumber(e.target.value)  }  
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
    background: '#fb641b',
    color:'white',
    height: '40px',
    marginLeft:80,
    paddingInline:25,
    cursor: 'pointer',
    fontWeight: '900',
    width:'50%'

    
    
            }}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
