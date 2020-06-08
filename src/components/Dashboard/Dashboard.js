import React from "react";
import Product from "../Product/Product";
import axios from "axios";

export default function Dashboard(props) {
  const deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`)
    .then(() => {
      props.getInventory()
    })
    .catch(err => console.log(err))
  };

  const inventoryList = props.inventory.map((e, i) => {
    return (
      <div key={i}>
        <Product
          updateSelectedProduct={props.updateSelectedProduct}
          deleteProduct={deleteProduct}
          item={e}
        />
      </div>
    );
  });
  return <div>{inventoryList}</div>;
}
