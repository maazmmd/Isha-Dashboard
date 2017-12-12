(function (app) {
    app.config(function ($stateProvider) {
        return $stateProvider.state('dataCollection', {
            url: "/dataCollection/:status/view",
            templateUrl: 'html/dataCollection.html',
            controller: 'dataCollectionCtrl',
            params: {
                paramOne: "defaultValue"
            }
        })
    });
    //"use strict";
    return app.controller('dataCollectionCtrl', function ($rootScope, $state, $scope, $stateParams) {
        $scope.dataCollectionStatus = $stateParams.paramOne;
        //$scope.dataCollectionparamTwo = $stateParams.paramTwo;

        $(function () {
            var myPieVillageDataChart =
                // Build the chart
                Highcharts.chart('villageDataChart', {
                    chart: {
                        //render: 'villageDataChart',
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Village Wise Data'
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.y + '%</b>  of Total Survey';
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                },
                                connectorColor: 'silver'
                            }
                        }
                    },
                    series: [{
                        name: 'Completed',
                        data: [
                            {name: 'Balewadi', y: 56.33},
                            {
                                name: 'Laxyachiwadi',
                                y: 24.03,
                                sliced: true,
                                selected: true
                            },
                            {name: 'Phapalwadi', y: 10.38},
                            {name: 'Songiri', y: 4.77},
                            {name: 'Bramhgaon', y: 0.91},
                            {name: 'Bhongiri', y: 0.2}
                        ]
                    }],
                    credits: {
                        enabled: false
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
            //var villageChart = new Highcharts.chart(myPieVillageDataChart);
        });

        $(function () {
            var myEmbeddedLineChart =
                // Build the chart
                Highcharts.chart('eligiblesHHQChart', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Overall Progress of Eligibles and HouseHold Questionnaire'
                    },
                    subtitle: {
                        text: 'Click on Eligibles/HHQ Questionnaire below chart to Hide/Show data.'
                    },
                    xAxis: {
                        categories: [
                            'Balewadi',
                            'Laxyachiwadi',
                            'Phapalwadi',
                            'Songiri',
                            'Bramhgaon',
                            'Bhongiri'
                        ],
                        title: {
                            text: 'Villages / Locations'
                        }
                    },
                    yAxis: [{
                        min: 0,
                        title: {
                            text: 'Total Count'
                        }
                    }, {
                        title: {
                            text: ''
                        },
                        opposite: true
                    }],
                    legend: {
                        shadow: false
                    },
                    tooltip: {
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            grouping: false,
                            shadow: false,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: 'Eligibles',
                        color: 'rgba(165,170,217,1)',
                        data: [5830, 2490, 1070, 490, 90, 20],
                        pointPadding: 0.2,
                        //pointPlacement: -0.2
                    }, {
                        name: 'HouseHold Questionnaire',
                        color: 'rgba(126,86,134,.9)',
                        data: [4000, 1950, 750, 200, 25, 5],
                        pointPadding: 0.3,
                        //pointPlacement: -0.2
                    }
                        /*, {
                                name: 'Profit',
                                color: 'rgba(248,161,63,1)',
                                data: [183.6, 178.8, 198.5],
                                tooltip: {
                                    valuePrefix: '$',
                                    valueSuffix: ' M'
                                },
                                pointPadding: 0.3,
                                pointPlacement: 0.2,
                                yAxis: 1
                            }, {
                                name: 'Profit Optimized',
                                color: 'rgba(186,60,61,.9)',
                                data: [203.6, 198.8, 208.5],
                                tooltip: {
                                    valuePrefix: '$',
                                    valueSuffix: ' M'
                                },
                                pointPadding: 0.4,
                                pointPlacement: 0.2,
                                yAxis: 1
                            }*/
                    ],
                    credits: {
                        enabled: false
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
            var myenumeartionChart =
                Highcharts.chart('enumerationChart', {
                    title: {
                        text: 'Enumeration'
                    },
                    subtitle: {
                        text: 'Click on Households / Members/ Eligibles below chart to Hide/Show data.'
                    },
                    xAxis: {
                        categories: ['Balewadi', 'Laxyachiwadi', 'Phapalwadi', 'Songiri', 'Bramhgaon'],
                        title: {
                            text: 'Villages / Locations'
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Total Count'
                        }
                    },
                    // labels: {
                    //     items: [{
                    //         html: 'Total Records',
                    //         style: {
                    //             left: '140px',
                    //             top: '15px',
                    //             color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    //         }
                    //     }]
                    // },
                    series: [{
                        type: 'column',
                        name: 'Households',
                        data: [3330, 1550, 750, 290, 11]
                    }, {
                        type: 'column',
                        name: 'Members',
                        data: [9900, 5200, 3500, 1400, 55]
                    }, {
                        type: 'column',
                        name: 'Eligibles',
                        data: [5830, 2490, 1070, 490, 20]
                    },
                        /*{
                            type: 'spline',
                            name: 'Average',
                            data: [3, 2.67, 3, 6.33, 3.33],
                            marker: {
                                lineWidth: 2,
                                lineColor: Highcharts.getOptions().colors[3],
                                fillColor: 'white'
                            }
                        },
                        {
                            type: 'pie',
                            name: 'Total consumption',
                            data: [{
                                name: 'Households',
                                y: 13,
                                color: Highcharts.getOptions().colors[0] // Jane's color
                            }, {
                                name: 'Members',
                                y: 23,
                                color: Highcharts.getOptions().colors[1] // John's color
                            }, {
                                name: 'Eligibles',
                                y: 19,
                                color: Highcharts.getOptions().colors[2] // Joe's color
                            }],
                            center: [200, 60],
                            size: 100,
                            showInLegend: false,
                            dataLabels: {
                                enabled: false
                            }
                        }*/
                    ],
                    credits: {
                        enabled: false
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
    });
})(angular.module('myApp.dataCollection', ['ui.router']));