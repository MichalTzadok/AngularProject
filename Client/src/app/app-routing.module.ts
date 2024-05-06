import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { JobsSentCvComponent } from './components/jobs-sent-cv/jobs-sent-cv.component';

const routes: Routes = [ 
  {path:'',component:MainComponent},
  {path:'login', component:LoginComponent},
  {path:'jobs-cent-cv',component:JobsSentCvComponent},
  {path:'jobsList', component:JobsListComponent},
  { path: 'jobsList/:field', component: JobsListComponent },  
  { path: 'jobs/:job.id', component: JobDetailsComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
