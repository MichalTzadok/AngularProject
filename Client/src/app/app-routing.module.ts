import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

const routes: Routes = [ 
  {path:'login', component:LoginComponent},
  {path:'jobsList', component:JobsListComponent},
  { path: 'jobs/:job.id', component: JobDetailsComponent }

  // {path:'job-details',component:JobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
