import React, { Component } from "react";
import axios from "axios";
import "./Form.css"

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      img: "",
    };
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  resetState() {
    this.setState({
      name: "",
      price: '',
      img: "",
    });
  }

  createProduct() {
    const { name, price, img } = this.state;
    axios.post("/api/product", {name, price, img});
    this.props.getInventory();
    this.resetState();
  }

  render() {
    return (
      <div className='form-container'>
        <form className="form">
          <img alt="product-preview" className="img-preview" src={this.state.img}/>
          <div>
            <h3>Image URL:</h3>
            <input name="img" onChange={(e) => this.handleInput(e)} />
          </div>
          <div>
            <h3>Product Name:</h3>
            <input name="name" onChange={(e) => this.handleInput(e)} />
          </div>
          <div>
            <h3>Price:</h3>
            <input
              name="price"
              type="number"
              onChange={(e) => this.handleInput(e)}
            />
          </div>
          <div>
            <button onClick={() => this.resetState()}>Cancel</button>
            <button onClick={() => this.createProduct()}>
              Add to Inventory
            </button>
          </div>
        </form>
      </div>
    );
  }
}
