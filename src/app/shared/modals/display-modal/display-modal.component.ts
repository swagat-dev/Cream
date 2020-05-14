import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-display-modal',
  templateUrl: './display-modal.component.html',
  styleUrls: ['./display-modal.component.scss']
})
export class DisplayModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
