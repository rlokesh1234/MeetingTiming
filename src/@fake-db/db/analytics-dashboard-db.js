import mock from './../mock';

const analyticsDashboardAppDB = {
    widgets: {
        widget1: {
            chartType: 'line',
            datasets : {
                '2017': [
                    {
                        label: 'Hours',
                        data : [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
                        fill : 'start'
                    }
                ],
                '2018': [
                    {
                        label: 'Hours',
                        data : [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
                        fill : 'start'
                    }
                ],
                '2019': [
                    {
                        label: 'Hours',
                        data : [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
                        fill : 'start'
                    }
                ]
            },
            labels   : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top  : 32,
                        left : 32,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    },
                    line : {
                        tension: 0
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display       : false,
                                drawBorder    : false,
                                tickMarkLength: 18
                            },
                            ticks    : {
                                fontColor: '#ffffff'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min     : 1.5,
                                max     : 5,
                                stepSize: 0.5
                            }
                        }
                    ]
                },
            }
        },
        widget2: {
            conversion: {
                value   : 492,
                ofTarget: 13
            },
            chartType : 'bar',
            datasets  : [
                {
                    label: 'Conversion',
                    data : [221, 428, 492, 471, 413, 344, 294]
                }
            ],
            labels    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            options   : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min: 100,
                                max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget3: {
            impressions: {
                value   : '87k',
                ofTarget: 12
            },
            chartType  : 'line',
            datasets   : [
                {
                    label: 'Impression',
                    data : [67000, 54000, 82000, 57000, 72000, 57000, 87000, 72000, 89000, 98700, 112000, 136000, 110000, 149000, 98000],
                    fill : false
                }
            ],
            labels     : ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
            options    : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                elements           : {
                    point: {
                        radius          : 2,
                        borderWidth     : 1,
                        hoverRadius     : 2,
                        hoverBorderWidth: 1
                    },
                    line : {
                        tension: 0
                    }
                },
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                // min: 100,
                                // max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget4: {
            visits   : {
                value   : 882,
                ofTarget: -9
            },
            chartType: 'bar',
            datasets : [
                {
                    label: 'Visits',
                    data : [432, 428, 327, 363, 456, 267, 231]
                }
            ],
            labels   : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min: 150,
                                max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget5: {
            chartType: 'line',
            datasets : {
                'yesterday': [
                    {
                        label: 'Visitors',
                        data : [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
                        fill : 'start'
                    },
                    {
                        label: 'Page views',
                        data : [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
                        fill : 'start'
                    }
                ],
                'today'    : [
                    {
                        label: 'Visitors',
                        data : [410, 380, 320, 290, 190, 390, 250, 380, 300, 340, 220, 290],
                        fill : 'start'
                    },
                    {
                        label: 'Page Views',
                        data : [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800],
                        fill : 'start'
                    }
                ]
            },
            labels   : ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                tooltips           : {
                    position : 'nearest',
                    mode     : 'index',
                    intersect: false
                },
                layout             : {
                    padding: {
                        left : 24,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            ticks    : {
                                fontColor: 'rgba(0,0,0,0.54)'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                tickMarkLength: 16
                            },
                            ticks    : {
                                stepSize: 1000
                            }
                        }
                    ]
                },
                plugins            : {
                    filler: {
                        propagate: false
                    }
                }
            }
        },
        widget6: {
            markers: [
                {
                    lat  : 52,
                    lng  : -73,
                    label: '120'
                },
                {
                    lat  : 37,
                    lng  : -104,
                    label: '498'
                },
                {
                    lat  : 21,
                    lng  : -7,
                    label: '443'
                },
                {
                    lat  : 55,
                    lng  : 75,
                    label: '332'
                },
                {
                    lat  : 51,
                    lng  : 7,
                    label: '50'
                },
                {
                    lat  : 31,
                    lng  : 12,
                    label: '221'
                },
                {
                    lat  : 45,
                    lng  : 44,
                    label: '455'
                },
                {
                    lat  : -26,
                    lng  : 134,
                    label: '231'
                },
                {
                    lat  : -9,
                    lng  : -60,
                    label: '67'
                },
                {
                    lat  : 33,
                    lng  : 104,
                    label: '665'
                }
            ],
            styles : [
                {
                    'featureType': 'administrative',
                    'elementType': 'labels.text.fill',
                    'stylers'    : [
                        {
                            'color': '#444444'
                        }
                    ]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'color': '#f2f2f2'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'saturation': -100
                        },
                        {
                            'lightness': 45
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'simplified'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.icon',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'color': '#039be5'
                        },
                        {
                            'visibility': 'on'
                        }
                    ]
                }
            ]
        },
        widget7: {
            labels  : [
                'Desktop',
                'Mobile',
                'Tablet'
            ],
            datasets: {
                'Today'       : [
                    {
                        data  : [92.8, 6.1, 1.1],
                        change: [-0.6, 0.7, 0.1]
                    }
                ],
                'Yesterday'   : [
                    {
                        data  : [77.2, 8.4, 14.4],
                        change: [-2.3, 0.3, -0.2]
                    }
                ],
                'Last 7 days' : [
                    {
                        data  : [88.2, 9.2, 2.6],
                        change: [1.9, -0.4, 0.3]
                    }
                ],
                'Last 28 days': [
                    {
                        data  : [65.2, 2.6, 32.2],
                        change: [-12.6, -0.7, 4.2]
                    }
                ],
                'Last 90 days': [
                    {
                        data  : [93.5, 4.2, 2.3],
                        change: [2.6, -0.7, 2.1]
                    }
                ]
            },
            options : {
                cutoutPercentage   : 75,
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false
            }
        },
        widget8: {
            datasets: [
                [
                    {
                        label      : '1Day',
                        data       : [72, 65, 70, 78, 85, 82, 88],
                        fill       : false,
                        borderColor: '#5c84f1'
                    }
                ],
                [
                    {
                        label      : '1Week',
                        data       : [540, 539, 527, 548, 540, 552, 566],
                        fill       : false,
                        borderColor: '#5c84f1'
                    }
                ],
                [
                    {
                        label      : '1Month',
                        data       : [1520, 1529, 1567, 1588, 1590, 1652, 1622],
                        fill       : false,
                        borderColor: '#5c84f1'
                    }
                ]
            ],
            labels  : ['1', '2', '3', '4', '5', '6', '7'],
            options : {
                spanGaps           : true,
                legend             : {
                    display: false
                },
                maintainAspectRatio: true,
                elements           : {
                    point: {
                        radius          : 2,
                        borderWidth     : 1,
                        hoverRadius     : 2,
                        hoverBorderWidth: 1
                    },
                    line : {
                        tension: 0
                    }
                },
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            ticks  : {
                                // min: 100,
                                // max: 500
                            }
                        }
                    ]
                }
            },
            today   : '12,540',
            change  : {
                value     : 321,
                percentage: 2.05
            }
        },
        widget9: {
            rows: [
                {
                    title     : 'Holiday Travel',
                    clicks    : 3621,
                    conversion: 90
                },
                {
                    title     : 'Get Away Deals',
                    clicks    : 703,
                    conversion: 7
                },
                {
                    title     : 'Airfare',
                    clicks    : 532,
                    conversion: 0
                },
                {
                    title     : 'Vacation',
                    clicks    : 201,
                    conversion: 8
                },
                {
                    title     : 'Hotels',
                    clicks    : 94,
                    conversion: 4
                }
            ]
        },
        mData:{
          MData:[{
          data:{
            type:'rdar',
            legend             : {
                display: false
            },
            labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
            datasets:[{
              data:[10,20,55,80,100,70,40,25,50],
              backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
            }]
          }
        },{
        data:{
          type:'radar',
          legend             : {
              display: false
          },
          labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
          datasets:[{
            data:[50,20,80,130,75,40,90,120,5],
            backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
          }]
        }
      },{
        data:{
          type:'radar',
          legend             : {
              display: false
          },
          labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
          datasets:[{
            data:[0,200,50,300,150,100,80,250,500],
            backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
          }]
        }
      }
      ]
        },
        tlData:{
          tData:[{
          data:{
            type:'bar',
            legend             : {
                display: false
            },
            labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
            datasets:[{
              data:[10,20,55,80,100,70,40,25,50],
              backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
            }]
          }
        },{
        data:{
          type:'bar',
          legend             : {
              display: false
          },
          labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
          datasets:[{
            data:[50,20,80,130,75,40,90,120,5],
            backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
          }]
        }
      },{
        data:{
          type:'bar',
          legend             : {
              display: false
          },
          labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
          datasets:[{
            data:[0,200,50,300,150,100,80,250,500],
            backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
          }]
        }
      }
      ]
        },
        smData:{
          sData:[{
          data:{
            type:'polarArea',
            legend             : {
                display: false
            },
            labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
            datasets:[{
              data:[10,20,55,80,100,70,40,25,50],
              backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
            }]
          }
        },{
        data:{
          type:'polarArea',
          legend             : {
              display: false
          },
          labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
          datasets:[{
            data:[50,20,80,130,75,40,90,120,5],
            backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
          }]
        }
      },{
        data:{
          type:'polarArea',
          legend             : {
              display: false
          },
          labels:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'],
          datasets:[{
            data:[0,200,50,300,150,100,80,250,500],
            backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
          }]
        }
      }
      ]
        },
        gmData:{
          gData:[{
            data:{
              type:'doughnut',
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
                data:[50,20,50,30,15,20,80,25,5],
                backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
                hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
              }]
          }
        },
        {
          data:{
            type:'doughnut',
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
              data:[0,20,50,30,15,20,80,25,5],
              backgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black'],
              hoverBackgroundColor:['blue','red','orange','green','yellow','pink','violet','white','black']
            }]
        }
        }
          ]
        }
    }
};

mock.onGet('/api/analytics-dashboard-app/widgets').reply((config) => {
    return [200, analyticsDashboardAppDB.widgets];
});
