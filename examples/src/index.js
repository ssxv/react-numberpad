import React from 'react';
import { render } from 'react-dom';
import Numpad from '../../src';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '0'
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(numText) {
        let value = this.state.value;

        if (numText === '<') {
            value = value.slice(0, -1);
            if (!value) {
                value = '0';
            }
        } else if (numText === '.') {
            if (value.indexOf('.') === -1) {
                value += numText;
            }
        } else {
            if (value === '0') {
                value = '';
            }
            value += numText;
        }

        if (value.indexOf('.') !== -1) {
            value = value.substring(0, value.indexOf('.') + 3); // for upto 2 decimal places
        }

        this.setState({ value });
    }

    render() {
        return (
            <React.Fragment>

                <div>{this.state.value}</div>

                <Numpad onKeyPress={this.changeValue} />

            </React.Fragment>
        );
    }
}

render(<App />, document.getElementById("root"));
