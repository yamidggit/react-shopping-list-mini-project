import React from 'react';

import { ShoppingList } from './shopping_list';

export class App extends React.Component {
    render() {
        return (
            <div className="app">
            <h1> { this.props.name } </h1>
            <ShoppingList name= {this.props.state.get('name') } items= {this.props.state.get('items')}/>
            </div>
        );
    }
    
}