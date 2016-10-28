import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyTeamsPage, StandingsPage, TeamDetailPage, TeamHomePage, TeamsPage, TournamentsPage } from "../pages/pages";
import { EliteApi } from "../shared/shared";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    StandingsPage,
    TeamDetailPage,
    TeamHomePage,
    TeamsPage,
    TournamentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    StandingsPage,
    TeamDetailPage,
    TeamHomePage,
    TeamsPage,
    TournamentsPage
  ],
  providers: [
    EliteApi
  ]
})
export class AppModule {}
