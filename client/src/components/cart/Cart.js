import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeProduct, incrementQty, decrementQty } from '../../actions/cartActions';

class Cart extends Component {   
    decrement(id) {
        const { items } = this.props.cart;
        const currentItemQty = items.filter(item => item._id === id).quantity;
        if (currentItemQty === 1) {
            return false;
        }
        this.props.decrementQty(id);
    }

    increment(id) {
        console.log(id)
        this.props.incrementQty(id);
    }
    
    handleRmove(id) {
        console.log(id)
        this.props.removeProduct(id);
    }

    render() {
        const { cart } = this.props;
      
        let cartTotal = cart.items.reduce((subtotal, item) => {
            let total = subtotal + item.price;
            return total;
        }, 0)

        // let totalItems = cart.items.reduce((quantity, item) => {
        //     let totalItemsInCart = quantity + item.quantity;
        //     return totalItemsInCart;
        // }, 0)

        return (
            <div className="cart pl-3 text-dark">
                    <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="badge badge-pill badge-danger">{ cart.items.length > 0 ? cart.items.length : '0' }</span>
                                <ion-icon name="cart"></ion-icon>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right shadow-lg border-0 rounded-0 p-3" aria-labelledby="dropdownMenuButton">
                                
                                <table className="table mb-0">
                                    <tbody>                                 
                                        { cart.items.length > 0 
                                            ?  cart.items.map(item => {
                                                return  <tr key={item._id}>
                                                            <td className="img-col"><img alt="" className="img-fluid" src={item.image} /></td>
                                                            <td><small className="text-muted">{item.name}</small></td>
                                                            <td className="font-weight-bold text-secondary text-right">$ {item.price}</td>
                                                            {/* <td style={{width: "250px"}}>
                                                                <button onClick={this.decrement.bind(this, item._id)} className="btn btn-sm btn-light">
                                                                    <i className="fas fa-minus"></i>
                                                                </button>
                                                                <small>{item.quantity}</small>
                                                                <button onClick={this.increment.bind(this, item._id)} className="btn btn-sm btn-light">
                                                                    <i className="fas fa-plus"></i>
                                                                </button>                          
                                                            </td> */}
                                                            <td className="text-right">
                                                                <i className="fas fa-times" onClick={this.handleRmove.bind(this, item._id)}></i>
                                                            </td>                        
                                                        </tr>
                                              }) 
                                            :   <tr>
                                                    <td className="border-top-0 text-muted text-center">
                                                        <small>The cart is empty</small>
                                                    </td>
                                                </tr>  
                                        }
                                    </tbody>
                                </table>
                                <div className="d-flex border-top justify-content-between mt-2 p-2 bg-light font-weight-bold">
                                    <span>Total: </span>
                                    <span>$ { cartTotal }</span>
                                </div>
                                <div className="border-top pt-2">
                                    {
                                        cart.items.length > 0 
                                        ? <button className="btn btn-info w-100 rounded-0 pt-2 pb-2">Checkout</button>
                                        : <button disabled className="btn w-100 rounded-0 pt-2 pb-2">Checkout</button> 
                                    }
                                </div>
                                       
                            </div>
                    </div>
            </div>
        )
  }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, { removeProduct, incrementQty, decrementQty })(Cart);