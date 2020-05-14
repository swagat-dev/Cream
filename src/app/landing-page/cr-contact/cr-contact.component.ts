import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cr-contact',
  templateUrl: './cr-contact.component.html',
  styleUrls: ['./cr-contact.component.scss']
})
export class CrContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createMailForm();
  }

  createMailForm() {
    this.contactForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      subject: ['', Validators.required],
      fromEmail: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
}
