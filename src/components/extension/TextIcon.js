import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon} from "semantic-ui-react";

export default class TextIcon extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        color: PropTypes.string
    };

    style = {
        paddingLeft: '4px',
        alignSelf: 'center'
    };
    render() {
        return (
            <div style={{whiteSpace: 'nowrap', display: 'inline-flex'}}>
                <Icon size='large'
                      color={this.props.color}
                      name={this.props.name}/>
                <div style={this.style} >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
