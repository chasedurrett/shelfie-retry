import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      img: "",
      editProductId: null,
    };
  }

  componentDidUpdate(prevP, prevS) {
    if (prevP.selectedProduct.id !== this.props.selectedProduct.id) {
      this.setState({
        editProductId: this.props.selectedProduct.id,
        name: this.props.selectedProduct.name,
        price: this.props.selectedProduct.price,
        img: this.props.selectedProduct.img,
      });
    }
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  resetState() {
    this.setState({
      name: "",
      price: 0,
      img: "",
      editProductId: null
    });
  }

  createProduct() {
    const { name, price, img } = this.state;
    axios.post("/api/product", { name, price, img }).then(() => {
      this.props.getInventory();
      this.resetState();
    })
    .catch(err => console.log(err))
  }

  submitChanges() {
    const { name, price, img, editProductId } = this.state;
    axios
      .put(`/api/inventory/${editProductId}`, { name, price, img })
      .then(() => this.props.getInventory())
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div className="form-container">
        <form className="form">
          <img
            alt="product-preview"
            className="img-preview"
            src={this.state.img}
          />
          <div>
            <h3>Image URL:</h3>
            <input value={this.state.img} name="img" onChange={(e) => this.handleInput(e)} />
          </div>
          <div>
            <h3>Product Name:</h3>
            <input value={this.state.name} name="name" onChange={(e) => this.handleInput(e)} />
          </div>
          <div>
            <h3>Price:</h3>
            <input
              value={this.state.price}
              name="price"
              type="number"
              onChange={(e) => this.handleInput(e)}
            />
          </div>
          <div>
            <button onClick={() => this.resetState()}>Cancel</button>
            {this.state.editProductId ? (
              <button onClick={() => this.submitChanges()}>Save Changes</button>
            ) : (
              <button onClick={() => this.createProduct()}>
                Add to Inventory
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}
