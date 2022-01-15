/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import productsData from "../../db/store.json";
import { LoginContext } from '../../UserContext';
function CartComponent(props) {
      const {dispatch } =  React.useContext(LoginContext);
     function addProduct() {
    const action = {
      type: "ADD_PRODUCT",
      payload: props,
    };
    dispatch(action);
  }
    function removeProduct() {
    const action = {
      type: "REMOVE_PRODUCT",
      payload: props,
    };
    dispatch(action);
  }
   
    return (
 
        <div className='Cart_Component' style={{boxShadow: '10px 5px 50px rgba(0, 0, 0, 0.2)',display:'flex',justifyContent:'space-between',padding:20,alignItems:'center','marginBlock':10  }}>
           <div className='Cart_Component Image'>
               <img src={props.image} style={{
                height:100,
                width:100,
                objectFit:'contain'
               }} ></img> 
           </div>
  


              <div className='Cart_Component Name'>
              <h3>{props.name}</h3>
           </div>

            <div className='Cart_Component Counter' style={{display:'flex',alignItems:'center' }}>
           <button  onClick={addProduct} >
          ➕
        </button>
        <p style={{marginInline:10,fontWeight:'600',fontSize:20 }}>{props.count}</p>
        <button onClick={removeProduct} disabled={props.count>1 ? false : true} >
          ➖
        </button>
        
        </div>
        </div>
   
    )
}

export default CartComponent

