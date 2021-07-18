import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { BNBTComponent } from './bnbt/bnbt.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { QuestionsComponent } from './bnbt/questions/questions.component';
import {MatSelectModule} from '@angular/material/select';
import { StatusComponent } from './bnbt/status/status.component';
import { PinPromtComponent } from './bnbt/pin-promt/pin-promt.component';
import { TwoWayAudioComponent } from './bnbt/two-way-audio/two-way-audio.component';
import { TerminateCallComponent } from './bnbt/terminate-call/terminate-call.component';
import { SummaryComponent } from './bnbt/summary/summary.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BNBTComponent,
    QuestionsComponent,
    StatusComponent,
    PinPromtComponent,
    TwoWayAudioComponent,
    TerminateCallComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
