import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cr-winners',
  templateUrl: './cr-winners.component.html',
  styleUrls: ['./cr-winners.component.scss']
})
export class CrWinnersComponent implements OnInit {

  public silderList = [];
  public firstSilderList = [];
  public secondSilderList = [];
  public itemsPerSlide = 3;
  public singleSlideOffset = true;
  public moveRight = false;

  constructor() { }

  ngOnInit() {
    this.getWinners();
  }

  public getWinners() {
    this.silderList = [
      {
        imgSrc: '../assets/images/winner/winnerMar.jpg',
        month: 'March',
        year: 2020,
        candidateName: 'Swastik Tripathy',
        votes: 3003,
        threadHeader: 'Nonscence Municipalty',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      },
      {
        imgSrc: '../assets/images/winner/winnerFeb.jpg',
        month: 'February',
        year: 2020,
        candidateName: 'Sangam Mishra',
        votes: 3044,
        threadHeader: 'Good Municipalty',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      },
      {
        imgSrc: '../assets/images/winner/winnerJan.jpg',
        month: 'January',
        year: 2020,
        candidateName: 'Dr Sharda Prasad Mohapatra',
        votes: 600,
        threadHeader: 'Good Police',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      },
      {
        imgSrc: '../assets/images/winner/winnerDec.jpg',
        month: 'December',
        year: 2019,
        candidateName: 'Girija Prasad Mohapatra',
        votes: 4503,
        threadHeader: 'Indians on Weddings',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      },
      {
        imgSrc: '../assets/images/winner/winnerNov.jpg',
        month: 'November',
        year: 2019,
        candidateName: 'Swagat Mishra',
        votes: 10046,
        threadHeader: 'Earthquake in Delhi',
        threadDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.'
      }
    ];
    this.firstSilderList = this.silderList.slice(0, 3);
    this.secondSilderList = this.silderList.slice(3);
  }

  public circleClicked(selectedDiv) {
    if (selectedDiv === 'second') {
      this.moveRight = true;
    } else if (selectedDiv === 'first') {
      this.moveRight = false;
    }
  }
}
