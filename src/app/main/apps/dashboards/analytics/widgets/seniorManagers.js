import React, {Component} from 'react';
import {Typography, Paper, Button} from '@material-ui/core';
import {Bar, Line} from 'react-chartjs-2';
import _ from 'lodash';

class SeniorManager extends Component {
    state = {
        currentRange: 'D'
    };

    handleChangeRange = (currentRange) => {
        this.setState({currentRange});
    };

    render()
    {
        const {widget: widgetRaw} = this.props;
        const {currentRange} = this.state;
        const widget = _.merge({}, widgetRaw);

        return (
            <Paper className="w-full rounded-8 shadow-none border-1">
                <div className="flex items-center justify-between px-16 py-16 border-b-1">
                    <Typography className="text-16">{widget.title}</Typography>
                    <select>
                      <option>Daily</option>
                      <option>Monthly</option>
                  </select>
                </div>
                <div className="flex flex-row flex-wrap">
                    <div className="w-full p-8 min-h-420 h-420">
                        <Bar
                            clasName="w-full h-full"
                            data={{
                                labels  : widget.mainChart[currentRange].labels,
                                datasets: widget.mainChart[currentRange].datasets
                            }}
                            options={widget.mainChart.options}
                        />
                    </div>
                </div>
            </Paper>
        );
    }
}

export default SeniorManager;
