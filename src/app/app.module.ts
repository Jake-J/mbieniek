import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProjectComponent } from './pages/project/project.component';
import {ClipboardModule} from 'ngx-clipboard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    ClipboardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
