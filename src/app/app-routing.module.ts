import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BNBTComponent } from './bnbt/bnbt.component';
import { QuestionsComponent } from './bnbt/questions/questions.component';
import { StatusComponent } from './bnbt/status/status.component';
import { SummaryComponent } from './bnbt/summary/summary.component';
import { TerminateCallComponent } from './bnbt/terminate-call/terminate-call.component';
import { TwoWayAudioComponent } from './bnbt/two-way-audio/two-way-audio.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'BasicNetworkBoundTest', component: BNBTComponent },
  { path: 'BasicNetworkBoundTestQuestion', component: QuestionsComponent },
  { path: 'BasicNetworkBoundTestStatus', component: StatusComponent },
  { path: 'BasicNetworkBoundTwoWayAudio', component: TwoWayAudioComponent },
  { path: 'BasicNetworkBoundTerminatecall', component: TerminateCallComponent },
  { path: 'BasicNetworkBoundSummary', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
