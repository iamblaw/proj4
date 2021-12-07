import React, { Component } from 'react';
import Axios from 'axios';

class Monitor extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {
                    price_usd: '0',
                },
            ]
        };
    }

    componentDidMount () {
        this.fetchEthPrice();
        this.interval = setInterval(() => this.fetchEthPrice(), 15 * 1000);
    }

    fetchEthPrice () {
        Axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
        .then(res => {
            let result = res.data['ethereum']['usd'];
            console.log(result)
            this.setState({ data: {price_usd: result}});
        })
        .catch(err => console.log(err));
    }

    render () {
    
        return (
            <div>
            </div>

        );
    }
}

export default Monitor;