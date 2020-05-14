import { Component, OnInit } from '@angular/core';
import { NewThreadComponent } from '../new-thread/new-thread.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  public threads;
  public showStatesFilter = false;
  public showInterestFilter = true;
  public states;
  public interests;
  public checked = [];
  public postImageInterval = 0;
  public createText = false;
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.states = [
      'Puri',
      'Bhubaneswar',
      'Bangalore',
      'Pune',
      'Hydrabad',
      'Lucknow',
      'Delhi',
      'Noida',
      'Chennai',
      'Cochin',
      'Dharmashala',
      'Mumbai',
      'Jaipur'
    ];
    this.interests = [
      'Agriculture',
      'Politics',
      'Entertainment',
      'Education',
      'Core Industry',
      'Information Technology',
      'Real Estate',
      'Transport',
      'Social Media',
      'Municipality',
      'Foods and Beverages'
    ];
    this.states.sort();
    this.interests.sort();
    this.getAllThreads();
  }

  public getAllThreads() {
    this.threads = [
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 110,
        flags: 0,
        createdBy: 'Sharda Prasad Mohapatra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerJan.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 106,
        flags: 1,
        createdBy: 'Sangam Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerFeb.jpg',
        images: ['../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 103,
        flags: 4,
        createdBy: 'Girija Mahapatra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerDec.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 150,
        flags: 0,
        createdBy: 'Swastik (Viki)',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerMar.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 110,
        flags: 2,
        createdBy: 'Swagat',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 106,
        flags: 0,
        createdBy: 'Sangam, the Miki..',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerFeb.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 103,
        flags: 0,
        createdBy: 'Dr Mahapatra (Dentist)',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerJan.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 150,
        flags: 2,
        createdBy: 'Mr. S. Tripathy',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerMar.jpg',
        images: []
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
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
        votes: 106,
        flags: 0,
        createdBy: 'Girija Prasad Mahapatra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerDec.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 103,
        flags: 0,
        createdBy: 'Ganesh',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerDec.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      },
      {
        threadHeading: 'Issues by Municipalty',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.',
        votes: 150,
        flags: 0,
        createdBy: 'Swagat Mishra',
        createdOn: '01/05/2020',
        profileImage: '../../assets/images/winner/winnerNov.jpg',
        images: ['../assets/images/slideOne.jpeg', '../assets/images/slidetwo.jpg', '../assets/images/slidethree.jpg']
      }
    ];
  }

  public openFilter(input) {
    if (input === 'state') {
      this.showStatesFilter = !this.showStatesFilter;
    } else if (input === 'interest') {
      this.showInterestFilter = !this.showInterestFilter;
    }
  }

  public onStateSelectionChange(state) {
    console.log( '......................................', state);
  }

  public toggleCreateText() {
    this.createText = !this.createText;
  }

  public createThread() {
    this.modalRef = this.modalService.show(NewThreadComponent, Object.assign({}, { class: 'gray modal-lg' }));
    this.toggleCreateText();
  }

}
