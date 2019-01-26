# react-numberpad

A react based on-screen number pad.

## npm

`npm i react-numberpad`

https://www.npmjs.com/package/react-numberpad

## demo

https://ssxv.github.io/react-numberpad/

## usage

```
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

```

## html reference

```
<div class="numpad">
    <span>7</span>
    <span>8</span>
    <span>9</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>0</span>
    <span>.</span>
    <span><</span>
</div>
```