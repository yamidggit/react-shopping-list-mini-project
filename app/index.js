import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';

import { App } from './components/app';

require('./css/aplication.scss');

const state = fromJS({
    name: 'Groceries',
    items: [
        {
            name: 'Carrots',
            quantity: 2,
            purchased: true // item with purchased in true will be styled in color green
        },
        {
            name: 'Broccoli',
            quantity: 1,
            purchased: true
        },
        {
            name: 'Milk',
            quantity: '1 gallon',
            purchased: false //// item with purchased in false will be styled in color red
        },
        {
            name: 'Eggs',
            quantity: '2 dozen',
            purchased: false
        }
    ]
});

ReactDOM.render(
    <App name="Shopping List" state={state} />,
    document.getElementById('app')
    );