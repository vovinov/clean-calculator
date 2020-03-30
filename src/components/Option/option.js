import React, { Component } from 'react';

export default class Option extends Component {

    render() {

        const {name} = this.props;

        return <option className="calculator__select--text">{name}</option>
    }
}

