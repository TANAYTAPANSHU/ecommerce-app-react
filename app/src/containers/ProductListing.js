import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import productsData from "../db/store.json";

function ProductListing() {
  return (
    <div
      className="Product_Listing"
      style={{
        padding: 20,
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {productsData.map((product, index) => {
        return (
          <ProductCard
            key={index}
            name={product.title}
            price={product.price}
            image={product.image}
            id={product.id}
          />
        );
      })}{" "}
    </div>
  );
}

export default ProductListing;
