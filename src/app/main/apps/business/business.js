import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { withStyles, Card, CardContent, Typography, Tabs, Tab } from '@material-ui/core';
import reducer from './store/reducers';

import data from './store/data'

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};
class Business extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabValue: 0,
            graphData: data[0].vpData

        };
    }


    returnData = (tabValue) => {

        switch (tabValue) {
            case 0:
                console.log(data[0].vpData, 'vp')
                return data[0].vpData

            case 1:
                return data[0].gmData

            case 2:
                return data[0].smData

            case 3:
                return data[0].ManagerData

            case 4:
                return data[0].tlData

            default:
                break

        }
    }
    handleTabChange = (event, value) => {
        console.log(event)
        console.log(value)
        // debugger;
        this.setState({ graphData: this.returnData(value) })
        // this.setState({ tabValue: value });
    };

    render() {

        const { tabValue } = this.state;

        return (
            <div className="business">
                <Tabs
                    value={tabValue}
                    onChange={this.handleTabChange}
                    variant="fullWidth"
                    className="mb-32"
                >
                    <Tab
                        className="min-w-0"
                        label="Vice President"
                    />
                    <Tab
                        className="min-w-0"
                        label="General Manager"
                    />
                    <Tab
                        className="min-w-0"
                        label="Senior Manager"
                    />
                    <Tab
                        className="min-w-0"
                        label="Manager"
                    />
                    <Tab
                        className="min-w-0"
                        label="Team Leaders"
                    />
                </Tabs>
                {
                    <div className="" style={styles}>
                        <Line
                            data={this.state.graphData}

                        />
                    </div>
                }

            </div>
        )
    }
}


export default Business