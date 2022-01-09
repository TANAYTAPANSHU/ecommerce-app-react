import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../db/store.json";
function ProductDetail() {
  const { productId } = useParams();
  let product = productsData.find((product) => product.id == productId);
  console.log(product);
  return (
    <div
      class="ProductDetail"
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
        class="ProductDetail_left"
        style={{
          display: "flex",
          padding: "25px",
          flex: 2,
          flexDirection: "column",
        }}
      >
        <div
          class="product_image"
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
        </div>

        <div
          class="main_buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <button
            class="add_to_cart"
            style={{
              width: "49%",
              height: "4em",
              background: "#f49f3f",
              borderWidth: "0px",
              color: "white",
              fontWeight: "900",
            }}
          >
            Add to Cart
          </button>

          <button
            class="buy_now"
            style={{
              height: "4em",
              width: "49%",
              background: "#ef6336",
              borderWidth: "0px",
              color: "white",
              fontWeight: "900",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>

      <div
        class="main_product_details"
        style={{
          flex: 4,
          padding: "10px",
          paddingLeft: "3em",
        }}
      >
        <div class="product_name">
          <h3> {product.title}</h3>

          <p>{product.category}</p>
        </div>

        <div class="price_detail">
          <h2> ₹{product.price}</h2>
        </div>

        <div class="product_description">
          <h4>Description</h4>

          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
