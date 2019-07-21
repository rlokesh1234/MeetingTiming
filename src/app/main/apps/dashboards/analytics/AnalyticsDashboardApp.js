import React, {PureComponent} from 'react';
import {Typography} from '@material-ui/core';
import classNames from 'classnames';
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
import Carousel from './widgets/Carousel.js';
import Widget9 from './widgets/Widget9';
import AdminComponent from './widgets/AdminComponent'
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
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
      listClass:null,
      defaultClass:'buttonDefault',
      btnsArray:[{id:0,name:'Units'},{id:1,name:'Duration'}],
      duration:[{id:0,unit:'Weekly'},{id:1,unit:'Monthly'},{id:2,unit:'Quarterly'},{id:3,unit:'Yearly'}],
      data:[{id:0,unit:'Business'},{id:1,unit:'Consumer'},{id:2,unit:'Integrated Technology'},{id:3,unit:'Human Resources'}]
    }
  }

  handleTabs=(btn)=>{
  console.log(btn,'btn')
  this.setState({defaultClass:btn.id});
  if(btn.name == 'Units'){
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

selectUnit=(e,unit,index)=>{
  // console.log(unit,'unit')
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

    componentDidMount()
    {
        this.props.getWidgets();
    }

    render()
    {
        const {widgets,adminData,campaignData,sellerData} = this.props;
        const { selectedUnit } = this.state;
        console.log(this.state.selectedUnit,'general')
        let { generalManagerData, seniorManagerData} = this.props;
        let generalData = generalManagerData && generalManagerData.gmData && generalManagerData.gmData.gData;
        let seniorData = seniorManagerData && seniorManagerData.smData && seniorManagerData.smData.sData;
        let managerData = generalManagerData && generalManagerData.mData && generalManagerData.mData.MData;
        let teamData = generalManagerData && generalManagerData.tlData && generalManagerData.tlData.tData


        if(selectedUnit == 'Business'){
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
                 data:[10,20,5,30,15,2,8,25,0],
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
               data:[40,20,15,10,55,25,8,0,50],
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
            'title'     : 'Senior Manager1',
            'ranges'    : {
                'D': 'Duration',
            },
            'mainChart' : {
                'D'     : {
                    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            type                : 'bar',
                            label               : 'Hours',
                            data                : [9, 12, 9, 12, 7, 8, 16],
                            backgroundColor     : '#42BFF7',
                            hoverBackgroundColor: '#87cdf7'
                        },
                        {
                            type                : 'bar',
                            label               : 'Hours',
                            data                : [37, 32, 39, 27, 18, 24, 20],
                            backgroundColor     : '#c6ecfd',
                            hoverBackgroundColor: '#d7effd'
                        }
                    ]
                },
                'options': {
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
                }
            },
      },
            {
      'title'     : 'Senior Manager1',
      'ranges'    : {
          'D': 'Duration',
      },
      'mainChart' : {
          'D'     : {
              labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [25, 12, 9, 12, 7, 8, 50],
                      backgroundColor     : '#42BFF7',
                      hoverBackgroundColor: '#87cdf7'
                  },
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [37, 50, 39, 27, 18, 24, 40],
                      backgroundColor     : '#c6ecfd',
                      hoverBackgroundColor: '#d7effd'
                  }
              ]
          },
          'options': {
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
          }
      },
     },
            {
     'title'     : 'Senior Manager1',
     'ranges'    : {
     'D': 'Duration',
     },
     'mainChart' : {
     'D'     : {
        labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type                : 'bar',
                label               : 'Hours',
                data                : [50, 12, 9, 12, 30, 8, 40],
                backgroundColor     : '#42BFF7',
                hoverBackgroundColor: '#87cdf7'
            },
            {
                type                : 'bar',
                label               : 'Hours',
                data                : [7, 50, 39, 27, 18, 24, 50],
                backgroundColor     : '#c6ecfd',
                hoverBackgroundColor: '#d7effd'
            }
        ]
     },
     'options': {
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
     }
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
          'title'     : 'Senior Manager1',
          'ranges'    : {
              'D': 'Duration',
          },
          'mainChart' : {
              'D'     : {
                  labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                      {
                          type                : 'bar',
                          label               : 'Hours',
                          data                : [9, 2, 29, 12, 27, 38, 16],
                          backgroundColor     : '#42BFF7',
                          hoverBackgroundColor: '#87cdf7'
                      },
                      {
                          type                : 'bar',
                          label               : 'Hours',
                          data                : [5, 0, 3, 5, 18, 24, 20],
                          backgroundColor     : '#c6ecfd',
                          hoverBackgroundColor: '#d7effd'
                      }
                  ]
              },
              'options': {
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
              }
          },
    },
          {
    'title'     : 'Senior Manager1',
    'ranges'    : {
        'D': 'Duration',
    },
    'mainChart' : {
        'D'     : {
            labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type                : 'bar',
                    label               : 'Hours',
                    data                : [25, 12, 9, 12, 7, 8, 50],
                    backgroundColor     : '#42BFF7',
                    hoverBackgroundColor: '#87cdf7'
                },
                {
                    type                : 'bar',
                    label               : 'Hours',
                    data                : [7, 0, 9, 7, 18, 4, 40],
                    backgroundColor     : '#c6ecfd',
                    hoverBackgroundColor: '#d7effd'
                }
            ]
        },
        'options': {
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
        }
    },
   },
          {
   'title'     : 'Senior Manager1',
   'ranges'    : {
   'D': 'Duration',
   },
   'mainChart' : {
   'D'     : {
      labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              type                : 'bar',
              label               : 'Hours',
              data                : [50, 12, 9, 37, 30, 28, 40],
              backgroundColor     : '#42BFF7',
              hoverBackgroundColor: '#87cdf7'
          },
          {
              type                : 'bar',
              label               : 'Hours',
              data                : [7, 5, 9, 27, 18, 24, 0],
              backgroundColor     : '#c6ecfd',
              hoverBackgroundColor: '#d7effd'
          }
      ]
   },
   'options': {
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
   }
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
           'title'     : 'Senior Manager1',
           'ranges'    : {
               'D': 'Duration',
           },
           'mainChart' : {
               'D'     : {
                   labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                   datasets: [
                       {
                           type                : 'bar',
                           label               : 'Hours',
                           data                : [9, 2, 29, 12, 27, 38, 26],
                           backgroundColor     : '#42BFF7',
                           hoverBackgroundColor: '#87cdf7'
                       },
                       {
                           type                : 'bar',
                           label               : 'Hours',
                           data                : [5, 0, 3, 5, 18, 24, 20],
                           backgroundColor     : '#c6ecfd',
                           hoverBackgroundColor: '#d7effd'
                       }
                   ]
               },
               'options': {
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
               }
           },
     },
           {
     'title'     : 'Senior Manager1',
     'ranges'    : {
         'D': 'Duration',
     },
     'mainChart' : {
         'D'     : {
             labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
             datasets: [
                 {
                     type                : 'bar',
                     label               : 'Hours',
                     data                : [25, 12, 9, 22, 7, 8, 50],
                     backgroundColor     : '#42BFF7',
                     hoverBackgroundColor: '#87cdf7'
                 },
                 {
                     type                : 'bar',
                     label               : 'Hours',
                     data                : [7, 0, 9, 7, 18, 4, 40],
                     backgroundColor     : '#c6ecfd',
                     hoverBackgroundColor: '#d7effd'
                 }
             ]
         },
         'options': {
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
         }
     },
    },
           {
    'title'     : 'Senior Manager1',
    'ranges'    : {
    'D': 'Duration',
    },
    'mainChart' : {
    'D'     : {
       labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
       datasets: [
           {
               type                : 'bar',
               label               : 'Hours',
               data                : [50, 12, 19, 37, 30, 28, 40],
               backgroundColor     : '#42BFF7',
               hoverBackgroundColor: '#87cdf7'
           },
           {
               type                : 'bar',
               label               : 'Hours',
               data                : [7, 5, 9, 7, 18, 24, 0],
               backgroundColor     : '#c6ecfd',
               hoverBackgroundColor: '#d7effd'
           }
       ]
    },
    'options': {
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
    }
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
            'title'     : 'Senior Manager1',
            'ranges'    : {
                'D': 'Duration',
            },
            'mainChart' : {
                'D'     : {
                    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            type                : 'bar',
                            label               : 'Hours',
                            data                : [9, 2, 29, 12, 27, 38, 26],
                            backgroundColor     : '#42BFF7',
                            hoverBackgroundColor: '#87cdf7'
                        },
                        {
                            type                : 'bar',
                            label               : 'Hours',
                            data                : [5, 0, 13, 5, 18, 34, 20],
                            backgroundColor     : '#c6ecfd',
                            hoverBackgroundColor: '#d7effd'
                        }
                    ]
                },
                'options': {
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
                }
            },
      },
            {
      'title'     : 'Senior Manager1',
      'ranges'    : {
          'D': 'Duration',
      },
      'mainChart' : {
          'D'     : {
              labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [10, 5, 9, 22, 7, 8, 50],
                      backgroundColor     : '#42BFF7',
                      hoverBackgroundColor: '#87cdf7'
                  },
                  {
                      type                : 'bar',
                      label               : 'Hours',
                      data                : [7, 0, 9, 7, 18, 4, 40],
                      backgroundColor     : '#c6ecfd',
                      hoverBackgroundColor: '#d7effd'
                  }
              ]
          },
          'options': {
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
          }
      },
     },
            {
     'title'     : 'Senior Manager1',
     'ranges'    : {
     'D': 'Duration',
     },
     'mainChart' : {
     'D'     : {
        labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type                : 'bar',
                label               : 'Hours',
                data                : [10, 12, 19, 37, 30, 28, 5],
                backgroundColor     : '#42BFF7',
                hoverBackgroundColor: '#87cdf7'
            },
            {
                type                : 'bar',
                label               : 'Hours',
                data                : [7, 5, 9, 7, 18, 24, 0],
                backgroundColor     : '#c6ecfd',
                hoverBackgroundColor: '#d7effd'
            }
        ]
     },
     'options': {
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
     }
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
                            <div className="items-center">
                            {
                              this.state.btnsArray.map((btn,index)=>{
                                return (
                                  <button className={ classNames('px-16'),btn.id === this.state.defaultClass ? 'activeDefault':'buttonDefault' }  tabindex="0" type="button">
                                    <span className="MuiButton-label mx-6 buttonSpacing" onClick={()=>this.handleTabs(btn)}>{btn.name}</span>
                                  </button>
                                )
                              })
                            }
                            </div>
                            </div>
                        </FuseAnimate>
                        <div>
                        {
                          this.state.isClicked ? this.state.data.map((unit,index)=>{
                            return(
                              <span className={ unit.id === this.state.listClass ? 'activeDefault':'buttonDefault' } key={index} onClick={(e)=>this.selectUnit(e,unit,index)}>{unit.unit}</span>
                            )

                          }) : ''
                        }
                        </div>

                        <div>
                        {
                          this.state.isDuration ? this.state.duration.map((duration,index)=>{
                            return(

                              <span className={ duration.id === this.state.listClass ? 'activeDefault':'buttonDefault'}  onClick={(e)=>this.selectUnit(e,duration,index)}key={index}>{duration.unit}</span>

                            )
                          }) : ''
                        }
                        </div>

                

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
