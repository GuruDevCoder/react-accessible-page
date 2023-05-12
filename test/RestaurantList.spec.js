import React from 'react';
import { shallow } from 'enzyme';
import RestaurantList from '../src/modules/RestaurantList';
import dummyData from '../src/data/restaurant-list.json';
import {expect} from 'chai';


describe('RestaurantList', () => {

    it("should contain ol", function() {
        const wrapper = shallow(<RestaurantList items={dummyData.items} area={dummyData.area} />);
        const ol = wrapper.find('ol');

        expect(ol.length).to.be.equal(1);
    });

});
