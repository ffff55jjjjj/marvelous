import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MarvelousComponent } from './components/marvelous/marvelous.component';
import { ActivityComponent } from './components/activity/activity.component';
import { WonderfulComponent } from './components/wonderful/wonderful.component';
import { JoinComponent } from './components/join/join.component';
import { OtherComponent } from './components/other/other.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MarvelousComponent,
    ActivityComponent,
    WonderfulComponent,
    JoinComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
