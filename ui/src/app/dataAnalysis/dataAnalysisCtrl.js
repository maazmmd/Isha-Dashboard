(function (app) {
    app.config(function ($stateProvider) {
        return $stateProvider.state('dataAnalysis', {
            url: "/dataAnalysis/:reason/view",
            templateUrl: 'html/dataAnalysis.html',
            controller: 'dataAnalysisCtrl',
            params: {
                paramOne: "defaultValue"
            }
        })
    });
    //"use strict";
    return app.controller('dataAnalysisCtrl', function ($rootScope, $state, $scope, $stateParams) {
        $scope.analysisType = $stateParams.paramOne;

        $(function () {
            var monthlyReport =
                Highcharts.chart('monthlyReportChart', {

                    title: {
                        text: 'Monthly Survey Status'
                    },
                    // subtitle: {
                    //     text: 'Total Survey Completed Each Month'
                    // },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.y + '</b> Survey Collected';
                        }
                    },
                    xAxis: {
                        categories: ['Nov 16', 'Dec 16', 'Jan 17', 'Feb 17', 'Mar 17', 'Apr 17', 'May 17', 'Jun 17', 'Jul 17', 'Aug 17', 'Sep 17', 'Oct 17'],
                        title: {
                            text: 'Month'
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Survey Collected Every Month'
                        }
                    },
                    series: [{
                        type: 'column',
                        colorByPoint: true,
                        data: [600, 850, 900, 950, 1100, 950, 1000, 1210, 950, 900, 850, 800],
                        showInLegend: false
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

            // $('#plain').click(function () {
            //     monthlyReport.update({
            //         chart: {
            //             inverted: false,
            //             polar: false
            //         },
            //         subtitle: {
            //             text: 'Plain'
            //         }
            //     });
            // });
            //
            // $('#inverted').click(function () {
            //     monthlyReport.update({
            //         chart: {
            //             inverted: true,
            //             polar: false
            //         },
            //         subtitle: {
            //             text: 'Inverted'
            //         }
            //     });
            // });
        });

        $(function () {
            var demographicReport =
                Highcharts.chart('demographicReportChart', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Gender Ratio in Survey Data'
                    },
                    xAxis: {
                        categories: ['Balewadi', 'Laxyachiwadi', 'Phapalwadi', 'Songiri', 'Bramhgaon', 'Bhongiri'],
                        title: {
                            text: 'Villages / Locations'
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Gender Ratio'
                        }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            stacking: 'percent'
                        }
                    },
                    series: [{
                        name: 'Male',
                        data: [3936, 1300, 590, 250, 50, 9]
                    }, {
                        name: 'Female',
                        data: [1894, 1190, 480, 240, 40, 11]
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
        });
        // $(function () {
        //     var data = {
        //             'Solapur': {
        //                 'Area 1': {
        //                     'Communicable & other Group I': '10',
        //                     'Injuries': '40',
        //                     'Noncommunicable diseases': '80'
        //                 },
        //                 'Area 2': {
        //                     'Communicable & other Group I': '6',
        //                     'Injuries': '23',
        //                     'Noncommunicable diseases': '21'
        //                 },
        //                 'Area 3': {
        //                     'Communicable & other Group I': '3',
        //                     'Injuries': '5',
        //                     'Noncommunicable diseases': '55'
        //                 },
        //                 'Area 4': {
        //                     'Communicable & other Group I': '1',
        //                     'Injuries': '11',
        //                     'Noncommunicable diseases': '12'
        //                 },
        //                 'Area 5': {
        //                     'Communicable & other Group I': '3',
        //                     'Injuries': '3',
        //                     'Noncommunicable diseases': '13'
        //                 }
        //             },
        //             'Barshi': {
        //                 'Area 1': {
        //                     'Communicable & other Group I': '13',
        //                     'Injuries': '5',
        //                     'Noncommunicable diseases': '25'
        //                 },
        //                 'Area 2': {
        //                     'Communicable & other Group I': '5',
        //                     'Injuries': '22',
        //                     'Noncommunicable diseases': '3'
        //                 },
        //                 'Area 3': {
        //                     'Communicable & other Group I': '1',
        //                     'Injuries': '9',
        //                     'Noncommunicable diseases': '23'
        //                 },
        //                 'Area 4': {
        //                     'Communicable & other Group I': '3',
        //                     'Injuries': '13',
        //                     'Noncommunicable diseases': '4'
        //                 }
        //             },
        //             'Balewadi': {
        //                 'Area 1': {
        //                     'Communicable & other Group I': '2',
        //                     'Injuries': '33',
        //                     'Noncommunicable diseases': '32'
        //                 },
        //                 'Area 2': {
        //                     'Communicable & other Group I': '4',
        //                     'Injuries': '14',
        //                     'Noncommunicable diseases': '14'
        //                 },
        //                 'Area 3': {
        //                     'Communicable & other Group I': '3',
        //                     'Injuries': '16',
        //                     'Noncommunicable diseases': '12'
        //                 },
        //                 'Area 4': {
        //                     'Communicable & other Group I': '17',
        //                     'Injuries': '1',
        //                     'Noncommunicable diseases': '0'
        //                 }
        //             },
        //             'Alipur': {
        //                 'Area 1': {
        //                     'Communicable & other Group I': '4',
        //                     'Injuries': '12',
        //                     'Noncommunicable diseases': '22'
        //                 },
        //                 'Area 2': {
        //                     'Communicable & other Group I': '2',
        //                     'Injuries': '19',
        //                     'Noncommunicable diseases': '33'
        //                 },
        //                 'Area 3': {
        //                     'Communicable & other Group I': '1',
        //                     'Injuries': '1',
        //                     'Noncommunicable diseases': '22'
        //                 },
        //                 'Area 4': {
        //                     'Communicable & other Group I': '1',
        //                     'Injuries': '3',
        //                     'Noncommunicable diseases': '20'
        //                 }
        //             }
        //         },
        //         points = [],
        //         regionP,
        //         regionVal,
        //         regionI = 0,
        //         countryP,
        //         countryI,
        //         causeP,
        //         causeI,
        //         region,
        //         country,
        //         cause,
        //         causeName = {
        //             'Communicable & other Group I': 'Communicable diseases',
        //             'Noncommunicable diseases': 'Non-communicable diseases',
        //             'Injuries': 'Injuries'
        //         };
        //
        //     for (region in data) {
        //         if (data.hasOwnProperty(region)) {
        //             regionVal = 0;
        //             regionP = {
        //                 id: 'id_' + regionI,
        //                 name: region,
        //                 color: Highcharts.getOptions().colors[regionI]
        //             };
        //             countryI = 0;
        //             for (country in data[region]) {
        //                 if (data[region].hasOwnProperty(country)) {
        //                     countryP = {
        //                         id: regionP.id + '_' + countryI,
        //                         name: country,
        //                         parent: regionP.id
        //                     };
        //                     points.push(countryP);
        //                     causeI = 0;
        //                     for (cause in data[region][country]) {
        //                         if (data[region][country].hasOwnProperty(cause)) {
        //                             causeP = {
        //                                 id: countryP.id + '_' + causeI,
        //                                 name: causeName[cause],
        //                                 parent: countryP.id,
        //                                 value: Math.round(+data[region][country][cause])
        //                             };
        //                             regionVal += causeP.value;
        //                             points.push(causeP);
        //                             causeI = causeI + 1;
        //                         }
        //                     }
        //                     countryI = countryI + 1;
        //                 }
        //             }
        //             regionP.value = Math.round(regionVal / countryI);
        //             points.push(regionP);
        //             regionI = regionI + 1;
        //         }
        //     }
        //     Highcharts.chart('dataAnalysisChart2', {
        //         series: [{
        //             type: 'treemap',
        //             layoutAlgorithm: 'squarified',
        //             allowDrillToNode: true,
        //             animationLimit: 1000,
        //             dataLabels: {
        //                 enabled: false
        //             },
        //             levelIsConstant: false,
        //             levels: [{
        //                 level: 1,
        //                 dataLabels: {
        //                     enabled: true
        //                 },
        //                 borderWidth: 3
        //             }],
        //             data: points
        //         }],
        //         subtitle: {
        //             text: 'Click points to drill down.'
        //         },
        //         title: {
        //             text: 'Population Rate 2012 in Thousands'
        //         }
        //     });
        //
        // });
    });
})(angular.module('myApp.dataAnalysis', ['ui.router']));