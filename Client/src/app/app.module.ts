import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobComponent } from './components/job/job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { MouseEffectDirective } from './directives/MouseEffectDirective.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    JobsListComponent,
    JobComponent,
    JobDetailsComponent,
    MouseEffectDirective,
    NotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
