import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import Nav from '../src/modules/Nav';


describe('Nav', () => {

    it("should contain nav", function() {
        const wrapper = shallow(<Nav />);
        const ul = wrapper.find('ul');

        expect(ul.length).to.be.equal(1);

    });

});
