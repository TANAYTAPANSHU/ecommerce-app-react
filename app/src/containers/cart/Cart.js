import React from 'react'
import CartComponent from './CartComponent'
import { useParams } from "react-router-dom";
import { LoginContext } from '../../UserContext';

function Cart() {
     const { express } = useParams();
     const { user, login, logout, products, dispatch } =
    React.useContext(LoginContext);
     console.log(products);
    return (
        <div className='Cart' style={{padding:20}}>
        {products.map((element,index)  =>{

            return(  <CartComponent key={index} id={element.id} name={element.title} count={element.count} image={element.image}    />)
           
        }  )}
           
            <p>{express}</p>
        </div>
    )
}

export default Cart
