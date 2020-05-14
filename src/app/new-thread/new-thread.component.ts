import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.scss']
})
export class NewThreadComponent implements OnInit {
  public threadForm: FormGroup;
  public states = [
    'Andra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telagana',
    'Tripura',
    'Uttaranchal',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadar and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadeep',
    'Pondicherry'
  ];
  public filteredOptions: Observable<string[]>;
  public myControl = new FormControl();
  public files;
  public selectedFiles = [];
  public fileName = [];
  public catagory = [
    {id: 1001, name: 'Agriculture', description: 'All kind of Agriculture (Animal and plant)'},
    {id: 1002, name: 'Politics', description: 'Political Issues'},
    {id: 1003, name: 'Entertainment', description: 'Movies and Television'},
    {id: 1004, name: 'Education', description: 'Education Industry'},
    {id: 1005, name: 'Core Industry', description: 'OIL, Natural Gas'},
    {id: 1006, name: 'Information Technology', description: 'Private Sector Companies'},
    {id: 1007, name: 'Real Estate', description: 'Housing boards and colonies'},
  ];

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {

    this.threadForm = new FormGroup({
      location: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().includes(filterValue));
  }

  public fileChange(file) {
    if (file.target.files && file.target.files[0]) {
      this.files = file.target.files[0];
      this.selectedFiles.push(this.files);
      this.fileName.push(file.target.files[0].name);
    }
  }

  public removeAttachment(file) {
    this.selectedFiles.splice(this.fileName.indexOf(file), 1);
    this.fileName.splice(this.fileName.indexOf(file), 1);
    console.log('Remaining Files == ', this.selectedFiles);
    console.log('Remaining file names == ', this.fileName);
  }

  public onSubmit(formData) {
    console.log(this.myControl.value, '///////////////////////', formData.value);
    this.modalRef.hide();
  }

}
