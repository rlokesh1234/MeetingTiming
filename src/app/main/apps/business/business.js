import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import classNames from 'classnames';
import {FuseAnimate} from '@fuse';
//import {Typography} from '@material-ui/core';
//import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import { Line } from 'react-chartjs-2';
import * as Actions from './store/actions'
import withReducer from 'app/store/withReducer';
import { withStyles, Card, CardContent, Typography, Tabs, Tab } from '@material-ui/core';
import reducer from './store/reducers';
import GeneralManager from './widgets/generalManager';
import SeniorManager from './widgets/seniorManagers';
import TeamLeader from './widgets/TeamLeaders';
import Manager from './widgets/managers';

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

    componentDidMount()
    {
        this.props.getWidgets();
    }


    render() {

        const { tabValue } = this.state;
        const {widgets,adminData,campaignData,sellerData} = this.props;
        if ( !widgets )
        {
            return null;
        }
      //  const { selectedUnit } = this.state;
      //  console.log(this.state.selectedUnit,'general')
        let { generalManagerData, seniorManagerData} = this.props;
        let generalData = generalManagerData && generalManagerData.gmData && generalManagerData.gmData.gData;
        let seniorData = seniorManagerData && seniorManagerData.smData && seniorManagerData.smData.sData;
        let managerData = generalManagerData && generalManagerData.mData && generalManagerData.mData.MData;
        let teamData = generalManagerData && generalManagerData.tlData && generalManagerData.tlData.tData
  console.log(this.props)

        return (
          <div className="w-full">
            <FuseAnimate animation="transition.slideUpIn" delay={200}>
            <div className="flex flex-col md:flex-row sm:p-8 container">
              <div className="flex flex-1 flex-col w-full">
              <FuseAnimate delay={600}>
              <div className="flex items-center justify-between w-full">
                  <Typography className="p-16 pb-8 text-18 font-300">
                      General Manager
                  </Typography>
                </div>
              </FuseAnimate>

              <div className="flex flex-col sm:flex sm:flex-row pb-32">
                {
                  generalData && generalData.map((data,index)=> {
                    return(
                      <div key={index} className="flex p-16">
                      <GeneralManager data={data}/>
                      </div>
                    )
                  }
                )
                }

                </div>

                <FuseAnimate delay={600}>
                    <Typography className="p-16 pb-8 text-18 font-300">
                        Senior Manager
                    </Typography>
                </FuseAnimate>
                  <div className="flex flex-col sm:flex sm:flex-row pb-32">
                    {
                      seniorData && seniorData.map((data,index)=> {
                        return(
                          <div key={index} className="flex p-16">
                          <SeniorManager widget={data}/>
                          </div>
                        )
                      }
                    )
                    }

                    </div>


                    <FuseAnimate delay={600}>
                        <Typography className="p-16 pb-8 text-18 font-300">
                            Manager
                        </Typography>
                    </FuseAnimate>
                      <div className="flex flex-col sm:flex sm:flex-row pb-32">
                        {
                          managerData && managerData.map((data,index)=> {
                            return(
                              <div key={index} className="flex p-16">
                              <Manager data={data}/>
                              </div>
                            )
                          }
                        )
                        }

                        </div>


                        <FuseAnimate delay={600}>
                            <Typography className="p-16 pb-8 text-18 font-300">
                            Team Leader
                            </Typography>
                        </FuseAnimate>
                        <div className="flex flex-col sm:flex sm:flex-row pb-32">
                          {
                            teamData && teamData.map((data,index)=> {
                              return(
                                <div key={index} className="flex p-16">
                                <TeamLeader data={data}/>
                                </div>
                              )
                            }
                          )
                          }

                          </div>

              </div>
            </div>
            </FuseAnimate>

          </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getWidgets: Actions.getWidgets
    }, dispatch);
}

function mapStateToProps({Business})
{
//  console.log(analyticsDashboardApp,'ana')
    return {
        widgets: Business.widgets.data,
        generalManagerData: Business.widgets.data,
        seniorManagerData: Business.widgets.data,
        adminData:Business.widgets.adminData,
        campaignData:Business.widgets.campaignData,
        sellerData:Business.widgets.sellerData
    }
}

export default withReducer('Business', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Business)));



//export default Business
