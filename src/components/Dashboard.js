import React, { Component } from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render(){
        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {this.props.tweetsId.map((id) => (
                        <li key={id}>
                            <div>TWEET id: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function MapStateToProps ({ tweets }) {
    return {
        tweetsId: Object.keys(tweets)
            .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(MapStateToProps)(Dashboard);