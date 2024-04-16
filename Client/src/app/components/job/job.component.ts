import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from "../../Models/Job";
import { JobsFields } from "../../Models/JobsFields";
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  @Input() jobData: Job | null = null


  getField() {
    return JobsFields
  }
}
