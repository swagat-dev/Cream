import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cr-process',
  templateUrl: './cr-process.component.html',
  styleUrls: ['./cr-process.component.scss']
})
export class CrProcessComponent implements OnInit {
  public roleDetails = [];
  public showHover = [false, false, false, false];
  constructor() { }

  ngOnInit() {
    this.roleDetails = [
      {
        role: 'Candidate',
        // tslint:disable-next-line: max-line-length
        description: 'The person who is willing to take up the challenge and mold himself/herself to learn and prepare to be a citizen well equipped with knowledge character and health. A never die attitude to understand the plight of the fellow citizens and ready for a team work to help each other and grow as a nation.'
      },
      {
        role: 'Supporters',
        // tslint:disable-next-line: max-line-length
        description: 'A person with “If not me you can” attitude who is ready to create new versatile citizens and help them with all support including sharing the paths/proofs that can make the candidate more stronger and come up in flying colors in their endeavor.'
      },
      {
        role: 'Observers',
        // tslint:disable-next-line: max-line-length
        description: 'A person with some knowledge and acknowledged by the company to appreciate the candidates and make the a healthy competition between the candidates. He/she must ensure the to judge the attitude of the candidates and opine accordingly.'
      },
      {
        role: 'Trainers',
        // tslint:disable-next-line: max-line-length
        description: 'A person who share his/her knowledge that can be shared among all players and will be responsible for quantifying the learning. He/She will be responsible for the uploads of their learning materials'
      }
    ];
  }

  public selected(selectedRole) {
    console.log('from select = ', selectedRole);
    this.roleDetails.forEach( role => {
      if (role.role === selectedRole) {
        this.showHover.splice(this.roleDetails.indexOf(role), 1, true);
      }
    });
  }

  public deSelected(selectedRole) {
    this.roleDetails.forEach( role => {
      if (role.role === selectedRole) {
        this.showHover.splice(this.roleDetails.indexOf(role), 1, false);
      }
    });
  }

}
