import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selectedProduct: {}
    };
    this.getInventory = this.getInventory.bind(this);
    this.updateSelectedProduct = this.updateSelectedProduct.bind(this)
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get("/api/inventory").then((res) => {
      this.setState({
        inventory: res.data,
      });
    });
  }

  updateSelectedProduct(productToBeEdited){
    this.setState({
      selectedProduct: productToBeEdited
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard updateSelectedProduct={this.updateSelectedProduct} inventory={this.state.inventory} getInventory={this.getInventory} />
        <Form selectedProduct={this.state.selectedProduct} getInventory={this.getInventory} />
      </div>
    );
  }
}

export default App;
