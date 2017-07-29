import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './overview/overview.component';
import { TeamComponent } from './team/team.component';
import { HazzardsComponent } from './hazzards/hazzards.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChecklistComponent } from './checklist/checklist.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    MapComponent,
    LoginComponent,
    PageNotFoundComponent,
    OverviewComponent,
    TeamComponent,
    HazzardsComponent,
    CommunicationComponent,
    ChecklistComponent,
  ],
  exports: [
    MapComponent,
    LoginComponent,
    OverviewComponent,
    TeamComponent,
    CommunicationComponent,
    ChecklistComponent
  ]
})
export class ComponentsModule { }
