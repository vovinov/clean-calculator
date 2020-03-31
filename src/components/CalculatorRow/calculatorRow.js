import React, { Component } from 'react';
import Option from '../Option';


export default class Calculator_row extends Component {

    render() {
        
        const {title, options, initialValue, onSelected} = this.props;
        
        return (
            <div className="calculator__row row">
                <div className="calculator__option col-6">
                    <span className="ml-3">{title}</span>  
                </div>
                <select 
                    className="custom-select calculator__select col-6"
                    defaultValue={initialValue}
                    onChange={(e) => onSelected(e)} >
                    {options &&
                    options.map((name, idx) => {
                        return <Option name={name} key={idx} value={name}/>
                    })}                    
                </select>                                            
            </div>
        )
    }
}

