import React from 'react';

export  class Item extends React.Component {
    render() {
        return (
            <div className= {this.props.purchased ? "item purchased": "item not_purchased" } > 
                <span class="quantity"> {this.props.quantity} </span>
                <span class ="name"> {this.props.name} </span>
            </div>   
        );
    }
    
}