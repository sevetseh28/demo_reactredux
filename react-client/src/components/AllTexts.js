import React, { Component } from 'react';
import { connect } from 'react-redux';
import Text from './Text';

class AllTexts extends Component {
    render() {
        return (
            <div>
                {this.props.texts.map((text) => <Text key={text.str} text={text} />)}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        texts: state
    }
};
export default connect(mapStateToProps)(AllTexts);