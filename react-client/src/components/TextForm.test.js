import React from 'react'
import {shallow} from 'enzyme'
import TextForm from "./TextForm";
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {createStore} from "redux";
import textReducer from "../reducers/textReducer";
import {Provider} from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

const text_obj = {
    str: 'hola'
};

const store = createStore(textReducer);

describe('(TextForm) TextForm', () => {
    it('renders the form correctly without crashing', () => {
        shallow(
            <Provider store={store}>
                <TextForm text={text_obj}/>
            </Provider>
        );
    });
});
