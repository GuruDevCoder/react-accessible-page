import React from 'react';

import { shallow } from 'enzyme';
import App from '../src/modules/App';
import HeaderComponent from '../src/modules/Header';
import {expect} from 'chai';
// import chaiEnzyme from 'chai-enzyme';

// const expect = chai.expect;

//chai.use(chaiEnzyme());

describe('App', () => {

    it("should contain header", function() {
        const wrapper = shallow(<App />);
        const headerComponent = wrapper.find(HeaderComponent);

        expect(headerComponent.length).to.be.equal(1);
    });

});
