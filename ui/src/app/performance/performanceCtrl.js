(function(app) {
  app.config(function($stateProvider) {
    return $stateProvider.state('performance',{
        url: "/performance/:type/view",
        templateUrl: 'html/performance.html',
        controller: 'performanceCtrl',
        params: {
            paramOne: "defaultValue"    
        }
    })
  });
  //"use strict";
  return app.controller('performanceCtrl', function($rootScope, $state, $scope, $stateParams) {
        $scope.performanceType = $stateParams.paramOne;

        $(function () { 
          var myPieTeamChart =
                Highcharts.chart('interTeamChart', {

                    title: {
                        text: 'Teams performance from Dec 2016 to Nov 2017'
                    },
                    subtitle: {
                        text: 'Click on Team Name below pie chart to Hide/Show Team data.'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['Dec 16', 'Jan 17', 'Feb 17', 'Mar 17', 'Apr 17', 'May 17', 'Jun 17', 'Jul 17', 'Aug 17', 'Sep 17', 'Oct 17', 'Nov 17']
                    },
                    tooltip: {
                        formatter: function() {
                            return '<b>' + this.y + '</b>' + ' Surveys Completed';
                        }
                    },
                    series: [{
                        type: 'pie',
                        allowPointSelect: true,
                        keys: ['name', 'y', 'selected', 'sliced'],
                        data: [
                            ['Team A', 1865, true, true],
                            ['Team B', 1400, false],
                            ['Team C', 1250, false],
                            ['Team D', 1400, false],
                            ['Team E', 1580, false],
                            ['Team F', 1010, false],
                            ['Team G', 1345, false]
                        ],
                        showInLegend: true
                    }],
                    exporting: {
                        buttons: {
                            contextButton: {
                                menuItems: [
                                    {
                                        textKey: 'downloadPNG',
                                        onclick: function () {
                                            this.exportChart();
                                        }
                                    },
                                    {
                                        textKey: 'downloadJPEG',
                                        onclick: function () {
                                            this.exportChart({
                                                type: 'image/jpeg'
                                            });
                                        }
                                    },
                                    {
                                        textKey: 'downloadPDF',
                                        onclick: function () {
                                            this.exportChart({
                                                type: 'application/pdf'
                                            });
                                        }
                                    }
                                ]
                            }
                        }
                    }
                });
        });

        $(function () {
          var myLineGraphChart =
              // Create the chart
              Highcharts.chart('surveyorPerformanceChart', {
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: 'Surveyors Monthly / Weekly Performance'
                  },
                  subtitle: {
                      text: 'Click columns to view Weekly Status of Surveyors.'
                  },
                  credits: {
                      enabled: false
                  },
                  xAxis: {
                      type: 'category',
                      title: {
                          text: 'Surveyors'
                      }
                  },
                  yAxis: {
                      title: {
                          text: 'Surveys Completed Every Month'
                      }
                  },
                  legend: {
                      enabled: false
                  },

                  plotOptions: {
                      series: {
                          borderWidth: 0,
                          dataLabels: {
                              enabled: true
                          }
                      }
                  },

                  series: [{
                      name: 'Records',
                      colorByPoint: true,
                      data: [{
                          name: 'Srinivas',
                          y: 70,
                          drilldown: 'Srinivas'
                      }, {
                          name: 'Senthil',
                          y: 65,
                          drilldown: 'Senthil'
                      }, {
                          name: 'Mahtab',
                          y: 50,
                          drilldown: 'Mahtab'
                      }, {
                          name: 'Maaz',
                          y: 45,
                          drilldown: 'Maaz'
                      }]
                  }],
                  drilldown: {
                      activeAxisLabelStyle: {
                          textDecoration: 'none',
                          fontStyle: 'italic'
                      },
                      activeDataLabelStyle: {
                          textDecoration: 'none',
                          fontStyle: 'italic'
                      },
                      series: [
                          {
                              id: 'Srinivas',
                              data: [
                                  ['Week 1', 20],
                                  ['Week 2', 15],
                                  ['Week 3', 20],
                                  ['Week 4', 15]
                              ]
                          },
                          {
                              id: 'Senthil',
                              data: [
                                  ['Week 1', 18],
                                  ['Week 2', 14],
                                  ['Week 3', 18],
                                  ['Week 4', 15]
                              ]
                          },
                          {
                              id: 'Mahtab',
                              data: [
                                  ['Week 1', 10],
                                  ['Week 2', 12],
                                  ['Week 3', 15],
                                  ['Week 4', 13]
                              ]
                          },
                          {
                              id: 'Maaz',
                              data: [
                                  ['Week 1', 12],
                                  ['Week 2', 13],
                                  ['Week 3', 10],
                                  ['Week 4', 10]
                              ]
                          }
                      ]
                  },
                  exporting: {
                      buttons: {
                          contextButton: {
                              menuItems: [
                                  {
                                      textKey: 'downloadPNG',
                                      onclick: function () {
                                          this.exportChart();
                                      }
                                  },
                                  {
                                      textKey: 'downloadJPEG',
                                      onclick: function () {
                                          this.exportChart({
                                              type: 'image/jpeg'
                                          });
                                      }
                                  },
                                  {
                                      textKey: 'downloadPDF',
                                      onclick: function () {
                                          this.exportChart({
                                              type: 'application/pdf'
                                          });
                                      }
                                  }
                              ]
                          }
                      }
                  }
              });
      });

        $(function () {
          var myLineDataCollectionChart =
              Highcharts.chart('intraTeamChart', {
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: 'Monthly Surveyor Team Data'
                  },
                  subtitle: {
                      text: 'Click on Team Name below chart to Hide/Show Surveyor data.'
                  },
                  credits: {
                      enabled: false
                  },
                  xAxis: {
                      categories: [
                          'Dec 2016',
                          'Jan 2017',
                          'Feb 2017',
                          'Mar 2017',
                          'Apr 2017',
                          'May 2017',
                          'Jun 2017',
                          'Jul 2017',
                          'Aug 2017',
                          'Sep 2017',
                          'Oct 2017',
                          'Nov 2017'
                      ],
                      crosshair: true,
                      title: {
                          text: 'Monthly Surveyor Team Performance'
                      }
                  },
                  yAxis: {
                      title: {
                          text: 'Surveys per Month'
                      }
                  },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{series.name}</b>: </td>' +
                      '<td style="padding:0"><b>{point.y} Surveys</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: 'Srinivas',
                      data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 70, 95, 54]

                  }, {
                      name: 'Senthil',
                      data: [83, 78, 98, 93, 106, 84, 105, 104, 91, 65, 106, 92]

                  }, {
                      name: 'Mahtab',
                      data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 50, 59, 51]

                  }, {
                      name: 'Maaz',
                      data: [42, 33, 34, 39, 52, 75, 57, 60, 47, 45, 46, 51]

                  }],
                  exporting: {
                      buttons: {
                          contextButton: {
                              menuItems: [
                                  {
                                      textKey: 'downloadPNG',
                                      onclick: function () {
                                          this.exportChart();
                                      }
                                  },
                                  {
                                      textKey: 'downloadJPEG',
                                      onclick: function () {
                                          this.exportChart({
                                              type: 'image/jpeg'
                                          });
                                      }
                                  },
                                  {
                                      textKey: 'downloadPDF',
                                      onclick: function () {
                                          this.exportChart({
                                              type: 'application/pdf'
                                          });
                                      }
                                  }
                              ]
                          }
                      }
                  }
              });
      });

      });
})(angular.module('myApp.performance', ['ui.router']));