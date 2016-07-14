import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {Item} from '../../app/components/item';

describe('<Item />', () =>{
    
    describe('render()', () =>{
        
        const wrapper = shallow(<Item name= "Test name" quantity= {2} purchased ={true} />);
        //console.log(wrapper.debug());
        it('display items with correct props', ()=>{
            expect(wrapper).to.include.text("2  Test name ");
            
        });
        
        it('adds a css class for the item purchased', () => {
            expect(wrapper.find(`.item.purchased`)).to.have.length(1);
        });
        
        it('adds a css class for the item not purchased', () => {
            const wrapper = shallow(<Item name= "Test name " quantity= {3} purchased ={false} />);
            expect(wrapper.find(`.item.not_purchased`)).to.have.length(1);
        });
    });
    
});