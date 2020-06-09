import React, { Component } from 'react';

import jobIcon from '../../img/speaker.png'

import './index.css';
import api from '../../services/api';
import io from 'socket.io-client';
export default class JobsCard extends Component {
    state = {
        jobs: []
    }

    async loadData() {
        const response = await api.get('/jobs');
        this.setState({ jobs: response.data });
    }


    registerSocket() {
        const socket = io(process.env.REACT_APP_API_URL);
        socket.on('newjob', newjob => {
            this.setState({ jobs: [newjob, ...this.state.jobs] }); // contatenação
            //this.loadData();
        });
    }
    componentDidMount() {
        this.registerSocket();
        this.loadData();
    }

    render() {
        return (
            <div className='main-container'>
                {
                    this.state.jobs.map(job => (
                        <div className='jobs-container'><img src={jobIcon} alt='' />
                            <div className='jobsCard-desc'>
                                <span>{job.description}</span>
                                <p>{job.company}</p>
                                <p>{job.company_address}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}