import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.scss']
})
export class OtherProfileComponent implements OnInit {

  public threads = [];
  constructor() { }

  ngOnInit() {
    this.getAllThreads();
  }

  public getAllThreads() {
    this.threads = [
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: true,
        votes: 110,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: false,
        votes: 0,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: true,
        votes: 103,
        flags: 4,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: true,
        votes: 150,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: false,
        votes: 0,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: true,
        votes: 106,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: true,
        votes: 103,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: true,
        votes: 150,
        flags: 2,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: true,
        votes: 110,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: true,
        votes: 106,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: false,
        votes: 0,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        hasShared: false,
        votes: 0,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      }
    ];
  }

}
