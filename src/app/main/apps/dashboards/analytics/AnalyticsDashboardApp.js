import React, {PureComponent} from 'react';
import {Typography,Select} from '@material-ui/core';
import axios from 'axios';
import classNames from 'classnames';
import {FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import Slider from "react-slick";
import { Doughnut } from 'react-chartjs-2';
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import Widget1 from './widgets/Widget1';
import App from './widgets/Checking'
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Carousel from './widgets/Carousel';
import Widget9 from './widgets/Widget9';
import AdminComponent from './widgets/AdminComponent'
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import DurationComponent from './widgets/DurationComponent'
import GeneralManager from './widgets/generalManager';
import SeniorManager from './widgets/seniorManagers';
import TeamLeader from './widgets/TeamLeaders';
import Manager from './widgets/managers';


class AnalyticsDashboardApp extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      isClicked:false,
      selectedUnit:null,
      isDuration:false,
      currentState:'units',
      listClass:null,
      showDailyCalendar:null,
      fromDate:null,
      toDate:null,
      showWeeklyCalendar:null,
      defaultClass:'buttonDefault',
      btnsArray:[{id:0,name:'Units'}],
      duration:[{id:0,unit:'Daily'},{id:1,unit:'Weekly'}],
      data:[{id:0,unit:'Units'},{id:1,unit:'Business'},{id:2,unit:'Consumer'},{id:3,unit:'Integrated Technology'},{id:4,unit:'Human Resources'}]
    }
  }

  handleTabs=(btn)=>{
  //console.log(btn,'btn')
  this.setState({defaultClass:btn.id});
  if(btn.name == 'Units'){
      this.setState({currentState:'units'});
    if(this.state.isDuration==true){
      this.setState({isDuration:false,isClicked:true})
    }
    else if(this.state.isClicked == true){
    //  console.log(this.state.isDuration)
      this.setState({isClicked:false})
    }else{
      this.setState({isClicked:!this.state.isClicked})
    }
  }
  else{
      this.setState({currentState:'duration'});
    if(this.state.isClicked==true){
      this.setState({isClicked:false,isDuration:true})
    }
    else if(this.state.isDuration == true){
      console.log(this.state.isDuration)
      this.setState({isDuration:false})
    }else{
      this.setState({isDuration:!this.state.isDuration})
    }
  }


  }

  selectDate=(e)=>{
    this.props.getData(e.target.value)
    console.log(e.target.value,'date')
  }

  selectWeeklyDate=(e)=>{
    this.setState({fromDate:e.target.value})
    if(e.target.value && this.state.toDate){
      this.props.getWeekly(e.target.value,this.state.toDate)

    }
  }

  selectWeeklyDate1=(e)=>{
    this.setState({toDate:e.target.value})
    if(e.target.value && this.state.fromDate){
      this.props.getWeekly(e.target.value,this.state.fromDate)
    }
  }

selectUnit=(e,unit,index)=>{
   console.log(e.target.innerHTML,'unit')
   if(e.target.innerHTML=='Daily'){
     this.setState({showDailyCalendar:true,showWeeklyCalendar:false})
   }
   else{
       this.setState({showWeeklyCalendar:true,showDailyCalendar:false})
   }
  // console.log(index,'index')
  if(unit.id == index){
    this.setState({listClass:unit.id});
  }
  else{
     this.setState({listClass:'buttonDefault'});
  }
  //console.log(e.target.innerHTML)
  this.setState({selectedUnit:e.target.innerHTML})
}

    componentDidMount()  {
        this.props.getWidgets();
        //axios.get("/v1.0/meetings/staff/staffId123?fromDate=02/Jul/2019&toDate=27/Jul/2019").then(res => console.log(res,'res'))
    }

    handleSelect=(event)=>{
      this.setState({selectedUnit:event.target.value})
      //console.log(event.target.value,'event')
    }
    render()
    {

      const settings = {
        dots: true,
        infinite:false,
        arrows:true,
        speed: 500,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1
      };
        const {widgets,adminData,campaignData,sellerData,newData} = this.props;
        const { selectedUnit } = this.state;
        console.log(this.state.selectedUnit,'general')
        let { generalManagerData, seniorManagerData} = this.props;
        let generalData = generalManagerData && generalManagerData.gmData && generalManagerData.gmData.gData;
        let seniorData = seniorManagerData && seniorManagerData.smData && seniorManagerData.smData.sData;
        let managerData = generalManagerData && generalManagerData.mData && generalManagerData.mData.MData;
        let teamData = generalManagerData && generalManagerData.tlData && generalManagerData.tlData.tData

        //console.log(teamData && teamData.length,'len')


        if(selectedUnit == 'Business'){
           generalData=[
             {
              StaffMeeting:{
               type:'doughnut',
               staffId:'General Manager1',
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
                 data:[10,20,5,30,15,2,8,25,0],
                 backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
                 hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
               }]
             }
             },
             {
              StaffMeeting:{
             type:'doughnut',
             staffId:'General Manager1',
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
         },
             {
              StaffMeeting:{
           type:'doughnut',
           staffId:'General Manager1',
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
             data:[40,20,15,10,55,25,8,50,0],
             backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
             hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
           }]
         }
       }
     ];
        }
        if(selectedUnit  == 'Business'){
          console.log("inide",seniorData);
          seniorData=[
            {
              StaffMeeting:{
                staffId:'Senior Manager',
                options: {
                    responsive         : true,
                    maintainAspectRatio: false,
                    legend             : {
                        display: false
                    },
                    tooltips           : {
                        mode: 'label'
                    },
                    scales             : {
                        xAxes: [
                            {
                                stacked           : true,
                                display           : true,
                                gridLines         : {
                                    display: false
                                },
                                labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                categoryPercentage: 1
                            }
                        ],
                        yAxes: [
                            {
                                stacked  : true,
                                type     : 'linear',
                                display  : true,
                                position : 'left',
                                gridLines: {
                                    display: false
                                },
                                labels   : {
                                    show: true
                                }
                            }
                        ]
                    }
                },
                labels:['Working Hours','Meeting Hours'],
                 meetingHours:5,
                 workingHours:3,
                 datasets: [
                    {
                        type                : 'bar',
                        label               : 'Hours',
                        data                : [37, 32,22,12,18],
                        backgroundColor     : '#42BFF7',
                        hoverBackgroundColor: '#87cdf7'
                    },
                    {
                        type                : 'bar',
                        label               : 'Hours',
                        data                : [9, 12,10,5,10],
                        backgroundColor     : '#c6ecfd',
                        hoverBackgroundColor: '#d7effd'
                    }
                ]
            },
      },
            {
              StaffMeeting:{
                staffId:'Senior Manager',
                options: {
                    responsive         : true,
                    maintainAspectRatio: false,
                    legend             : {
                        display: false
                    },
                    tooltips           : {
                        mode: 'label'
                    },
                    scales             : {
                        xAxes: [
                            {
                                stacked           : true,
                                display           : true,
                                gridLines         : {
                                    display: false
                                },
                                labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                categoryPercentage: 1
                            }
                        ],
                        yAxes: [
                            {
                                stacked  : true,
                                type     : 'linear',
                                display  : true,
                                position : 'left',
                                gridLines: {
                                    display: false
                                },
                                labels   : {
                                    show: true
                                }
                            }
                        ]
                    }
                },
                labels:['Working Hours','Meeting Hours'],
                 meetingHours:5,
                 workingHours:3,
                 datasets: [
                    {
                        type                : 'bar',
                        label               : 'Hours',
                        data                : [37, 32],
                        backgroundColor     : '#42BFF7',
                        hoverBackgroundColor: '#87cdf7'
                    },
                    {
                        type                : 'bar',
                        label               : 'Hours',
                        data                : [9, 12],
                        backgroundColor     : '#c6ecfd',
                        hoverBackgroundColor: '#d7effd'
                    }
                ]
            },
     },
            {
              StaffMeeting:{
                staffId:'Senior Manager',
                options: {
                    responsive         : true,
                    maintainAspectRatio: false,
                    legend             : {
                        display: false
                    },
                    tooltips           : {
                        mode: 'label'
                    },
                    scales             : {
                        xAxes: [
                            {
                                stacked           : true,
                                display           : true,
                                gridLines         : {
                                    display: false
                                },
                                labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                categoryPercentage: 1
                            }
                        ],
                        yAxes: [
                            {
                                stacked  : true,
                                type     : 'linear',
                                display  : true,
                                position : 'left',
                                gridLines: {
                                    display: false
                                },
                                labels   : {
                                    show: true
                                }
                            }
                        ]
                    }
                },
                labels:['Working Hours','Meeting Hours'],
                 meetingHours:5,
                 workingHours:3,
                 datasets: [
                    {
                        type                : 'bar',
                        label               : 'Hours',
                        data                : [37, 32,20,12,18,5],
                        backgroundColor     : '#42BFF7',
                        hoverBackgroundColor: '#87cdf7'
                    },
                    {
                        type                : 'bar',
                        label               : 'Hours',
                        data                : [9, 12,10,3,7,0],
                        backgroundColor     : '#c6ecfd',
                        hoverBackgroundColor: '#d7effd'
                    }
                ]
            },
     
     },
   ];
        }

         if(selectedUnit == 'Business'){
           managerData=[
             {
               data:{
               type:'line',
               title:'Manager1',
               options: {
                 legend             : {
                   display: false
                       },
                         maintainAspectRatio: false,
                         scales             : {
                             xAxes: [
                                 {
                                     display: false
                                 }
                             ],
                             yAxes: [
                                 {
                                     display: false
                                 }
                             ]
                         }
                     },
               legend  : {
                   display: false
               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[{
                 label          : 'Created',
                 data           : [10, 8, 5, 6, 7, 8, 5],
                 fill           : true,
                 backgroundColor: '#42BFF7',
                 pointRadius    : 0,
                 pointHitRadius : 20,
                 borderWidth    : 0
               }]
             }},
             {
               data:{
               type:'line',
               title:'Manager1',
               options: {
                 legend             : {
                   display: false
                       },
                         maintainAspectRatio: false,
                         scales             : {
                             xAxes: [
                                 {
                                     display: false
                                 }
                             ],
                             yAxes: [
                                 {
                                     display: false
                                 }
                             ]
                         }
                     },
               legend  : {
                   display: false
               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[{
                 label          : 'Created',
                 data           : [2, 8, 5, 6, 7, 8, 10],
                 fill           : true,
                 backgroundColor: '#42BFF7',
                 pointRadius    : 0,
                 pointHitRadius : 20,
                 borderWidth    : 0
               }]
             }},
             {
               data:{
               type:'line',
               title:'Manager1',
               options: {
                 legend             : {
                   display: false
                       },
                         maintainAspectRatio: false,
                         scales             : {
                             xAxes: [
                                 {
                                     display: false
                                 }
                             ],
                             yAxes: [
                                 {
                                     display: false
                                 }
                             ]
                         }
                     },
               legend  : {
                   display: false
               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[{
                 label          : 'Created',
                 data           : [0, 8, 5, 10, 7, 8, 5],
                 fill           : true,
                 backgroundColor: '#42BFF7',
                 pointRadius    : 0,
                 pointHitRadius : 20,
                 borderWidth    : 0
               }]
             }}
           ];
         }

         if(selectedUnit == 'Business'){
           teamData = [
             {
               data:{
                   title:'Team Leader1',
                 legend             : {
                     display: false
                 },
                 options: {
                                     legend             : {
                                         display: false
                                     },
                                     maintainAspectRatio: false,
                                 },
                 labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
                 datasets:[ {
           label: 'My First dataset',
           backgroundColor: '#42BFF7',
           data: [50,20, 80, 81, 56, 55, 40]
         }]
               }
             },
             {
               data:{
                   title:'Team Leader1',
                 legend             : {
                     display: false
                 },
                 options: {
                                     legend             : {
                                         display: false
                                     },
                                     maintainAspectRatio: false,
                                 },
                 labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
                 datasets:[ {
           label: 'My First dataset',
           backgroundColor: '#42BFF7',
           data: [10,20, 80, 81, 56, 55, 50]
         }]
               }
             },
             {
               data:{
                   title:'Team Leader1',
                 legend             : {
                     display: false
                 },
                 options: {
                                     legend             : {
                                         display: false
                                     },
                                     maintainAspectRatio: false,
                                 },
                 labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
                 datasets:[ {
           label: 'My First dataset',
           backgroundColor: '#42BFF7',
           data: [0,20, 80, 81, 56, 55, 30]
         }]
               }
             }
           ]
         }

      //Counsumer
      if(selectedUnit == 'Consumer'){
         generalData=[
           {
             data:{
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
               data:[0,20,5,30,15,2,8,25,0],
               backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
               hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
             }]
           }
           },
           {
         data:{
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
             data:[30,20,15,10,55,10,8,0,50],
             backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
             hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
           }]
         }
       },
           {
       data:{
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
           data:[40,20,15,10,5,25,8,50,0],
           backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
           hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
         }]
       }
     }
   ];
      }
      if(selectedUnit  == 'Consumer'){
        console.log("inide",seniorData);
        seniorData=[
          {
            StaffMeeting:{
              staffId:'sid2',
              options: {
                  responsive         : true,
                  maintainAspectRatio: false,
                  legend             : {
                      display: false
                  },
                  tooltips           : {
                      mode: 'label'
                  },
                  scales             : {
                      xAxes: [
                          {
                              stacked           : true,
                              display           : true,
                              gridLines         : {
                                  display: false
                              },
                              labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                              categoryPercentage: 1
                          }
                      ],
                      yAxes: [
                          {
                              stacked  : true,
                              type     : 'linear',
                              display  : true,
                              position : 'left',
                              gridLines: {
                                  display: false
                              },
                              labels   : {
                                  show: true
                              }
                          }
                      ]
                  }
              },
              labels:['Working Hours','Meeting Hours'],
               meetingHours:5,
               workingHours:3,
               datasets: [
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [37, 32],
                      backgroundColor     : '#42BFF7',
                      hoverBackgroundColor: '#87cdf7'
                  },
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [9, 12],
                      backgroundColor     : '#c6ecfd',
                      hoverBackgroundColor: '#d7effd'
                  }
              ]
          },
          
    },
          {
            StaffMeeting:{
              staffId:'Senior Manager',
              options: {
                  responsive         : true,
                  maintainAspectRatio: false,
                  legend             : {
                      display: false
                  },
                  tooltips           : {
                      mode: 'label'
                  },
                  scales             : {
                      xAxes: [
                          {
                              stacked           : true,
                              display           : true,
                              gridLines         : {
                                  display: false
                              },
                              labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                              categoryPercentage: 1
                          }
                      ],
                      yAxes: [
                          {
                              stacked  : true,
                              type     : 'linear',
                              display  : true,
                              position : 'left',
                              gridLines: {
                                  display: false
                              },
                              labels   : {
                                  show: true
                              }
                          }
                      ]
                  }
              },
              labels:['Working Hours','Meeting Hours'],
               meetingHours:5,
               workingHours:3,
               datasets: [
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [37, 32],
                      backgroundColor     : '#42BFF7',
                      hoverBackgroundColor: '#87cdf7'
                  },
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [9, 12],
                      backgroundColor     : '#c6ecfd',
                      hoverBackgroundColor: '#d7effd'
                  }
              ]
          },
   },
   {
    StaffMeeting:{
      staffId:'Senior Manager',
      options: {
          responsive         : true,
          maintainAspectRatio: false,
          legend             : {
              display: false
          },
          tooltips           : {
              mode: 'label'
          },
          scales             : {
              xAxes: [
                  {
                      stacked           : true,
                      display           : true,
                      gridLines         : {
                          display: false
                      },
                      labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                      categoryPercentage: 1
                  }
              ],
              yAxes: [
                  {
                      stacked  : true,
                      type     : 'linear',
                      display  : true,
                      position : 'left',
                      gridLines: {
                          display: false
                      },
                      labels   : {
                          show: true
                      }
                  }
              ]
          }
      },
      labels:['Working Hours','Meeting Hours'],
       meetingHours:5,
       workingHours:3,
       datasets: [
          {
              type                : 'bar',
              label               : 'Hours',
              data                : [37, 32],
              backgroundColor     : '#42BFF7',
              hoverBackgroundColor: '#87cdf7'
          },
          {
              type                : 'bar',
              label               : 'Hours',
              data                : [9, 12],
              backgroundColor     : '#c6ecfd',
              hoverBackgroundColor: '#d7effd'
          }
      ]
  },
},
 ];
      }

       if(selectedUnit == 'Consumer'){
         managerData=[
           {
             data:{
             type:'line',
             title:'Manager1',
             options: {
               legend             : {
                 display: false
                     },
                       maintainAspectRatio: false,
                       scales             : {
                           xAxes: [
                               {
                                   display: false
                               }
                           ],
                           yAxes: [
                               {
                                   display: false
                               }
                           ]
                       }
                   },
             legend  : {
                 display: false
             },
             labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
             datasets:[{
               label          : 'Created',
               data           : [20, 8, 5, 6, 7, 18, 5],
               fill           : true,
               backgroundColor: '#42BFF7',
               pointRadius    : 0,
               pointHitRadius : 20,
               borderWidth    : 0
             }]
           }},
           {
             data:{
             type:'line',
             title:'Manager1',
             options: {
               legend             : {
                 display: false
                     },
                       maintainAspectRatio: false,
                       scales             : {
                           xAxes: [
                               {
                                   display: false
                               }
                           ],
                           yAxes: [
                               {
                                   display: false
                               }
                           ]
                       }
                   },
             legend  : {
                 display: false
             },
             labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
             datasets:[{
               label          : 'Created',
               data           : [12, 8, 5, 16, 7, 8, 10],
               fill           : true,
               backgroundColor: '#42BFF7',
               pointRadius    : 0,
               pointHitRadius : 20,
               borderWidth    : 0
             }]
           }},
           {
             data:{
             type:'line',
             title:'Manager1',
             options: {
               legend             : {
                 display: false
                     },
                       maintainAspectRatio: false,
                       scales             : {
                           xAxes: [
                               {
                                   display: false
                               }
                           ],
                           yAxes: [
                               {
                                   display: false
                               }
                           ]
                       }
                   },
             legend  : {
                 display: false
             },
             labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
             datasets:[{
               label          : 'Created',
               data           : [0, 18, 15, 10, 7, 8, 5],
               fill           : true,
               backgroundColor: '#42BFF7',
               pointRadius    : 0,
               pointHitRadius : 20,
               borderWidth    : 0
             }]
           }}
         ];
       }

       if(selectedUnit == 'Consumer'){
         teamData = [
           {
             data:{
                 title:'Team Leader1',
               legend             : {
                   display: false
               },
               options: {
                                   legend             : {
                                       display: false
                                   },
                                   maintainAspectRatio: false,
                               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[ {
         label: 'My First dataset',
         backgroundColor: '#42BFF7',
         data: [0,20, 80, 81, 56, 55, 40]
       }]
             }
           },
           {
             data:{
                 title:'Team Leader1',
               legend             : {
                   display: false
               },
               options: {
                                   legend             : {
                                       display: false
                                   },
                                   maintainAspectRatio: false,
                               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[ {
         label: 'My First dataset',
         backgroundColor: '#42BFF7',
         data: [10,20, 80, 81, 56, 55, 0]
       }]
             }
           },
           {
             data:{
                 title:'Team Leader1',
               legend             : {
                   display: false
               },
               options: {
                                   legend             : {
                                       display: false
                                   },
                                   maintainAspectRatio: false,
                               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[ {
         label: 'My First dataset',
         backgroundColor: '#42BFF7',
         data: [0,20, 80, 81, 0, 55, 30]
       }]
             }
           }
         ]
       }

       //Integrated TEchnology

       if(selectedUnit == 'Integrated Technology'){
         generalData=[
           {
             data:{
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
               data:[10,20,5,30,15,2,8,25,15],
               backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
               hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
             }]
           }
           },
           {
         data:{
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
             data:[30,20,15,10,20,5,8,0,50],
             backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
             hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
           }]
         }
       },
           {
       data:{
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
           data:[0,20,15,10,5,25,8,50,10],
           backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
           hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
         }]
       }
     }
   ];
       }

       if(selectedUnit == 'Integrated Technology'){
         seniorData=[
          {
            StaffMeeting:{
              staffId:'Senior Manager',
              options: {
                  responsive         : true,
                  maintainAspectRatio: false,
                  legend             : {
                      display: false
                  },
                  tooltips           : {
                      mode: 'label'
                  },
                  scales             : {
                      xAxes: [
                          {
                              stacked           : true,
                              display           : true,
                              gridLines         : {
                                  display: false
                              },
                              labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                              categoryPercentage: 1
                          }
                      ],
                      yAxes: [
                          {
                              stacked  : true,
                              type     : 'linear',
                              display  : true,
                              position : 'left',
                              gridLines: {
                                  display: false
                              },
                              labels   : {
                                  show: true
                              }
                          }
                      ]
                  }
              },
              labels:['Working Hours','Meeting Hours'],
               meetingHours:5,
               workingHours:3,
               datasets: [
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [37, 32],
                      backgroundColor     : '#42BFF7',
                      hoverBackgroundColor: '#87cdf7'
                  },
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [9, 12],
                      backgroundColor     : '#c6ecfd',
                      hoverBackgroundColor: '#d7effd'
                  }
              ]
          },
   },
   {
    StaffMeeting:{
      staffId:'Senior Manager',
      options: {
          responsive         : true,
          maintainAspectRatio: false,
          legend             : {
              display: false
          },
          tooltips           : {
              mode: 'label'
          },
          scales             : {
              xAxes: [
                  {
                      stacked           : true,
                      display           : true,
                      gridLines         : {
                          display: false
                      },
                      labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                      categoryPercentage: 1
                  }
              ],
              yAxes: [
                  {
                      stacked  : true,
                      type     : 'linear',
                      display  : true,
                      position : 'left',
                      gridLines: {
                          display: false
                      },
                      labels   : {
                          show: true
                      }
                  }
              ]
          }
      },
      labels:['Working Hours','Meeting Hours'],
       meetingHours:5,
       workingHours:3,
       datasets: [
          {
              type                : 'bar',
              label               : 'Hours',
              data                : [37, 32],
              backgroundColor     : '#42BFF7',
              hoverBackgroundColor: '#87cdf7'
          },
          {
              type                : 'bar',
              label               : 'Hours',
              data                : [9, 12],
              backgroundColor     : '#c6ecfd',
              hoverBackgroundColor: '#d7effd'
          }
      ]
  },
},
{
  StaffMeeting:{
    staffId:'Senior Manager',
    options: {
        responsive         : true,
        maintainAspectRatio: false,
        legend             : {
            display: false
        },
        tooltips           : {
            mode: 'label'
        },
        scales             : {
            xAxes: [
                {
                    stacked           : true,
                    display           : true,
                    gridLines         : {
                        display: false
                    },
                    labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    categoryPercentage: 1
                }
            ],
            yAxes: [
                {
                    stacked  : true,
                    type     : 'linear',
                    display  : true,
                    position : 'left',
                    gridLines: {
                        display: false
                    },
                    labels   : {
                        show: true
                    }
                }
            ]
        }
    },
    labels:['Working Hours','Meeting Hours'],
     meetingHours:5,
     workingHours:3,
     datasets: [
        {
            type                : 'bar',
            label               : 'Hours',
            data                : [37, 32],
            backgroundColor     : '#42BFF7',
            hoverBackgroundColor: '#87cdf7'
        },
        {
            type                : 'bar',
            label               : 'Hours',
            data                : [9, 12],
            backgroundColor     : '#c6ecfd',
            hoverBackgroundColor: '#d7effd'
        }
    ]
},
},
  ];
       }

       if(selectedUnit == 'Integrated Technology'){
         managerData=[
           {
             data:{
             type:'line',
             title:'Manager1',
             options: {
               legend             : {
                 display: false
                     },
                       maintainAspectRatio: false,
                       scales             : {
                           xAxes: [
                               {
                                   display: false
                               }
                           ],
                           yAxes: [
                               {
                                   display: false
                               }
                           ]
                       }
                   },
             legend  : {
                 display: false
             },
             labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
             datasets:[{
               label          : 'Created',
               data           : [20, 8, 0, 6, 7, 18, 5],
               fill           : true,
               backgroundColor: '#42BFF7',
               pointRadius    : 0,
               pointHitRadius : 20,
               borderWidth    : 0
             }]
           }},
           {
             data:{
             type:'line',
             title:'Manager1',
             options: {
               legend             : {
                 display: false
                     },
                       maintainAspectRatio: false,
                       scales             : {
                           xAxes: [
                               {
                                   display: false
                               }
                           ],
                           yAxes: [
                               {
                                   display: false
                               }
                           ]
                       }
                   },
             legend  : {
                 display: false
             },
             labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
             datasets:[{
               label          : 'Created',
               data           : [12, 8, 5, 0, 7, 8, 10],
               fill           : true,
               backgroundColor: '#42BFF7',
               pointRadius    : 0,
               pointHitRadius : 20,
               borderWidth    : 0
             }]
           }},
           {
             data:{
             type:'line',
             title:'Manager1',
             options: {
               legend             : {
                 display: false
                     },
                       maintainAspectRatio: false,
                       scales             : {
                           xAxes: [
                               {
                                   display: false
                               }
                           ],
                           yAxes: [
                               {
                                   display: false
                               }
                           ]
                       }
                   },
             legend  : {
                 display: false
             },
             labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
             datasets:[{
               label          : 'Created',
               data           : [20, 18, 15, 10, 7, 8, 5],
               fill           : true,
               backgroundColor: '#42BFF7',
               pointRadius    : 0,
               pointHitRadius : 20,
               borderWidth    : 0
             }]
           }}
         ];
       }


       if(selectedUnit == 'Integrated Technology'){
         teamData = [
           {
             data:{
                 title:'Team Leader1',
               legend             : {
                   display: false
               },
               options: {
                                   legend             : {
                                       display: false
                                   },
                                   maintainAspectRatio: false,
                               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[ {
         label: 'My First dataset',
         backgroundColor: '#42BFF7',
         data: [50,20, 80, 41, 56, 55, 40]
       }]
             }
           },
           {
             data:{
                 title:'Team Leader1',
               legend             : {
                   display: false
               },
               options: {
                                   legend             : {
                                       display: false
                                   },
                                   maintainAspectRatio: false,
                               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[ {
         label: 'My First dataset',
         backgroundColor: '#42BFF7',
         data: [10,20, 80, 11, 56, 55, 50]
       }]
             }
           },
           {
             data:{
                 title:'Team Leader1',
               legend             : {
                   display: false
               },
               options: {
                                   legend             : {
                                       display: false
                                   },
                                   maintainAspectRatio: false,
                               },
               labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
               datasets:[ {
         label: 'My First dataset',
         backgroundColor: '#42BFF7',
         data: [0,20, 80, 21, 56, 55, 30]
       }]
             }
           }
         ]
       }
        //console.log(seniorData,'senior')


        //HUmarn Resources

        if(selectedUnit == 'Human Resources'){
          generalData=[
            {
              data:{
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
                data:[10,20,5,30,15,2,18,25,15],
                backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
                hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
              }]
            }
            },
            {
          data:{
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
              data:[30,20,15,10,20,5,8,30,50],
              backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
              hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
            }]
          }
        },
            {
        data:{
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
            data:[0,20,15,10,5,25,18,50,10],
            backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
            hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
          }]
        }
      }
    ];
        }

        if(selectedUnit == 'Human Resources'){
          seniorData=[
            {
              StaffMeeting:{
                staffId:'Senior Manager',
                options: {
                    responsive         : true,
                    maintainAspectRatio: false,
                    legend             : {
                        display: false
                    },
                    tooltips           : {
                        mode: 'label'
                    },
                    scales             : {
                        xAxes: [
                            {
                                stacked           : true,
                                display           : true,
                                gridLines         : {
                                    display: false
                                },
                                labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                categoryPercentage: 1
                            }
                        ],
                        yAxes: [
                            {
                                stacked  : true,
                                type     : 'linear',
                                display  : true,
                                position : 'left',
                                gridLines: {
                                    display: false
                                },
                                labels   : {
                                    show: true
                                }
                            }
                        ]
                    }
                },
                labels:['Working Hours','Meeting Hours'],
                 meetingHours:5,
                 workingHours:3,
                 datasets: [
                    {
                        type                : 'bar',
                        label               : 'Hours',
                        data                : [37, 32],
                        backgroundColor     : '#42BFF7',
                        hoverBackgroundColor: '#87cdf7'
                    },
                    {
                        type                : 'bar',
                        label               : 'Hours',
                        data                : [9, 12],
                        backgroundColor     : '#c6ecfd',
                        hoverBackgroundColor: '#d7effd'
                    }
                ]
            },
     },
     {
      StaffMeeting:{
        staffId:'Senior Manager',
        options: {
            responsive         : true,
            maintainAspectRatio: false,
            legend             : {
                display: false
            },
            tooltips           : {
                mode: 'label'
            },
            scales             : {
                xAxes: [
                    {
                        stacked           : true,
                        display           : true,
                        gridLines         : {
                            display: false
                        },
                        labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        categoryPercentage: 1
                    }
                ],
                yAxes: [
                    {
                        stacked  : true,
                        type     : 'linear',
                        display  : true,
                        position : 'left',
                        gridLines: {
                            display: false
                        },
                        labels   : {
                            show: true
                        }
                    }
                ]
            }
        },
        labels:['Working Hours','Meeting Hours'],
         meetingHours:5,
         workingHours:3,
         datasets: [
            {
                type                : 'bar',
                label               : 'Hours',
                data                : [37, 32],
                backgroundColor     : '#42BFF7',
                hoverBackgroundColor: '#87cdf7'
            },
            {
                type                : 'bar',
                label               : 'Hours',
                data                : [9, 12],
                backgroundColor     : '#c6ecfd',
                hoverBackgroundColor: '#d7effd'
            }
        ]
    },
},
{
  StaffMeeting:{
    staffId:'Senior Manager',
    options: {
        responsive         : true,
        maintainAspectRatio: false,
        legend             : {
            display: false
        },
        tooltips           : {
            mode: 'label'
        },
        scales             : {
            xAxes: [
                {
                    stacked           : true,
                    display           : true,
                    gridLines         : {
                        display: false
                    },
                    labels            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    categoryPercentage: 1
                }
            ],
            yAxes: [
                {
                    stacked  : true,
                    type     : 'linear',
                    display  : true,
                    position : 'left',
                    gridLines: {
                        display: false
                    },
                    labels   : {
                        show: true
                    }
                }
            ]
        }
    },
    labels:['Working Hours','Meeting Hours'],
     meetingHours:5,
     workingHours:3,
     datasets: [
        {
            type                : 'bar',
            label               : 'Hours',
            data                : [37, 32],
            backgroundColor     : '#42BFF7',
            hoverBackgroundColor: '#87cdf7'
        },
        {
            type                : 'bar',
            label               : 'Hours',
            data                : [9, 12],
            backgroundColor     : '#c6ecfd',
            hoverBackgroundColor: '#d7effd'
        }
    ]
},
},
   ];
        }

        if(selectedUnit == 'Human Resources'){
          managerData=[
            {
              data:{
              type:'line',
              title:'Manager1',
              options: {
                legend             : {
                  display: false
                      },
                        maintainAspectRatio: false,
                        scales             : {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    },
              legend  : {
                  display: false
              },
              labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
              datasets:[{
                label          : 'Created',
                data           : [20, 8, 10, 6, 7, 18, 5],
                fill           : true,
                backgroundColor: '#42BFF7',
                pointRadius    : 0,
                pointHitRadius : 20,
                borderWidth    : 0
              }]
            }},
            {
              data:{
              type:'line',
              title:'Manager1',
              options: {
                legend             : {
                  display: false
                      },
                        maintainAspectRatio: false,
                        scales             : {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    },
              legend  : {
                  display: false
              },
              labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
              datasets:[{
                label          : 'Created',
                data           : [12, 8, 5, 0, 7, 2, 10],
                fill           : true,
                backgroundColor: '#42BFF7',
                pointRadius    : 0,
                pointHitRadius : 20,
                borderWidth    : 0
              }]
            }},
            {
              data:{
              type:'line',
              title:'Manager1',
              options: {
                legend             : {
                  display: false
                      },
                        maintainAspectRatio: false,
                        scales             : {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    },
              legend  : {
                  display: false
              },
              labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
              datasets:[{
                label          : 'Created',
                data           : [30, 18, 15, 10, 7, 8, 5],
                fill           : true,
                backgroundColor: '#42BFF7',
                pointRadius    : 0,
                pointHitRadius : 20,
                borderWidth    : 0
              }]
            }}
          ];
        }


        if(selectedUnit == 'Human Resources'){
          teamData = [
            {
              data:{
                  title:'Team Leader1',
                legend             : {
                    display: false
                },
                options: {
                                    legend             : {
                                        display: false
                                    },
                                    maintainAspectRatio: false,
                                },
                labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
                datasets:[ {
          label: 'My First dataset',
          backgroundColor: '#42BFF7',
          data: [50,20, 30, 41, 56, 55, 40]
        }]
              }
            },
            {
              data:{
                  title:'Team Leader1',
                legend             : {
                    display: false
                },
                options: {
                                    legend             : {
                                        display: false
                                    },
                                    maintainAspectRatio: false,
                                },
                labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
                datasets:[ {
          label: 'My First dataset',
          backgroundColor: '#42BFF7',
          data: [10,20, 50, 11, 56, 55, 50]
        }]
              }
            },
            {
              data:{
                  title:'Team Leader1',
                legend             : {
                    display: false
                },
                options: {
                                    legend             : {
                                        display: false
                                    },
                                    maintainAspectRatio: false,
                                },
                labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL'],
                datasets:[ {
          label: 'My First dataset',
          backgroundColor: '#42BFF7',
          data: [0,20, 10, 21, 56, 55, 30]
        }]
              }
            }
          ]
        }

        if ( !widgets )
        {
            return null;
        }

        return (
            <div className="w-full">

                <Widget1 data={widgets.widget1}/>

                <FuseAnimate animation="transition.slideUpIn" delay={200}>

                    <div className="flex flex-col md:flex-row sm:p-8 container">

                        <div className="flex flex-1 flex-col w-full">

                        <FuseAnimate delay={600}>
                        <div className="flex items-center justify-between w-full">
                            <Typography className="p-16 pb-8 text-18 font-300">
                                General Manager
                            </Typography>
                            <div className="select">
                          
                        {
                          <select onChange={(event)=>this.handleSelect(event)}>{this.state.data.map((unit,index)=> <option value={unit.unit}>{unit.unit}</option>
                          )}
                          </select> 
                        }
                       
                        </div>
                        </div>
                        </FuseAnimate>
                        

                        <div>
                        {
                          this.state.isDuration ? this.state.duration.map((duration,index)=>{
                            return(

                              <span className={classNames(duration.id === this.state.listClass ? 'activeDefault':'buttonDefault') }  onClick={(e)=>this.selectUnit(e,duration,index)}key={index}>{duration.unit}</span>

                            )
                          }) : ''
                        }
                        </div>
                        {
                          this.state.showDailyCalendar ?
                          <>
                          <input type="date" className="w-1/4 p-12 my-20" onChange={(e)=>this.selectDate(e)}/>
                          </>:""
                        }
                        {
                          this.state.showWeeklyCalendar ?
                          <div>

                          <input type="date" className="w-1/4 p-12 my-20" onChange={(e)=>this.selectWeeklyDate(e)}/>

                          <input type="date" className="ml-8 w-1/4 p-12 my-20" onChange={(e)=>this.selectWeeklyDate1(e)}/>
                          </div>:""
                        }
                        
                            
                         <Carousel type="generalManager" data={generalData && generalData}/>

                            <FuseAnimate delay={600}>
                                <Typography className="p-16 pb-8 text-18 font-300">
                                    Senior Manager
                                </Typography>
                            </FuseAnimate>

                            <Carousel  type="seniorManager" data ={seniorData && seniorData}/>



                                <FuseAnimate delay={600}>
                                    <Typography className="p-16 pb-8 text-18 font-300">
                                        Manager
                                    </Typography>
                                </FuseAnimate>

                                <Carousel  type="Manager" data ={managerData && managerData}/>

                                    <FuseAnimate delay={600}>
                                        <Typography className="p-16 pb-8 text-18 font-300">
                                        Team Leader
                                        </Typography>
                                    </FuseAnimate>

                                  <Carousel  type="TeamLeader" data ={teamData && teamData}/>

                           
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
        getWidgets: Actions.getWidgets,
        getData: Actions.getData,
        getWeekly: Actions.getWeekly
    }, dispatch);
}

function mapStateToProps({analyticsDashboardApp})
{
  //console.log(analyticsDashboardApp,'analyticsDashboardApp')
    return {
        widgets: analyticsDashboardApp.widgets.data,
        newData: analyticsDashboardApp.widgets.newData,
        generalManagerData: analyticsDashboardApp.widgets.data,
        seniorManagerData: analyticsDashboardApp.widgets.data,
        adminData:analyticsDashboardApp.widgets.adminData,
        campaignData:analyticsDashboardApp.widgets.campaignData,
        sellerData:analyticsDashboardApp.widgets.sellerData
    }
}

export default withReducer('analyticsDashboardApp', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(AnalyticsDashboardApp)));
