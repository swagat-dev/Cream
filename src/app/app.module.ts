import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  MatSidenavModule,
  MatDividerModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatAutocompleteModule
} from '@angular/material';
import { HighchartsChartModule } from 'highcharts-angular';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './dashboard/main-content/main-content/main-content.component';
import { DisplayModalComponent } from './shared/modals/display-modal/display-modal.component';
import { NumberFormatterPipe } from './shared/pipes/number-formatter.pipe';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon/coming-soon.component';
import { LoginComponent } from './login/login.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ThreadComponent } from './thread/thread.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrHeaderComponent } from './landing-page/cr-header/cr-header.component';
import { CrHomeComponent } from './landing-page/cr-home/cr-home.component';
import { CrProcessComponent } from './landing-page/cr-process/cr-process.component';
import { CrGraphComponent } from './landing-page/cr-graph/cr-graph.component';
import { CrWinnersComponent } from './landing-page/cr-winners/cr-winners.component';
import { CrContactComponent } from './landing-page/cr-contact/cr-contact.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { AsTrainerComponent } from './training-container/as-trainer/as-trainer.component';
import { NotATrainerComponent } from './training-container/not-a-trainer/not-a-trainer.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { TrainerProfileComponent } from './profile-container/trainer-profile/trainer-profile.component';
import { OtherProfileComponent } from './profile-container/other-profile/other-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    MainContentComponent,
    DisplayModalComponent,
    NumberFormatterPipe,
    ComingSoonComponent,
    LoginComponent,
    ThreadComponent,
    LandingPageComponent,
    CrHeaderComponent,
    CrHomeComponent,
    CrProcessComponent,
    CrGraphComponent,
    CrWinnersComponent,
    CrContactComponent,
    CommonHeaderComponent,
    TemplateContainerComponent,
    NewThreadComponent,
    TrainingContainerComponent,
    AsTrainerComponent,
    NotATrainerComponent,
    ProfileContainerComponent,
    TrainerProfileComponent,
    OtherProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatAutocompleteModule,
    RouterModule,
    HighchartsChartModule,
    CarouselModule.forRoot(),
    DragDropModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ],
  entryComponents: [
    DisplayModalComponent,
    NewThreadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
