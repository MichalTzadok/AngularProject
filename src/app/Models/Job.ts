import {JobsFields  } from "./JobsFields";
export class Job{
    id:number|null=null
    jobField:JobsFields|null = null
    jobName:string|null = null
    numHours:number|null = null
    jobArea:string|null = null
    requirements:string|null = null
    homeWorking:boolean|null = null
}