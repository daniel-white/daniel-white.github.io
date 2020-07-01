import React from 'react';
import axios from 'axios';
import adapter from 'axios-jsonp';
import isBrowserHook from '../hooks/isBrowser';

class ReputationBrowser extends React.Component<{}, { reputation?: number }> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const response = await axios({
            url: 'https://api.stackexchange.com/2.2/users/23528?&site=stackoverflow',
            adapter
        });
        if (response.status === 200) {
            const userDetails = response.data.items[0];
            const reputation = userDetails.reputation;
            this.setState({
                reputation
            });
        }
    }

    render() {
        return <span>{ this.state.reputation?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</span>
    }
}

export default function Reputation() {
    const isBrowser = isBrowserHook();
    if (isBrowser) {
        return <ReputationBrowser />
    }
    else {
        return null;
    }
}