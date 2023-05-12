import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import Header from '../src/modules/Header';
import NavComponent from '../src/modules/Nav';
import dummyData from '../src/data/restaurant-list.json';

describe('Header', () => {

    it("should contain nav", function() {
        const wrapper = shallow(<Header area={dummyData.area} item_count={dummyData.item_count} />);
        const navComponent = wrapper.find(NavComponent);

        expect(navComponent.length).to.be.equal(1);
    });

});
