import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    MapComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  exports: [
    MapComponent,
    LoginComponent,
  ]
})
export class ComponentsModule { }
