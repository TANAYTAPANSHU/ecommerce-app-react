import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../db/store.json";
import { LoginContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  let product = productsData.find((product) => product.id == productId);
  const { user, login, logout, products, dispatch } =
    React.useContext(LoginContext);

  function addProduct() {
    const action = {
      type: "ADD_PRODUCT",
      payload: product,
    };

    dispatch(action);
    navigate(`/cart/true`);
  }
  console.log(product, "This is a product" );

  return (
    <div
      className="ProductDetail"
      style={{
        paddingTop: "2%",
        display: "flex",
        marginBottom: "10px",
        background: "#fff",
        marginLeft: "10px",
        paddingBottom: "40px",
        marginRight: "10px",
        justifyContent: "space-between",
      }}
    >
      <div
        className="ProductDetail_left"
        style={{
          display: "flex",
          padding: "25px",
          flex: 2,
          flexDirection: "column",
        }}
      >
        <div
          className="product_image"
          style={{
            paddingTop: "10px",
            paddingBottom: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            width="170"
            height="350"
          />
        </div>{" "}
        <div
          className="main_buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <button
            className="add_to_cart"
            onClick={addProduct}
            style={{
              width: "49%",
              height: "4em",
              background: "#f49f3f",
              borderWidth: "0px",
              color: "white",
              fontWeight: "900",
            }}
          >
            Add to Cart{" "}
          </button>{" "}
          <button
            className="buy_now"
            style={{
              height: "4em",
              width: "49%",
              background: "#ef6336",
              borderWidth: "0px",
              color: "white",
              fontWeight: "900",
            }}
          >
            Buy Now{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div
        className="main_product_details"
        style={{
          flex: 4,
          padding: "10px",
          paddingLeft: "3em",
        }}
      >
        <div className="product_name">
          <h3> {product.title} </h3> <p> {product.category} </p>{" "}
        </div>{" "}
        <div className="price_detail">
          <h2> ₹{product.price} </h2>{" "}
        </div>{" "}
        <div class="product_description">
          <h4> Description </h4> <p> {product.description} </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ProductDetail;
