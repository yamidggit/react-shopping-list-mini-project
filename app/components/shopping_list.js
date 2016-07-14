import React from 'react';

import {Item} from './item';

export class ShoppingList extends React.Component {
    render() {
        return (
            <div className= "shopping-list">
                <h4>{this.props.name}</h4>
                { this.props.items.map( (item) => 
                    <Item 
                        key={item}
                        name= {item.get('name')}
                        quantity= {item.get('quantity')}
                        purchased= {item.get('purchased')} />
                )} 
                
            </div>   
        );
    }
    
}

