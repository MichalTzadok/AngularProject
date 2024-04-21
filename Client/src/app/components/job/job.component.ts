import { Component, Input} from '@angular/core';
import { Job } from "../../Models/Job";
import { JobsFields } from "../../Models/JobsFields";
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
