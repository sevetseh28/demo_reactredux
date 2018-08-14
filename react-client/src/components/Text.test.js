import React from 'react'
import {shallow, mount} from 'enzyme'
import Text from "./Text";
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const text_obj = {
    str: 'hola'
};

describe('(Text) Text', () => {
    it('renders text correctly without crashing', () => {
        shallow(<Text text={text_obj}/>);
    });
});
