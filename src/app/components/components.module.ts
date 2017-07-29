import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './overview/overview.component';
import { TeamComponent } from './team/team.component';
import { HazardsComponent } from './hazards/hazards.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from 'app/components/icon/icon.component';
import { AddHazardComponent } from './add-hazard/add-hazard.component';
import {HttpClientModule} from '@angular/common/http';
import { DiectionsComponent } from './diections/diections.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    MapComponent,
    LoginComponent,
    PageNotFoundComponent,
    OverviewComponent,
    TeamComponent,
    HazardsComponent,
    CommunicationComponent,
    ChecklistComponent,
    HeaderComponent,
    IconComponent,
    AddHazardComponent,
    DiectionsComponent,
  ],
  exports: [
    MapComponent,
    LoginComponent,
    OverviewComponent,
    TeamComponent,
    CommunicationComponent,
    ChecklistComponent,
    HeaderComponent,
    IconComponent,
    HazardsComponent,
    AddHazardComponent
  ]
})
export class ComponentsModule { }
