import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'work', component: WorkExperienceComponent },
  { path: 'certs', component: CertificationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactMeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    WorkExperienceComponent,
    CertificationsComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }