import React, {Component} from 'react';
import Slider from "react-slick";
import {withStyles, Button, MuiThemeProvider, Typography,Paper} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import * as Actions from '../store/actions'
import withReducer from 'app/store/withReducer';
import {withRouter} from 'react-router-dom'
import reducer from '../store/reducers';
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
    constructor(props){
        super(props);

        this.state = {
            dataset: '2017',
            isData:false,
            isMonthly:false,
            selectedDuration:false,
            isDaily:false,
            day:1,
            monthValue:'Jan',
            isMonthly:false,
            duration:[{id:0,unit:'Duration'},{id:1,unit:'Daily'},{id:2,unit:'Monthly'}],
            daily:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            daily2:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
            month:['Jan',"Feb","Mar",'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            
        };
    }

  

    handleSelect=(event)=>{
        if(event.target.value == 'Daily'){
           this.setState({isDaily:true,isMonthly:false})
        }else{
            this.setState({isMonthly:true,isDaily:false})
        }
        this.setState({selectedDuration:event.target.value})
    }

    handleDaily=(event)=>{
        this.setState({day:event.target.value})
        if(event.target.value && this.state.monthValue){
            this.props.getData(event.target.value,this.state.monthValue)
        }
    }


    handleMonthy=(event) =>{

        this.setState({monthValue:event.target.value})
        if(event.target.value && this.state.day){
            this.props.getData(this.state.day,event.target.value)
        }
        
        if(event.target.value === 'Jan' || event.target.value === 'Mar' || event.target.value === 'Apr' || event.target.value === 'Jul' || event.target.value === 'Aug' || event.target.value ===
        'Oct' || event.target.value ==='Dec'){
            let even = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            this.setState({daily:even})
        }
        else if(event.target.value === 'Apr' || event.target.value === 'Jun' || event.target.value === 'Sep' || event.target.value ==='Nov'){
         let even1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            this.setState({daily:even1})
        }
        else{
            let even2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
            this.setState({daily:even2})
        }
        
    }

    setDataSet = (dataset) => {
        this.setState({dataset});
    };

    render()
    {
        const {classes, mainThemeDark, data, theme,newData} = this.props;
        let   options={
            legend             : {
                display: true,
                position: 'bottom'
            },
            animation:{
              animateScale:true
            }
          }

          let apiData = {
            labels:['Working Hours, MeetingHours'],
            staffId: newData && newData.StaffMeeting.staffId,
            datasets:[{
                data:[newData && newData.StaffMeeting.workingHours,newData && newData.StaffMeeting.meetingHours],
                hoverBackgroundColor:['blue','red'],
                backgroundColor:['blue','red']
            }],
        }

        return (

          <Paper className="w-full rounded-8 shadow-none border-1">
              <div className="flex items-center justify-between px-16 py-16 border-b-1">
                  <Typography className="text-16">{data && data.StaffMeeting && data.StaffMeeting.staffId}</Typography>
                  {
                       <select onChange={(event)=>this.handleSelect(event)}>{this.state.duration.map((unit,index)=> <option key={index} value={unit.unit}>{unit.unit}</option>
                          )}
                          </select>
                        }

{
                       this.state.isDaily && <>
                       <select onChange={this.handleDaily}>{this.state.daily.map((unit,index)=> <option key={index} value={unit}>{unit}</option>
                          )}
                          </select>

                          <select onChange={this.handleMonthy}>{this.state.month.map((unit,index)=> <option value={unit}>{unit}</option>
)}
</select>
                          </>

                          
                        }
              </div>
              <div className="flex flex-row flex-wrap">
                  <div className="w-full p-8 min-h-420 h-420">

                      {
                          apiData && apiData.staffId === data.StaffMeeting.staffId ? <Doughnut
                          data={apiData && apiData}
                          options={options}
                      /> : <Doughnut
                      data={data && data.StaffMeeting}
                      options={data && data.StaffMeeting.options}
                  /> 
                      }
                  
                  
                  </div>
              </div>
          </Paper>

        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getData: Actions.getData,
        getWeekly: Actions.getWeekly
    }, dispatch);
}

function mapStateToProps({analyticsDashboardApp})
{
    return {
        newData: analyticsDashboardApp.widgets.newData,
    }
}
export default withReducer('GeneralManager', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(GeneralManager)));

//export default withStyles(styles, {withTheme: true})(connect(mapStateToProps)(GeneralManager));
