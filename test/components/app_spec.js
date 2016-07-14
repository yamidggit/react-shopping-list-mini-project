import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { fromJS } from 'immutable';

import { App } from '../../app/components/app';

const state = fromJS({
    name: 'Groceries',
    items: [
        {
            name: 'Carrots',
            quantity: 2,
            purchased: true
        },
        {
            name: 'Broccoli',
            quantity: 1,
            purchased: true
        },
        {
            name: 'Milk',
            quantity: '1 gallon',
            purchased: false
        },
        {
            name: 'Eggs',
            quantity: '2 dozen',
            purchased: false
        }
    ]
});

describe('<App />',() => {
    const wrapper = shallow(<App name="Shopping List Test App" state={state}/>);
    
    describe('render ()', () =>{
        
        it('renders an h1 tag', () => {
            expect(wrapper).to.have.exactly(1).descendants('h1');
        });
        
        it('renders name of application', () => {
            expect(wrapper).to.include.text("Shopping List Test App");
        });
        
        it('renders ShoppingList', () => {
            expect(wrapper.find('ShoppingList')).to.have.length(1);
        });
        
        it ('renders ShoppingList with items and name props', () =>{
            
            expect(wrapper.find('ShoppingList').props()).to.include.key('name');
            expect(wrapper.find('ShoppingList').props()).to.include.key('items');
            expect(wrapper.find('ShoppingList').props().items).not.to.be.an('undefined');
            
        });
        
    });
    
});