import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from './UserContext';
import React from 'react';
import Login from './Login';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


function App() {
  const {user,login,logout} = React.useContext(LoginContext);
    function userLogout()
  {
 logout();
  }

   



  if(!user.auth)
  {
 return (
    <div className="App">
   <Login/>
    </div>
  );
  }
  else
  {
     return (
       <>
       <div
        className="Login_Header"
        style={{ background: "#2874f0",paddingInline:10,paddingBlock:2,display:'flex',alignItems:'center',justifyContent:'space-between' }}
      >
        <h4
          style={{
            fontSize: "2.3em",
            color: "white",
            marginBlock: '0.5em'
          }}
        >
          Ekart 🛍️
        </h4>
          <button type="submit"
            onClick={userLogout}
             style={{
                marginTop: '20px',
    background: '#1DA1F2',
    height: '40px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '900',
    boxShadow: '6px 6px 6px #cbced1, -6px -6px 6px white',
    marginLeft:100
    
            }}>LOGOUT</button>
      </div>
      
     
                 <ProductListing />
                
          

  
   </>
  );
  }
 
}

export default App;
