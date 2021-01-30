import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//external imports
import { ChartsModule } from 'ng2-charts';
// import { ChartModule } from 'angular2-chartjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfopanelverticalComponent } from './infopanelvertical/infopanelvertical.component';
import { HeaderComponent } from './header/header.component';
import { VerticalsidebarComponent } from './verticalsidebar/verticalsidebar.component';
import { TerminalpipeComponent } from './terminalpipe/terminalpipe.component';
import { AnimationbarComponent } from './animationbar/animationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InfopanelverticalComponent,
    HeaderComponent,
    VerticalsidebarComponent,
    TerminalpipeComponent,
    AnimationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
