import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`);
    this.props.getInventory();
  }

  render() {
    const inventoryList = this.props.inventory.map((e, i) => {
      return (
        <div key={i}>
          <Product
            deleteProduct={this.deleteProduct}
            name={e.name}
            price={e.price}
            img={e.img}
            id={e.id}
          />
        </div>
      );
    });
    return <div>{inventoryList}</div>;
  }
}
