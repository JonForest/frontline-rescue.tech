import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  exports: [
    MapComponent,
    LoginComponent,
    PageNotFoundComponent,
  ]
})
export class ComponentsModule { }
