import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateItem, deleteItem } from './actions/invoiceAction';

class Item extends Component {
  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.updateQty = this.updateQty.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      name: '',
      qty: '',
      price: '',
      total: ''
    }
  }

  updateName(e) {
    this.setState({name: e.target.value}, () => {
      this.updateItem()
    });
  }

  updateQty(e) {
    this.setState({qty: e.target.value}, () => {
      this.setState({total: this.state.qty * this.state.price}, () => {
        this.updateItem()
      })
    });
  }

  updatePrice(e) {
    this.setState({price: e.target.value}, () => {
      this.setState({total: this.state.qty * this.state.price}, () => {
        this.updateItem()
      })
    });
  }

  updateItem() {
    this.props.dispatch(updateItem({
      id: this.props.id, 
      name: this.state.name, 
      qty: this.state.qty, 
      price: this.state.price, 
      total: this.state.total
    }))
  }

  deleteItem() {
    this.props.dispatch(deleteItem(this.props.id))
  }

  render() {
    const borderClasses = 'w-1/5 border-solid border-2 border-black'
    return (
      <div className="mx-4">
        <input placeholder="Item" value={this.state.name} onChange={this.updateName} className={borderClasses}/>
        <input placeholder="Qty" value={this.state.qty} onChange={this.updateQty} className={borderClasses}/>
        <input placeholder="Price" value={this.state.price} onChange={this.updatePrice} className={borderClasses}/>
        <input placeholder="Total" value={this.state.total} className={borderClasses}/>
        <span className="w/1-5 ml-2 cursor-pointer" onClick={this.deleteItem}>X</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {invoice} = state;
  return {invoice}
}

export default connect(mapStateToProps)(Item);