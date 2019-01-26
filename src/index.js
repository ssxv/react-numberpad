import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Numpad extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="numpad">
                    <span onClick={() => this.props.onKeyPress('7')}>{'7'}</span>
                    <span onClick={() => this.props.onKeyPress('8')}>{'8'}</span>
                    <span onClick={() => this.props.onKeyPress('9')}>{'9'}</span>
                    <span onClick={() => this.props.onKeyPress('4')}>{'4'}</span>
                    <span onClick={() => this.props.onKeyPress('5')}>{'5'}</span>
                    <span onClick={() => this.props.onKeyPress('6')}>{'6'}</span>
                    <span onClick={() => this.props.onKeyPress('1')}>{'1'}</span>
                    <span onClick={() => this.props.onKeyPress('2')}>{'2'}</span>
                    <span onClick={() => this.props.onKeyPress('3')}>{'3'}</span>
                    <span onClick={() => this.props.onKeyPress('0')}>{'0'}</span>
                    <span onClick={() => this.props.onKeyPress('.')}>{'.'}</span>
                    <span onClick={() => this.props.onKeyPress('<')}>{'<'}</span>
                </div>
            </React.Fragment>
        );
    }
}

Numpad.propTypes = {
    onKeyPress: PropTypes.func.isRequired
};

export default Numpad;