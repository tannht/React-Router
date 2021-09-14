import React, { Component } from 'react';

class Products extends Component {
    
    render() {
        var {location} = this.props
        console.log(location)
        return (
            <div>
                THIS IS PRODUCTS
            </div>
        );
    }
}

export default Products;