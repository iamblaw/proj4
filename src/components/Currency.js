import React, { Component } from 'react';

class Currency extends Component {
    
    render () {
        let {
            price_usd,
        } = this.props.data;

        return (
            <li>
                <p >{'Ethereum'} ({'ETH'})</p>
                <h1> $ {price_usd} </h1>
            </li>
        );
    }
}

export default Currency;