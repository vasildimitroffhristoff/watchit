import React, { Component } from 'react';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <div className={window.location.pathname === '/' ? "header-home jumbotron jumbotron-fluid" : "header-page jumbotron jumbotron-fluid"}>
                <div className="container">
                    <Navbar totalItems={this.props.totalItems} cartItems={this.props.cartItems}/>
                    {window.location.pathname === '/' ? 
                    ( 
                        <div>
                            <h1 className="display-4">Smart watches</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            <Link to="/products" className="jumbo-btn btn btn-primary">New collection</Link>
                        </div>
                    )
                    : (null)}
                </div>
            </div>
        )
    }
}