
import React, { Component } from 'react';

class Text extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.text.str}</h2>
            </div>
        );
    }
}
export default Text;