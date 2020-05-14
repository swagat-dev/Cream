import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-cr-graph',
  templateUrl: './cr-graph.component.html',
  styleUrls: ['./cr-graph.component.scss']
})
export class CrGraphComponent implements OnInit {

  public chartForEntireThread: {};
  public chatForOneYear: {};
  public userChat: {};
  public Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartForEntireThread =  {
      chart: {
        type: 'area'
      },
      accessibility: {
        description: 'Image description'
      },
      title: {
        text: 'Threads Created (Every Year)'
      },
      xAxis: {
        floor: 0,
      },
      yAxis: {
        title: {
          text: 'Total Count'
        }
      },
      tooltip: {
        pointFormat: '<b>{point.y:,.0f}</b> {series.name} created <br/> in {point.x}'
      },
      plotOptions: {
        allowPointSelect: true,
        cursor: 'pointer',
        area: {
            pointStart: 2000,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                      enabled: true
                    }
                }
            }
        }
      },
      credits: {
        enabled: false
      },
      exporting : {
        enabled: true
      },
      series: [{
        name: 'Threads',
        data: [
          56, 124, 235, 777, 1255, 2238,
          2704, 1787, 1447, 1894,
          2104, 1787, 1437, 1545, 2199, 1555, 1964,
          1424, 1244, 1781, 578
        ],
        color: '#3f51b5'
      }]
    };

    this.chatForOneYear = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Threads Created This Year'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Total Count'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      credits: {
        enabled: false
      },
      exporting : {
        enabled: true
      },
      series: [{
        name: 'Thread',
        data: [745, 689, 905, 145, 184, 215, 22, 265, 233, 183, 159, 956]
      }]
    };

    this.userChat = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Total Users Till Date'
      },
      xAxis: {
        labels: {
          enabled: false
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'User Count'
        }
      },
      tooltip: {
        pointFormat: '{series.name} : {point.y}',
        headerFormat: null
      },
      plotOptions: {
        column: {
          pointPadding: 0.2
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Candidate',
        data: [499]
      }, {
        name: 'Observer',
        data: [286]
      }, {
        name: 'Supporter',
        data: [248]
      }, {
        name: 'Trainer',
        data: [542]
      }]
    };

    HC_exporting(Highcharts);
  }
}
