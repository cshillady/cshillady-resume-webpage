import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  { path: 'education', component: EducationComponent },
  { path: 'work', component: WorkExperienceComponent },
  { path: 'certs', component: CertificationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
