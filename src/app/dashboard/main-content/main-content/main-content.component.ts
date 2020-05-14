import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DisplayModalComponent } from '../../../shared/modals/display-modal/display-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {

  public modalRef: BsModalRef;
  public chartForEntireThread: {};
  public chatForOneYear: {};
  public userChat: {};
  public Highcharts = Highcharts;
  public silderList = [];
  public selecetedSlide;
  @Input() opened;

  constructor(
    private modalService: BsModalService,
    private router: Router
  ) { }

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
            pointStart: 2010,
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
          1, 24, 235, 2238,
          21004, 17287, 14747,
          21004, 17287, 14747
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
    this.getWinners();
    this.getAllUserCount();
  }

  // Method to get all the winner list in to Dashboard
  public getWinners() {
    this.silderList = [
      {
        imgSrc: '../../assets/images/winner/winnerMar.jpg',
        month: 'March',
        year: 2020,
        candidateName: 'Swastik Tripathy',
        votes: 3003,
        threadHeader: 'Nonscence Municipalty',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      },
      {
        imgSrc: '../../assets/images/winner/winnerFeb.jpg',
        month: 'February',
        year: 2020,
        candidateName: 'Sangam Mishra',
        votes: 3044,
        threadHeader: 'Good Municipalty',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      },
      {
        imgSrc: '../../assets/images/winner/winnerJan.jpg',
        month: 'January',
        year: 2020,
        candidateName: 'Dr Sharda Prasad Mohapatra',
        votes: 600,
        threadHeader: 'Good Police',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      },
      {
        imgSrc: '../../assets/images/winner/winnerDec.jpg',
        month: 'December',
        year: 2019,
        candidateName: 'Girija Prasad Mohapatra',
        votes: 4503,
        threadHeader: 'Indians on Weddings',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      },
      {
        imgSrc: '../../assets/images/winner/winnerNov.jpg',
        month: 'November',
        year: 2019,
        candidateName: 'Swagat Mishra',
        votes: 10046,
        threadHeader: 'Earthquake in Delhi',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      }
    ];
  }

  // Method to get All the users' count in DB
  public getAllUserCount() {
    const users = [
      { name: 'Candidate', count: 1112 },
      { name: 'Observers', count: 362 },
      { name: 'Supporters', count: 712 },
      { name: 'Trainers', count: 147 }
    ];
  }

  // Method to show thread related to profile image
  public showThread(selectedIndex) {
    this.modalRef = this.modalService.show(DisplayModalComponent, Object.assign({}, { class: 'center-modal' }));
    this.modalRef.content.title = this.silderList[selectedIndex ? selectedIndex : this.selecetedSlide].threadHeader;
    this.modalRef.content.data = this.silderList[selectedIndex ? selectedIndex : this.selecetedSlide].threadDescription;
    this.modalRef.content.voteCount = this.silderList[selectedIndex ? selectedIndex : this.selecetedSlide].votes;
    this.modalRef.content.fullName = this.silderList[selectedIndex ? selectedIndex : this.selecetedSlide].candidateName;
    this.modalRef.content.i = selectedIndex ? selectedIndex : this.selecetedSlide;
  }

  // Method to get role details on click in what is cream section
  public openRoleDetails(role) {
    this.modalRef = this.modalService.show(DisplayModalComponent, Object.assign({}, { class: 'center-modal' }));
    this.modalRef.content.closeBtnName = 'Close';
    this.modalRef.content.title = role;
    this.modalRef.content.data = 'Some Random text about ' + role;
  }

  // Called when an image in carousel is changed
  public onCarouselChange(event) {
    this.selecetedSlide = event;
  }

  // on log in selection
  public login() {
    this.router.navigate(['/login']);
  }
}
