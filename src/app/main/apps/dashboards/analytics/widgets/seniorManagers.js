import React, {Component} from 'react';
import {withStyles, Button, MuiThemeProvider, Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {Polar,defaults} from 'react-chartjs-2';
import _ from '@lodash';
import connect from 'react-redux/es/connect/connect';

defaults.global.legend.display = false

const styles = theme => ({
    root: {
        background     : 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
    }
});

class SeniorManager extends Component {

    state = {
        dataset: '2017'
    };

    setDataSet = (dataset) => {
        this.setState({dataset});
    };

    render()
    {
        const {classes, mainThemeDark, data, theme} = this.props;


        return (
            <MuiThemeProvider theme={mainThemeDark}>
                <div className={classes.root}>

                    <div className="container relative h-200 sm:h-256 pb-16 ">
                        <Polar
                            data={data.data}
                            options={data.data.options}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps({fuse})
{
    return {
        mainThemeDark: fuse.settings.mainThemeDark
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps)(SeniorManager));
