import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {withStyles, Button, MuiThemeProvider, Typography,Paper} from '@material-ui/core';
import {withRouter} from 'react-router-dom'

export default class DurationComponet extends React.Component{
 render(){
     const durationData = this.props.newData
     let data = {
         labels:[durationData && durationData.StaffMeeting.workingHours,durationData && durationData.StaffMeeting.meetingHours,durationData && durationData.StaffMeeting.workingPercent,durationData && durationData.StaffMeeting.meetingPercent],
            datasets:[{
                data:[durationData && durationData.StaffMeeting.workingHours,durationData && durationData.StaffMeeting.meetingHours,durationData && durationData.StaffMeeting.workingPercent,durationData && durationData.StaffMeeting.meetingPercent],
                hoverBackgroundColor:['blue','red','orange','green'],
                backgroundColor:['blue','red','orange','green']
            }],
              options:{
                legend             : {
                    display: false
                },
                animation:{
                  animateScale:true
                }
              }
     }
     let data1={
            type:'doughnut',
            title:'General Manager1',
            options:{
              legend             : {
                  display: false
              },
              animation:{
                animateScale:true
              }
            },
            labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
            datasets:[{
              data:[40,20,15,10,55,25,8,0,50],
              backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
              hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
            }]
          }
     
     return(
        <Paper className="w-full rounded-8 shadow-none border-1 mt-20">
        <div className="flex items-center justify-between px-16 py-16 border-b-1">
            <Typography className="text-16">{this.props.staffId ? this.props.staffId:'GeneralManager'}</Typography>
        </div>
        <div className="flex flex-row flex-wrap">
            <div className="w-1/3 p-8 min-h-420 h-420">

        
            <Doughnut
                data={durationData ? data : data1}
                options={durationData ? data.options : data1.options}
            />
            </div>
        </div>
    </Paper>
     )
 }
}


DurationComponet.propTypes = {
    staffId:PropTypes.string
}


DurationComponet.defaultProps = {
    staffId:'GeneralManager'
}