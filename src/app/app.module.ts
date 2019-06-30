import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProjectComponent } from './pages/project/project.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirective } from './components/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    ProjectComponent,
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
