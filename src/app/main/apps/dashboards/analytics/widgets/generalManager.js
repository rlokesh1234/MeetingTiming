import React, {Component} from 'react';
import Slider from "react-slick";
import {withStyles, Button, MuiThemeProvider, Typography,Paper} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {Doughnut} from 'react-chartjs-2';
import _ from '@lodash';
import connect from 'react-redux/es/connect/connect';

const styles = theme => ({
    root: {
        background     : 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
    }
});

class GeneralManager extends Component {

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

          <Paper className="w-full rounded-8 shadow-none border-1">
              <div className="flex items-center justify-between px-16 py-16 border-b-1">
                  <Typography className="text-16">{data.data.title}</Typography>
              </div>
              <div className="flex flex-row flex-wrap">
                  <div className="w-full p-8 min-h-420 h-420">
                  <Doughnut
                      data={data.data}
                      options={data.data.options}
                  />
                  </div>
              </div>
          </Paper>

        );
    }
}

function mapStateToProps({fuse})
{
    return {
        mainThemeDark: fuse.settings.mainThemeDark
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps)(GeneralManager));
