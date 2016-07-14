import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {ShoppingList} from '../../app/components/shopping_list';

import {fromJS} from 'immutable';

const items= fromJS([
        {
            name: 'Test item 1',
            quantity: 2,
            purchased: true
        },
        {
            name: 'Test item 2',
            quantity: 1,
            purchased: false
        }
]);

describe('<ShoppingList />', () =>{
    
    const wrapper = shallow(<ShoppingList name= "Test name" items= {items}/>);
    //console.log(wrapper.debug());
    describe('render()', () =>{
        

        it('render Items with correct props', ()=>{
            expect(wrapper.find('Item')).to.have.length(2);
            
            const firstItemProps = wrapper.find('Item').first().props();
            //console.log(firstItemProps);
            expect(firstItemProps).to.include.keys('name', 'quantity', 'purchased');
            expect(firstItemProps.name).to.eq('Test item 1');
            expect(firstItemProps.quantity).to.eq(2);
            expect(firstItemProps.purchased).to.eq(true);
            
            const secondItemProps = wrapper.find('Item').last().props();
           
            expect(secondItemProps).to.include.keys('name', 'quantity', 'purchased');
            expect(secondItemProps.name).to.eq('Test item 2');
            expect(secondItemProps.quantity).to.eq(1);
            expect(secondItemProps.purchased).to.eq(false);
            
            
        });
        
    });
});