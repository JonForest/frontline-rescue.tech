import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutesModule } from 'app/app.routes';
import { ComponentsModule } from 'app/components/components.module';
import { MapService } from 'app/services/map.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    appRoutesModule,
    ComponentsModule
  ],
  providers: [
    MapService,
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
