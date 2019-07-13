import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { addItem } from './actions/invoiceAction';

class App extends Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.dispatch(addItem({id: this.props.invoice.id + 1, name: '', qty: '', price: '', total: 0}))
  }

  render() {
    return (
      <div className="flex flex-col justify-between h-screen bg-gray-200">
        <div>
          <h1 className="text-3xl text-center text-green-600">Invoice Editor</h1>
          <div className="h-64 overflow-y-auto">
            {Object.keys(this.props.invoice.items).map(id => <Item id={id} />)}
          </div>
        </div>
        <div className="flex justify-between bg-gray-400">
          <div className="flex items-center">
            <button className="m-4 outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={this.addItem}>Add new item</button>
          </div>
          <div className="m-4">
            <p>{`Subtotal: $${this.props.invoice.subtotal}`}</p>
            <p>{`Tax (5%): $${this.props.invoice.tax}`}</p>
            <p>{`Total: $${this.props.invoice.total}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {invoice} = state;
  return {invoice}
}

export default connect(mapStateToProps)(App);
