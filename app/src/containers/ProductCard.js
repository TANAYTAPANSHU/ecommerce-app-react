/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
function ProductCard(props) {
  return (
    <Link
      to={`/product/${props.id}`}
      style={{
        textDecoration: "none",
        margin: 10,
      }}
    >
      <div
        className="Product_Card"
        style={{
          padding: 20,
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 380,
        }}
      >
        <img src={props.image} style={{ height: 230, width: 150 }}></img>
        <div
          className="Product_Card_Details"
          style={{
            display: "flex",
            flexDirection: "column",
            width: 180,
          }}
        >
          <p style={{ color: "black", fontSize: 16, marginBottom: 8 }}>
            {props.name}
          </p>
          <h4 style={{ color: "black", fontSize: 16, marginBlock: 8 }}>
            ₹ {props.price}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
