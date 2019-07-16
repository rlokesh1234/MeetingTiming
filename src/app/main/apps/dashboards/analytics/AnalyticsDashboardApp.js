import React, {Component} from 'react';
import {Typography} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import Widget1 from './widgets/Widget1';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import AdminComponent from './widgets/AdminComponent'
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import GeneralManager from './widgets/generalManager';
import SeniorManager from './widgets/seniorManagers';
import TeamLeader from './widgets/TeamLeaders';
import Manager from './widgets/managers';


class AnalyticsDashboardApp extends Component {

    componentDidMount()
    {
        this.props.getWidgets();
    }

    render()
    {
        const {widgets,adminData,campaignData,sellerData,generalManagerData,seniorManagerData} = this.props;
        if ( !widgets )
        {
            return null;
        }
        return (
            <div className="w-full">

                <Widget1 data={widgets.widget1}/>

                <FuseAnimate animation="transition.slideUpIn" delay={200}>

                    <div className="flex flex-col md:flex-row sm:p-8 container">

                        <div className="flex flex-1 flex-col min-w-0">


                        <FuseAnimate delay={600}>
                            <Typography className="p-16 pb-8 text-18 font-300">
                                General Manager
                            </Typography>
                        </FuseAnimate>
                          <div className="flex flex-col sm:flex sm:flex-row pb-32">
                            {
                              generalManagerData && generalManagerData.gmData.gData.map((data,index)=> {
                                return(
                                  <div key={index} className="">
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
                                  seniorManagerData && seniorManagerData.smData.sData.map((data,index)=> {
                                    return(
                                      <div key={index} className="">
                                      <SeniorManager data={data}/>
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
                                      generalManagerData && generalManagerData.mData.MData.map((data,index)=> {
                                        return(
                                          <div key={index} className="">
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
                                          generalManagerData && generalManagerData.tlData.tData.map((data,index)=> {
                                            return(
                                              <div key={index} className="">
                                              <TeamLeader data={data}/>
                                              </div>
                                            )
                                          }
                                        )
                                        }

                                        </div>

                            {/* <FuseAnimate delay={600}>
                                <Typography className="px-16 pb-8 text-18 font-300">
                                    Gross Revenues
                                </Typography>
                            </FuseAnimate>

                            <div className="widget w-full p-16 pb-32">
                                <Widget5 data={widgets.widget5}/>
                            </div>

                            <FuseAnimate delay={600}>
                                <Typography className="px-16 pb-8 text-18 font-300">
                                Latest Request Payout of Seller
                                </Typography>
                            </FuseAnimate>

                            <div className="widget w-full p-16 pb-32">
                                <Widget6 data={sellerData}/>
                            </div> */}
                        </div>

                        <div className="flex flex-wrap w-full md:w-320 pt-16">

                            {/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
                                <FuseAnimate delay={600}>
                                    <Typography className="px-16 pb-8 text-18 font-300">
                                        What are your top devices?
                                    </Typography>
                                </FuseAnimate>

                                <div className="widget w-full p-16">
                                    <Widget7 data={widgets.widget7}/>
                                </div>
                            </div> */}

                            {/* <div className="mb-32 w-full sm:w-1/2 md:w-full">

                                <FuseAnimate delay={600}>
                                    <div className="px-16 pb-8 text-18 font-300">
                                        How are your sales?
                                    </div>
                                </FuseAnimate>

                                <div className="widget w-full p-16">
                                    <Widget8 data={widgets.widget8}/>
                                </div>
                            </div> */}

                            {/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
                                <FuseAnimate delay={600}>
                                    <Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
                                        What are your top campaigns sectors?
                                    </Typography>
                                </FuseAnimate>
                                <div className="widget w-full p-16">
                                    <Widget9 data={campaignData}/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </FuseAnimate>
            </div>
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getWidgets: Actions.getWidgets
    }, dispatch);
}

function mapStateToProps({analyticsDashboardApp})
{
    return {
        widgets: analyticsDashboardApp.widgets.data,
        generalManagerData: analyticsDashboardApp.widgets.data,
        seniorManagerData: analyticsDashboardApp.widgets.data,
        adminData:analyticsDashboardApp.widgets.adminData,
        campaignData:analyticsDashboardApp.widgets.campaignData,
        sellerData:analyticsDashboardApp.widgets.sellerData
    }
}

export default withReducer('analyticsDashboardApp', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(AnalyticsDashboardApp)));
