import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/:projectId', component: ProjectComponent},
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: '**', redirectTo: '/portfolio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
