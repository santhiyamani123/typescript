import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonuserdetailsComponent } from './jsonuserdetails/jsonuserdetails.component';
import { ArrayofobjComponent } from './arrayofobj/arrayofobj.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonuserdetailsComponent,
    ArrayofobjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
